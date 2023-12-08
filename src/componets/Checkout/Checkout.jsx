import React, { useContext, useState } from 'react';
import { CartContext } from '../../Context/CartContext';
import { collection, documentId, getDocs, query, where, writeBatch, addDoc } from 'firebase/firestore'; // Agregamos addDoc
import { db } from '../config/firebaseConfig';
import { CheckoutForms } from '../CheckoutForms/CheckoutForms';
import { Timestamp } from 'firebase/firestore';

export const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext);
  const [isLoading, setIsLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const subTotal = (producto) => {
    return producto.precio * producto.quantity;
  };

  const total = cart.reduce((tot, producto) => {
    return tot + subTotal(producto);
  }, 0);
  console.log(total);

  const createOrder = async ({ name, phone, email }) => {
    setIsLoading(true);

    try {
      const objOrder = {
        buyer: {
          name,
          phone,
          email,
        },
        items: cart,
        total: total,
        date: Timestamp.fromDate(new Date()),
      };
      console.log(objOrder);

      const batch = writeBatch(db);

      const outOfStock = [];

      const ids = cart.map((prod) => prod.id);

      const productsRef = collection(db, 'products');

      const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)));

      productsAddedFromFirestore.forEach((doc) => {
        const product = doc.data();
        console.log(product)

        const itemInCart = cart.find((item) => item.id === doc.id);

        if (product.stock >= itemInCart.quantity) {
          batch.update(doc.ref, { stock: product.stock - itemInCart.quantity });
        } else {
          outOfStock.push({ ...product, id: doc.id });
        }
      });

      if (outOfStock.length === 0) {
        await batch.commit();

        const ordersRef = collection(db, 'orders');

        // Reemplazamos ordersRef.add por addDoc
        const newOrderRef = await addDoc(ordersRef, objOrder);

        setOrderId(newOrderRef.id);

        clearCart();
      } else {
        alert(`Los siguientes productos están fuera de stock: ${outOfStock.map((prod) => prod.nompreProducto).join(', ')}`);
      }
    } catch (error) {
      console.log('Error al crear la orden:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <h1>Se está generando su orden...</h1>;
  }

  if (orderId) {
    return <h1>El id de su orden es: {orderId}</h1>;
  }

  return (
    <div>
      <h1>Checkout</h1>
      <CheckoutForms onConfirm={createOrder} />
    </div>
  );
};
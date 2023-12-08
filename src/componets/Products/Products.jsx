import { collection, doc, getDocs, query, updateDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../config/firebaseConfig";

export const Products = () => {
    const [products, setProducts] = useState([]);
    const [changes, setChanges] = useState(true);


    const descStock = async (product) => {
        const productRef = doc(db, "products", product.id);
        const newStock = product.stock - 1;
        await updateDoc(productRef, { stock: newStock });
        setChanges(!changes);
      };

    useEffect(()=>{

        const myProducts = query ( collection(db,"products"));
        getDocs(myProducts)
            .then (resp =>{
                const productsList = resp.docs.map(doc => ({id: doc.id, ...doc.data()} ) )
                setProducts(productsList)
            })
            .catch(error => console.log(error));

    },[changes]);
  return (
    <>
    <h1>products</h1>
    {products.map((product) =>(
        <div key={product.id}>
            <p>Nombre : {product.nombreProducto}</p>
            <p>Precio : {product.precio}</p>
            <p>Stock : {product.stock}</p>
            <button onClick={() => descStock(product)}>Comprar</button>

        </div>
    ))
    
}
    </>
  )
}

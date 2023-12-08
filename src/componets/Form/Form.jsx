import { addDoc, collection } from "firebase/firestore";
import { useEffect, useState } from "react"
import { db } from "../config/firebaseConfig";
import { getProducts } from "../../asyncMock";

export const Form = () => {
    const handleLoadProducts = () => {
        getProducts()
        .then((resp) => {
            resp.forEach((product) => {
                const newProduct = {
                    rubro: product.rubro,
                    nombreProducto: product.nombreProducto,
                    imagen: product.imagen,
                    precio: product.precio,
                    stock: product.stock,
                }
                addDoc(collection(db, "products"),newProduct)
            })
            console.log(resp)
          })
          .catch((error) => {
            console.log("error" + error);
          });
    }
       
  return (
    <>
      <button onClick={handleLoadProducts}>Cargar productos</button>
    </>
  )
}
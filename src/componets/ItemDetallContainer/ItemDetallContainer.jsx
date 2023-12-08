import React, { useEffect, useState } from 'react';
import { getProductsById } from '../../asyncMock';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../config/firebaseConfig';

export const ItemDetallContainer = () => {
    const [products, setProducts] = useState(null);
    const [productExists, setProductExists] = useState(true);

    const { itemId } = useParams();

    useEffect(() => {
        const docRef = doc(db, 'products', itemId);

        getDoc(docRef)
            .then(resp => {
                const data = resp.data();
                if (data) {
                    const myProduct = { id: resp.id, ...data };
                    setProducts(myProduct);
                } else {
                    setProductExists(false);
                }
            })
            .catch(error => {
                console.log(error);
            });
    }, [itemId]);

    return (
        <div className="container d-flex flex-sm-wrap">
            {products ? (
                <ItemDetail {...products} />
            ) : productExists ? (
                <h2>Cargando...</h2>
            ) : (
                <h2>Producto no encontrado</h2>
            )}
        </div>
    );
};
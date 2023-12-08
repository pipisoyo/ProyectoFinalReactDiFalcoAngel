import React from 'react';
import './CartItem.css';

export const CartItem = ({ nombreProducto, precio, imagen, stock, rubro, id, quantity = 1 }) => {
  const subTotal = precio * quantity;

  return (
    <>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4 d-flex justify-content-center align-items-center">
            <img
              src={`/src/img/${imagen}`}
              alt="Imagen producto"
              className="img-fluid"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{nombreProducto}</h5>
              <p className="card-text">Precio : ${precio}</p>
              <p className="card-text">Cantidad: {quantity}</p>
              <p className="card-text">Subtotal: ${subTotal}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
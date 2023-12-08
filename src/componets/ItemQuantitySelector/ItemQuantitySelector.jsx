import { useState } from "react";

export const ItemQuantitySelector = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(0);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-3">
          <button
            className="btn btn-secondary"
            onClick={decrement}
            disabled={quantity === 1}
          >
            -
          </button>
        </div>
        <div className="col-6 text-center">
          <h4 className="m-0">{quantity}</h4>
        </div>
        <div className="col-3">
          <button
            className="btn btn-secondary"
            onClick={increment}
            disabled={quantity === stock}
          >
            +
          </button>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-12">
          <button
            className="btn btn-primary"
            onClick={() => onAdd(quantity)}
            disabled={!stock}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

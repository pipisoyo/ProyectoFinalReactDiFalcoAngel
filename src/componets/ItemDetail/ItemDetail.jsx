import { ItemQuantitySelector } from "../ItemQuantitySelector/ItemQuantitySelector";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
export const ItemDetail = ({ nombreProducto, precio, imagen, stock, rubro, id }) => {
  const [quantityAgr, setQuantityAgr] = useState(0);

  const {addItem} = useContext(CartContext)
  


  const handleAgr = (quantity) => {
    setQuantityAgr(quantity)

    const item = { id, nombreProducto , precio, imagen,stock}

    addItem(item,quantity)
  }

  return (
    <>
      <div className="border border-3 p-3 d-flex flex-column m-2">
        <h5>{nombreProducto}</h5>
        <img
          src={"/src/img/" + imagen}
          alt="Imagen producto"
          width={120}
          height={120}
        />
        <p>Categoria : {rubro}</p>
        <p>Categoria : {stock}</p>
        <p>Precio : ${precio}</p>

        {
          quantityAgr > 0 ?(
            <Link to='/cart'>Finalizar compra</Link>
          ) : (
        
        <ItemQuantitySelector initial={1} stock={stock} onAdd={(handleAgr)}/>
        )
          }
      </div>
    
    </>
  );
};

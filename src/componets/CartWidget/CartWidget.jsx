import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import { Link } from "react-router-dom"

export const CardWidget = () => {
  const {getTotalQuantity} = useContext(CartContext)

    return (
      <Link to='/cart'>
        <div className="d-flex align-items-center">
          <i className="bi bi-cart"></i> 
          <span className="mx-2">{getTotalQuantity()}</span>

        </div>
      </Link>
    )
}
import { Link, NavLink } from "react-router-dom";
import { ItemListContainer } from "../ItemListContainer/ItemListContainer";

export const Categorys = ({ rubros }) => {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {rubros.map((rubro, index) => (
              <li key={index} className="nav-item">
                <Link to={`/category/${rubro}`} className="nav-link">
                  {rubro}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
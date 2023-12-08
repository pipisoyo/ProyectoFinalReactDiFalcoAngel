import { useEffect, useState } from "react";

import { CategoryList } from "../CategoryList/CategoryList";
import { getProducts } from "../../asyncMock";

export const CategoryListContainer = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then((resp) => {
        {
          setProducts(resp);
          setisLoading(!isLoading);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="container d-flex flex-sm-wrap">   
          <CategoryList products={products} />
      </div>
    </>
  );
};

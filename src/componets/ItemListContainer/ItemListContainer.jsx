import { useEffect , useState } from "react";
import { getProducts, getProductsByCategory } from "../../asyncMock";
import { ItemList } from "../ItemList/itemList";
import { Form, useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

export const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([]);
  const [isLoandig, setIsLoandig] = useState(true);
  const {categoryId} = useParams()

    useEffect(() => {
        setIsLoandig(true)
      
        const collectionRef = categoryId
  ? query(collection(db,'products'),where('rubro','==',categoryId))
  : collection(db,'products')
        
  getDocs(collectionRef)
  .then(resp => {
    const myProducts = resp.docs.map(doc=>{
      return{ id: doc.id, ...doc.data()}
    })
    setProducts(myProducts)
    console.log(resp)
    console.log(myProducts)
  })
    .catch(error=>{
      console.log(error);
    })
    .finally(()=>{
      setIsLoandig(false)
    })
  },[categoryId]);

  console.log(products)

  return (
    <>
      <div className="container d-flex flex-sm-wrap">
        {isLoandig ? (
          <h3>Cargando...</h3>
        ) : (
          <>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
          </>
        )}
      </div>
    </>
  )
}
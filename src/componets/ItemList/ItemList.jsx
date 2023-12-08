import { Item } from "../Item/Item"

export const ItemList = ({products}) => {
  return (
    <div className="container d-flex flex-sm-wrap">
        {products.map(prod=> <Item key={prod.id} {...prod}/>)}
    </div>
  )
}

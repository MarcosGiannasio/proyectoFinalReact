import { useEffect, useState } from "react";
import { getProducts, getProductsByCategory } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import './ItemListContainer.css'


const ItemListContainer = ({greetings}) => {
          const [products, setProducts] = useState([])
          const [loading, setLoading] = useState(true)
          const {categoryId} = useParams()


          useEffect (() => {
                    setLoading(true)
                    const asynFunctions = categoryId ? getProductsByCategory : getProducts
                    asynFunctions(categoryId)
                    .then (res => {
                              setProducts(res)
                    })
                    .catch( error => {
                              console.log(error)
                    })
                    .finally(() => {
                              setLoading(false)
                    })
          }, [categoryId])

          if (loading) {
                    return <div class="text-center">
                    <div class="spinner-border mt-5 " role="status"></div>
                    </div>
          }

          return (
                    <div>
                              <h1 className="h3 mx-4 mt-4 font" >{greetings}{categoryId}.. .</h1>
                              <ItemList products={products}/>
                    </div>
          )
}

export default ItemListContainer ;

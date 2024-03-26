import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import './ItemListContainer.css'
import { db } from "../../services/firebase";
import { collection, getDocs, query, where  } from "firebase/firestore";


const ItemListContainer = ({greetings}) => {
          const [products, setProducts] = useState([])
          const [loading, setLoading] = useState(true)
          const {categoryId} = useParams()


          useEffect (() => {
                    setLoading(true)
                    const collectionRef = categoryId
                    ? query(collection(db, "products"), where("category", "==", categoryId))
                    : collection(db, "products")

                    getDocs(collectionRef)
                    .then((querySnapshot) => {
                              const products = querySnapshot.docs.map((doc) => {
                                        return {id:doc.id, ...doc.data()}
                              })
                    setProducts(products)
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

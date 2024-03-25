import { useEffect, useState } from "react";
import { getProductById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {

          const [ product, setProduct] = useState(null);

          const [loading, setLoading] = useState(true);

          const {productId} = useParams()

          useEffect (()=> {
                    getProductById(productId)
                    .then( res  =>  {
                              setProduct(res)
                    })
                    .catch (error =>  {
                              console.log(error)
                    })
                    .finally (()=>{
                              setLoading(false)
                    })
          }, [productId])

          return (
                    <div>
                             { loading ? 
                    <div class="text-center">
                    <div class="spinner-border mt-5 " role="status"></div>
                    </div> : <ItemDetail {...product} />}
                    </div>
          )
}

export default ItemDetailContainer;
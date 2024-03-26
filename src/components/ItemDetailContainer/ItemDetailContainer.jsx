import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { QueryDocumentSnapshot, doc, getDoc} from "firebase/firestore";
import { db } from "../../services/firebase";


const ItemDetailContainer = () => {

          const [ product, setProduct] = useState(null);

          const [loading, setLoading] = useState(true);

          const {productId} = useParams();

          useEffect (()=> {
                    getDoc(doc(db, "products", productId))
                    .then((querySnapshot) => {
                    const product = {id: querySnapshot.id, ...querySnapshot.data()}
                    setProduct(product)
                   })
                   .catch((err) =>{
                    console.error(err)
                   })
                   .finally(() => {
                    setLoading(false)
                   })
          }, [productId])

          return (
                    <div>
                             { loading ? 
                    <div class="text-center">
                    <div class="spinner-border mt-5 " role="status"></div>
                    <div>cargando detalle...</div>
                    </div> : <ItemDetail {...product} />}
                    </div>
          )
}

export default ItemDetailContainer;
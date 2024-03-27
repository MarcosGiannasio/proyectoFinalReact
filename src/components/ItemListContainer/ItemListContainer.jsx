import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import './ItemListContainer.css'
import { getProducts } from "../../services/firebase/firebase";
import { useAsync } from "../../hooks/useAsync";


const ItemListContainer = ({greetings}) => {

          const {categoryId} = useParams()
          const getProductFromFirestore = () => getProducts(categoryId);
          const {data, error, isLoading} = useAsync(getProductFromFirestore, [categoryId])
 
          if (isLoading) {
                    return <div class="text-center">
                    <div class="spinner-border mt-5 " role="status"></div>
                    </div>
          }
          if (error) {
                    return <h1>Hubo un Error</h1>
          }
          if(data.length === 0) {
                    return categoryId ? (
                              <h1 className="font text-center mt-5 ">No hay productos en nuestra categoría {categoryId}</h1>
                    ) : (
                              <h1 className="font text-center mt-5 ">No hay productos disponibles :/ {categoryId}</h1>
                    )
          }

          return (
                    <div>
                              <h1 className="h3 mx-4 mt-4 font" >{greetings}{categoryId}.. .</h1>
                              <ItemList products={data}/>
                    </div>
          )
}

export default ItemListContainer ;

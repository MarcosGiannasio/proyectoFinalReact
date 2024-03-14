
import ItemCount from "../ItemCount/ItemCount";



const ItemDetail = ({name, img, category, price, description, stock}) => {
          return (
                    
                    
          <section className="container">
                    <article className="row text-center">
                              <div className="card m-3">
                              <img src={img} className="card-img-top mx-auto rounded mt-3" style={{width: 300 }} />
                              <div className="card-body">
                              <h1 className="card-title mt-3 mb-3">{name}</h1>
                              <p className="card-text mt-3 mb-3 p-2">Categoría: {category}</p>
                              <p className="card-text mt-3 mb-3 p-2">Descripción: {description} </p>
                              <h1 className="h2 mb-3">Precio: $ {price}</h1>   
                              <ItemCount stock = {stock}  />                                 
                              </div> 
                              </div>
                              
                    </article>
                    
          
          
          </section>
          )
}

export default ItemDetail;



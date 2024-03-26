import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css'
import { Link } from "react-router-dom";
import { useCart } from "../../context/cartContext";



const ItemDetail = ({id, name, img, category, price, description, stock}) => {

          const {addItem, isInCart} = useCart();

          const handleAdd = (count)  => {
                    console.log("Agregar al carrito");
                    const productObj = {
                              id, name, price, quantity: count
                    } 
          addItem(productObj)
          Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `Agregaste: ${count} ${name}`,
                    showConfirmButton: false,
                    timer: 3000,
                    width:300,
                    height: 200,
          
                  });
};
          return (
                    
                    
          <section className="container">
                    <article className="row text-center font">
                              <div className="card m-3">
                              <img src={img} className="card-img-top mx-auto rounded mt-3" style={{width: 300 }} />
                              <div className="card-body">
                              <h1 className="card-title mt-3 mb-3">{name}</h1>
                              <p className="card-text mt-3 mb-3 p-2">Categoría: {category}</p>
                              <p className="card-text mt-3 mb-3 p-2">Descripción: {description} </p>
                              <h1 className="h2 mb-3">Precio: $ {price}</h1>   
                              <footer>
                                        {isInCart(id) ? (
                                        <Link to= "/cart">Ir al Carrito</Link>
                                        ): (
                                                  <ItemCount onAdd={handleAdd} stock={stock}/>
                                        )}
                              </footer>
                              </div> 
                              </div>
                              
                    </article>
                    
          
          
          </section>
          )
}

export default ItemDetail;



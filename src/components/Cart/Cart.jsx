import { Link } from "react-router-dom";
import { useCart } from "../../context/cartContext"
import CartItem from "../CartItem/CartItem";


const Cart = () => {
          const {cart, clearCart, getTotal, totalQuantity} = useCart();
          const total = getTotal()

          if (totalQuantity === 0) {
                    return <div className="text-center mt-5 h3"> 
                              <h1 >No hay items en el carrito :´( </h1>
                              <Link to={"/"}  className="btn btn-secondary mt-5">Explorar</Link>
                    </div>
          }
          return (
                    <div className="mx-4 mt-4">
                              <h1 className="font h2 mb-5">Detalle de tu compra...</h1>
                              {
                                        cart.map((item) => (
                                        <CartItem key={item.id} {...item}/>
                                        ))}
                    
                    
                              <section className="text-center mb-5">
                              <h4 className="mt-4">Total: $ {total}</h4>
                              <div className="mb-1">
                              <button className="mt-4 btn btn-terciary h5" onClick={()=> clearCart()}>Limpiar Carrito</button>
                              </div>
                              <Link  className="btn btn-secondary" to="/checkout">Finalizar Compra</Link>
                              </section>
                              <Link to ="/"className="btn btn-terciary"><strong>👉 seguir comprando</strong></Link>
                    </div>  
                        
                    
          );
}

export default Cart
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
                    <div>
                              <h1>CART</h1>
                              {
                                        cart.map((item) => (
                                        <CartItem key={item.id} {...item}/>
                                        ))}
                    
                              <h3>Total: $ {total}</h3>
                              <div>
                              <button onClick={()=> clearCart()}>Limpiar Carrito</button>
                              </div>
                              <Link to="/checkout">Finalizar Compra</Link>
                              
                    </div>
          );
}

export default Cart
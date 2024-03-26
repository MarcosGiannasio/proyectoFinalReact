import { useCart } from "../../context/cartContext";

const CartItem = ({id, name, quantity, price }) => {

          const {removeItem} = useCart()
          const handleRemove = (id) => {
                    removeItem(id);
          };
          return (
                    <article className="row text-center">
                              <header>
                                        <h2>{name}</h2>
                              </header>
                              <section>
                                        <p>Cantidad: {quantity}</p>
                                        <p>Precio por unidad: $ {price}</p>
                              </section>
                              <footer>
                                        <p>Subtotal: $ {price * quantity}</p>
                                        <button className="btn btn-terciary" onClick={() => handleRemove(id)}><i class="bi bi-trash"></i></button>
                                        <hr />
                              </footer>
                              
                    </article>
                  
                    );
}

export default CartItem;       
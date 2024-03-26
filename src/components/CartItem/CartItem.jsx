import { useCart } from "../../context/cartContext";



const CartItem = ({id, name, quantity, price, img }) => {

          const {removeItem} = useCart()
          const handleRemove = (id) => {
                    removeItem(id);
          };
          return (
                    <div className="card font mb-3 shadow p-3 mb-5 bg-body rounded">
                              <section className="d-flex mt-2 justify-content-between align-items-center mb-2 mx-3">
                                        <h4 className="">{name}</h4>
                                        <p>Cantidad: {quantity}</p>
                                        <p>Precio por unidad: $ {price}</p>
                                        <p>Subtotal: $ {price * quantity}</p>
                                        <button className="btn btn-terciary" 
                                        onClick={() => handleRemove(id)}><i class="bi bi-trash"></i></button>

                              </section>
                              </div>
                  
                    );
}

export default CartItem;       
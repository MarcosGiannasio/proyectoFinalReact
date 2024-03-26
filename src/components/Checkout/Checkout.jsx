import { useState } from "react"
import { useCart } from "../../context/cartContext"
import {db} from "../../services/firebase"
import {addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore"



const checkout = () => {
          const [loading, setLoading] = useState(false)
          const [orderCreated, setOrderCreated] = useState(false)

          const {cart, totalQuantity, getTotal, clearCart} = useCart();
          const total = getTotal();

          const createOrder = async () => {
                    setLoading(true)
                    try {
                    const objOrder = {
                              buyer: {
                                        firstName: "Marcos",
                                        lastName: "Giannasio",
                                        phone: "212323",
                                        adress: "Acá Nomás"
                              },
                              items: cart, 
                              totalQuantity,
                              total,
                              date: new Date()
                    };

          const ids = cart.map((item)=> item.id);

          const productRef = collection (db, "products");
          const productsAddedFromFirestore = await getDocs (
          query(productRef, where(documentId(), "in", ids)))
          const { docs } = productsAddedFromFirestore;



          const outOfStock = [] ;
          const batch = writeBatch(db)

          docs.forEach((doc) => {
                    const dataDoc = doc.data()
                    const stockDB = dataDoc.stock;

                    const productAddedToCart = cart.find((prod) => prod.id === doc.id);
                    const prodQuantity = productAddedToCart?.quantity

                    if (stockDB >= prodQuantity) {
                              // actualizar la base 
                              batch.update(doc.ref, {stock: stockDB - prodQuantity})
                    } else {
                              outOfStock.push({id: doc.id, ...dataDoc})
                              }
                    });      
          
          if (outOfStock.length === 0) {
                    await  batch.commit();
                    const orderRef = collection(db, "orders");
                    const orderAdded = await addDoc(orderRef, objOrder);
                    console.log(`el id de su orden es: ${orderAdded.id}`);
                    clearCart()
                    setOrderCreated(true)
                    
          } else {
                    Swal.fire({
                              icon: "error",
                              text: "Hay productos que estan fuera de stock",
                            });          }
}        catch(error) { 
          console.log(error)
} finally {
          setLoading(false)
}
}        



          if (loading){
                    return <h1 className="font text-center">Generando su orden...</h1>
          }
          if (orderCreated) {
                    return (
                              Swal.fire({
                                        icon: "success",
                                        title: "La orden fue generada",
                                        showConfirmButton: false,
                                        timer: 1500
                                      }))
                    
          }





          return (
                    <>
                    <h1>checkout</h1>
                    
                    <div>Confirmación del pedido</div>

                    <button onClick={createOrder}>generar Orden</button>
                    </>
          )
          }

export default checkout
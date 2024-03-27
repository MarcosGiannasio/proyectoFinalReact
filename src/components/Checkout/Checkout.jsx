import { useRef, useState } from "react";
import { useCart } from "../../context/cartContext";
import { db } from "../../services/firebase";
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore";
import { Form } from "react-bootstrap";
import { useFromData } from "../../hooks/useFromData"; 
import './Checkout.css';

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const { inputs, handleChange } = useFromData();
    const [orderCreated, setOrderCreated] = useState(false)
    const { cart, totalQuantity, getTotal, clearCart } = useCart();
    const total = getTotal();
    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
        if(form.checkValidity() === true) createOrder(event)
    };
    const createOrder = async (event) => {
        event.preventDefault();
        try {
            const objOrder = {
                buyer: {
                    firstName: inputs.firstname,
                    lastName: inputs.lastname,
                    phone: inputs.phone,
                    address: inputs.address
                },
                items: cart, totalQuantity, total,
                date: new Date()
            }

            const ids = cart.map((item) => item.id);
            const productRef = collection(db, "products");
            const productsAddedFromFirestore = await getDocs(
                query(productRef, where(documentId(), "in", ids)));

            const { docs } = productsAddedFromFirestore;
            const outOfStock = [];
            const batch = writeBatch(db);

            docs.forEach((doc) => {
                const dataDoc = doc.data();
                const stockDb = dataDoc.stock;
                const productAddedToCart = cart.find((prod) => prod.id === doc.id);
                const prodQuantity = productAddedToCart?.quantity;
                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }
            });

            if (outOfStock.length === 0) {
                await batch.commit();
                const orderRef = collection(db, "orders");
                const orderAdded = await addDoc(orderRef, objOrder);
                console.log(`el id de su orden es: ${orderAdded.id}`);
                clearCart();
                setOrderCreated(true)
            } else {
                Swal.fire({
                    icon: "error",
                    text: "Hay productos que estan fuera de stock",
                  });          
            }
        } catch (error) {
            console.log(error)
        }finally {
            setLoading(false)
  }
    };
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
        <div className=" font shadow-lg p-3 mb-5 bg-white rounded " >
            
            <Form noValidate validated={validated} onSubmit={handleSubmit} className="form-center">
                <Form.Group className="mb-3" controlId="firstname">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control required type="text" placeholder="Ingresá tu nombre"
                        value={inputs.name} onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="lastname">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control required type="text" placeholder="Ingresá tu apellido"
                        value={inputs.name} onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3"controlId="phone">
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control required type="tel" placeholder="11 2233 4455"
                        value={inputs.name} onChange={handleChange} />
                </Form.Group>

                <Form.Group  className="mb-3" controlId="email">
                    <Form.Label>Correo</Form.Label>
                    <Form.Control required type="email" placeholder="mail@example.com"
                        value={inputs.name} onChange={handleChange} />
                </Form.Group>

                 <Form.Group className="mb-3" controlId="address">
                    <Form.Label>Dirección</Form.Label>
                    <Form.Control as="textarea" placeholder="Ingresá la direccion de envío de tu orden" rows={2} required
                        value={inputs.name} onChange={handleChange} />
                </Form.Group>
                <div className="text-center">
                    <button className="mt-5mx-4 btn btn-secondary mt-5" 
                      onClick={createOrder}>Generar pedido
                    </button>
                    </div>

            </Form>
        </div>
    );
};

export default Checkout;
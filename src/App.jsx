import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartProvider } from "./context/cartContext"
import Cart from "./components/Cart/Cart"
import Checkout from "./components/Checkout/Checkout"
import Footer from "./components/Footer/Footer"

function App() {

  return (
    <>
    <BrowserRouter>
      <CartProvider>
        <NavBar/>
        <Routes>
          <Route path ="/" element={<ItemListContainer greetings= {"Nuestros Productos..."}/>}/>
          <Route path ="/category/:categoryId" element={<ItemListContainer 
          greetings={"Listado de productos para tu " }/>}/>
          <Route path ="/detail/:productId"  element={<ItemDetailContainer/>}/>
          <Route path ="/cart"  element={<Cart/>}/>
          <Route path ="/checkout"  element={<Checkout/>}/>
          <Route path ="*"  element={<h3 className="text-center font mt-5">404 NOT FOUND</h3>}/>


        </Routes>
        </CartProvider>
        <Footer/>
</BrowserRouter>
    </>
  )
}

export default App
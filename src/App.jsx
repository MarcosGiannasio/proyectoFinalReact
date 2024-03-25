import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartProvider } from "./context/cartContext"

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
          <Route path ="/cart"  element={<h1>Elementos en el carrito</h1>}/>
        </Routes>
        </CartProvider>
        </BrowserRouter>
    </>
  )
}

export default App

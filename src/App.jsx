import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {


  return (
    <>
    <BrowserRouter>
        <NavBar/>
        <Routes>

          <Route path ="/" element={<ItemListContainer greetings= {"Nuestros Productos..."}/>}/>
          <Route path ="/category/:categoryId" element={<ItemListContainer 
          greetings={"Listado de productos para tu " } />}/>
          <Route path ="/detail/:productId" element={<ItemDetailContainer/>} />
          
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

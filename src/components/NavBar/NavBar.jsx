import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom";

const NavBar = () => {
return (
          <nav style = {{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                    <h1>Ecommerce</h1>
                    <section>
                              <Link to={"/category/Baño"}>Baño</Link>
                              <Link to={"/category/Living"}>Living</Link>
                              <Link to={"/category/Cocina"}>Cocina</Link>
                    </section>
                    <CartWidget/>
          </nav>
);
}

export default NavBar
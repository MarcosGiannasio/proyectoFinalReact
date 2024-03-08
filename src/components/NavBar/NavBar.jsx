import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom";

const NavBar = () => {
return (
          <nav style = {{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                    <h1>MB Interiores - Deco</h1>
                    <section>
                              <Link to={"/category/baño"}>Baño</Link>
                              <Link to={"/category/living"}>Living</Link>
                              <Link to={"/category/cocina"}>Cocina</Link>
                    </section>
                    <CartWidget/>
          </nav>
);
}

export default NavBar
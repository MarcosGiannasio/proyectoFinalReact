import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom";

const NavBar = () => {
return (
          <nav class="navbar navbar bg-body-tertiary "/* style = {{display:"flex", justifyContent:"space-between", alignItems:"center"}}*/ >
                    <a href="/"class="h2 my-4 mx-4"><img src="./src/assets/logoBrown.jpg" width="90" height="75"/></a>
                    <section >
                              <Link to={"/category/baño"} class="btn btn-secondary ">Baño</Link>
                              <Link to={"/category/living"}class="btn btn-secondary" >Living</Link>
                              <Link to={"/category/cocina"}class="btn btn-secondary">Cocina</Link>
                    </section>
                    <CartWidget/>
          </nav>
);
}

export default NavBar
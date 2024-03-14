import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom";

const NavBar = () => {
return (

<nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a href="/"class="h2 my-4 mx-4"><img src="./src/assets/logoBrown.jpg" className="rounded" width="90" height="75"/></a>  
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
          <Link to={"/category/baño"} class="nav-link">Baño</Link>
          </li>
          <li class="nav-item">
          <Link to={"/category/living"}class="nav-link" >Living</Link>
          </li>
          <li class="nav-item">
          <Link to={"/category/cocina"}class="nav-link">Cocina</Link>
          </li>
          </ul>
          </div>
          <div className="mx-3"><CartWidget/></div>
</nav>
);
}

export default NavBar
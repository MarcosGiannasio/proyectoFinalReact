import { Link } from "react-router-dom";
import  './Item.css'


const Item = ({id, name, img, category, price}) => {
          return (

<article className="col-3">
  <div class=" text-center p-4">
    <div class="card">
      <div class="card-body font">
          <img  className="rounded" src={img} style={{width: 200}}/>
        <h1 class="card-title mt-4 h2">{name}</h1>
        <p>categoría: {category}</p>
        <h2 class="h4">${price}</h2>
        <p class="card-text"></p>
        <Link to = {`/detail/${id}`}className="btn btn-secondary mb-2">Ver Detalle</Link>
      </div>
    </div>
  </div>

  
  </article>

  
  
          )
}

export default Item;








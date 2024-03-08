import { Link } from "react-router-dom";

const Item = ({id, name, img, category, price}) => {
          return (
                    <section className="container">
                              
                             <article className="row">
                              <div className="card-group text-center p-5" style={{width: 500}}>
                              <div className="card m-3">
                              <img src ={img} className="card-img-top mx-auto rounded mt-3" style={{width: 200}} />
                              <div className="card-body">
                              <h1 className="card-title mt-3 mb-3">{name}</h1>
                              <p className="card-text mt-3 mb-3 p-2">Categoría: {category}</p>
                              <h1 className="h5">$ {price}</h1>
                              </div>
                              <div className="card-footer">
                              <Link to = {`/detail/${id}`}className="btn btn-secondary mb-2">Ver Detalle</Link>
                              </div>
                              </div>
                              </div>
                              </article> 
                    </section>
          )
}

export default Item;








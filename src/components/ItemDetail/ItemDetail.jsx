import ItemCount from "../ItemCount/ItemCount";


const ItemDetail = ({name, img, category, price, description, stock}) => {
          return (
                    <article>
                              <h1>{name}</h1>
                              <img src={img} style={{width: 300 }} />
                              <p>Categoría: {category}</p>
                              <p>Descripción: {description} </p>
                              <h1>Precio: ${price}</h1>
                              <ItemCount stock = {stock} />
                    </article>
          )
}

export default ItemDetail;
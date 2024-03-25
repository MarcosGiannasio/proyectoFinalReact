import logo from '../../assets/cart.svg'
import { useCart } from '../../context/cartContext'

const CartWidget = () => {
          const {totalQuantity} = useCart()
          return (
                    <div>
                    <img width="25" height="25" src  = {logo}/>
                    <strong>{totalQuantity}</strong>
                    </div>
          )
}

export default CartWidget     
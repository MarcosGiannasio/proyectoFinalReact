import { useState } from "react";

const ItemCount = ({initial = 1, stock}) => {

          const [count, setCount] = useState(initial)

          const increment = () => {
                    if (count < stock) {
                              setCount( prev => prev + 1 )
                    }
          }

          const decrement = () => {
                    if (count > 1) {
                              setCount( prev => prev - 1 )
                    }
          }

          return (
                    <div className="card d-inline-block">
                              <div className="d-flex gap-2 align-items-center justify-content-center">
                              <button onClick={decrement}> ➖ </button>
                              <h1 className="h3">{count}</h1>
                              <button onClick={increment}> ➕ </button>
                              </div>
                    </div>
          );
}

export default ItemCount;     
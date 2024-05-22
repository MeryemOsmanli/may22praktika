import React, { useContext } from 'react'
import { MainContext } from '../context/MainProvider'

function Basket() {
 const {basket,setBasket,addBasket,removeBasket,decrease}=useContext(MainContext)
  return (
    <div>
           {
        basket.map((x)=>(
          <div key={x._id}>
            <img src={x.image} alt="" />
            <h5>{x.title}</h5>
            <p>{x.price}</p>

            <button onClick={()=>addBasket(x)}>+</button>
            <button onClick={()=>decrease(x)}>-</button>
            <button onClick={()=>removeBasket(x)}>removeBasket</button>
            <p>count:{x.count}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Basket

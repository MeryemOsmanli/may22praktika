import React, { useContext } from 'react'
import { WishContext } from '../context/WishlistProvider'

function Wishlist() {
  const { wishlist, addWishlist,removeWishlist }=useContext(WishContext)
  return (
    <div>
              {
        wishlist.map((x)=>(
          <div key={x._id}>
            <img src={x.image} alt="" />
            <h5>{x.title}</h5>
            <p>{x.price}</p>
            <button onClick={()=>removeWishlist(x)}>removeBasket</button>
          </div>
        ))
      }
    </div>
  )
}

export default Wishlist

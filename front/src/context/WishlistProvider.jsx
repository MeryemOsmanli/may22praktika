import React, { createContext, useState } from 'react'
export const WishContext = createContext()

function WishlistProvider({ children }) {
    const [wishlist, setWishlist] = useState([]);
 
    function addWishlist(item) {
        const index=wishlist.findIndex((x)=>x._id===item._id)
      
        if (index!==-1) {
            wishlist[index].count++
          
            setWishlist([...wishlist])
        }else{
            setWishlist([...wishlist,{...item,count:1}])
      
        }
       }
      
    function removeWishlist(item) {
        setWishlist(wishlist.filter((x)=>x._id!==item._id))
       }

    return <WishContext.Provider value={{ wishlist, addWishlist,removeWishlist }}>
        {children}
    </WishContext.Provider>
}

export default WishlistProvider

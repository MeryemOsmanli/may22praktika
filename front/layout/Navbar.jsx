import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MainContext } from '../src/context/MainProvider'
import "./navbar.scss"

function Navbar() {
  const {basket}=useContext(MainContext)
  return (
    <div>
         {/* <Link to="/">Home</Link>
         <Link to="basket">Basket{basket.length} </Link>
         <Link to="wishlist">Wishlist</Link>
         <Link to="/admin">AdminHome</Link> */}
         <div className="user_navbar_background ">
          <div className="user_navbar_contain container">
            <div className="user_navbar_left">
              <div>
                <img src="https://preview.colorlib.com/theme/shop/img/logo.png.webp" alt="" />
              </div>
            </div>
            <div className="user_navbar_right">
              <div className='user_li'>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link>ABOUT</Link></li>
                  <li> <Link to="wishlist"><i class="fa-regular fa-heart"></i></Link></li>
                  <li><Link to="basket"><i class="fa-solid fa-bag-shopping"></i>{basket.length} </Link></li>
                  <li> <Link to="/admin">AdminHome</Link></li>
                </ul>
              </div>
              <div className="bars_div">
          <i class="fa-solid fa-bars-staggered"></i>
          </div>
            </div>
          </div>
         </div>
      
    </div>
  )
}

export default Navbar

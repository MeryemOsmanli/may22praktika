import React, { useContext, useEffect, useState } from 'react'
import "./home.scss"
import { MainContext } from '../context/MainProvider'
import { Link, useParams } from 'react-router-dom'
import { WishContext } from '../context/WishlistProvider';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function Home() {
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");


  const { basket, setBasket, addBasket, removeBasket, decrease } = useContext(MainContext)
  const { wishlist, addWishlist, removeWishlist } = useContext(WishContext)
  useEffect(() => {
    getAllInformation()
  }, []);

  async function getAllInformation() {
    const response = await fetch('http://localhost:3000/meryem/');
    const data = await response.json();
    setProduct(data)

  }

  function increaseprice(property) {
    setProduct([...product].sort((a, b) => (a[property] > b[property]) ? 1 : ((b[property] > a[property]) ? -1 : 0)))

  }
  function decreaseprice(property) {
    setProduct([...product].sort((a, b) => (a[property] < b[property]) ? 1 : ((b[property] < a[property]) ? -1 : 0)))

  }

  return (
    <div>
      <Helmet>
        <title>Home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      {/* <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} />

      <button onClick={()=>increaseprice("price")}>artan</button>
      <button onClick={()=>decreaseprice("price")}>azalan</button>

      {
        product
        .filter(x=>x.title.toLowerCase().includes(search.toLowerCase())) 
        .map((x)=>(
          <div key={x._id}>
            <img src={x.image} alt="" />
            <h5>{x.title}</h5>
            <p>{x.price}</p>
            <button><Link to={`detail/${x._id}`} >detail</Link></button>
            <button onClick={()=>addBasket(x)}>addbasket</button>
            <button onClick={()=>addWishlist(x)}>addwishlist</button>
          </div>
        ))
      } */}
      <div className="home_background">
        <div className="home_left">
          <img src="https://preview.colorlib.com/theme/shop/img/header-img.png.webp" alt="" />
        </div>
        <div className="home_right">
          <div>
            <span className='first_sec_span1'>Flat</span>
            <span className='first_sec_span2'>75%Off</span>
          </div>
          <div>
            <h1>IT’S HAPPENING
              THIS SEASON!</h1>
          </div>
          <div>
            <button>PURCHASE NOW</button>
          </div>

        </div>
      </div>
      <div className="dif_categ_background">
        <div className="dif_categ_contain container">
          <div className="dif_categ_contain_left">

            <div className="dif_categ_contain_up">
              <div className="dif_categ_contain_up_left">
                <img src="https://preview.colorlib.com/theme/shop/img/c1.jpg.webp" alt="" />
              </div>
              <div className="dif_categ_contain_up_right">
                <img src="https://preview.colorlib.com/theme/shop/img/c2.jpg.webp" alt="" />
              </div>
            </div>
            <div className="dif_categ_contain_down">
              <img src="https://preview.colorlib.com/theme/shop/img/c3.jpg.webp" alt="" />
            </div>
          </div>
          <div className="dif_categ_contain_right">
            <img src="https://preview.colorlib.com/theme/shop/img/c4.jpg.webp" alt="" />
          </div>
        </div>
      </div>
      <div className="fetch_background">
        <div className="fetch_contain">
          <div className="fetch_text"></div>
          <div className="fetch_boxs">
            {
              product.map((x)=>(

            <div className="fetch_box" key={x._id}>
              <div className="fetch_image">
                <img src={x.image} alt="" />
              </div>
              <div className="fetch_title">
                <h5>{x.title}</h5>
                <p>{x.price}</p>
                <div><button><Link to={`detail/${x._id}`} >detail</Link></button>
                <button onClick={() => addBasket(x)}>addbasket</button>
                <button onClick={() => addWishlist(x)}>addwishlist</button></div>
              </div>
            </div>
              ))
            }

         
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

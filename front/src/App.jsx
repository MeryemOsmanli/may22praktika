
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import MainLayout from "../layout/MainLayout";
import AdminLayout from "../layout/AdminLayout";
import Home from "./pages/Home";
import Basket from "./pages/Basket";
import Wishlist from "./pages/Wishlist";
import AdminHome from "./pages/AdminHome";
import AdminAdd from "./pages/AdminAdd";
import MainProvider from "./context/MainProvider";
import Detail from "./pages/Detail";
import WishlistProvider from "./context/WishlistProvider";
import { Helmet, HelmetProvider } from 'react-helmet-async';

function App() {

  return (
    <>
<WishlistProvider>
<MainProvider>
<HelmetProvider>

<BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="basket" element={<Basket />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="detail/:id" element={<Detail />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminHome />} />
          <Route path="/admin/adminadd" element={<AdminAdd />} />
        </Route>
      </Routes>
    </BrowserRouter>
</HelmetProvider>
</MainProvider>
</WishlistProvider>
    </>
  )
}

export default App

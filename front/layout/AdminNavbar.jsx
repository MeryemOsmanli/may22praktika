import React from 'react'
import { Link } from 'react-router-dom'

function AdminNavbar() {
  return (
    <div>
      <Link to="/admin">AdminHome</Link>
      <Link to="/admin/adminadd">AdminAdd</Link>
      <Link to="/">Home</Link>
    </div>
  )
}

export default AdminNavbar

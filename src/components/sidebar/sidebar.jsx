import './sidebar.css'

import { useState, useEffect } from 'react'

import CatImg from '../../assets/images/cat.png'
import DownMenu from '../../assets/icons/down-menu.svg'
import DashBoardMenu from '../../assets/icons/dashboard-menu.svg'
import CustomerMenu from '../../assets/icons/customer-menu.svg'
import OrderMenu from '../../assets/icons/order-menu.svg'
import ProductMenu from '../../assets/icons/product-menu.svg'
import AboutMenu from '../../assets/icons/about-menu.svg'

import { Link } from 'react-router-dom'

const SideBar = () => {

  return (
    <div className="sidebar">
      <div className="sidebar__admin">
        <img className="sidebar__admin-pic" src={CatImg} alt="cat-png"></img>
        <p>Admin</p>
        <img
          className="down-menu"
          src={DownMenu}
          alt="down-menu"
        ></img>
      </div>
      <div>
        <Link className="sidebar__link" to="/dashBoard">
          <img
            className="sidebar__link-menu"
            src={DashBoardMenu}
            alt="dashboard-menu"
          />
          <span>DashBoard</span>
        </Link>
        <Link className="sidebar__link" to="/customer">
          <img
            className="sidebar__link-menu"
            src={CustomerMenu}
            alt="dashboard-menu"
          />
          <span>Customer</span>
        </Link>
        <Link className="sidebar__link" to="/order">
          <img
            className="sidebar__link-menu"
            src={OrderMenu}
            alt="dashboard-menu"
          />
          <span>Order</span>
        </Link>
        <Link className="sidebar__link" to="/product">
          <img
            className="sidebar__link-menu"
            src={ProductMenu}
            alt="dashboard-menu"
          />
          <span>Product</span>
        </Link>
        <Link className="sidebar__link" to="/about">
          <img
            className="sidebar__link-menu"
            src={AboutMenu}
            alt="dashboard-menu"
          />
          <span>About</span>
          </Link>

          <Link className="sidebar__link" to="/addNewPdt">
          <img
            className="sidebar__link-menu"
            src={AboutMenu}
            alt="dashboard-menu"
          />
          <span>NP</span>
        </Link>
      </div>
    </div>
  )
}
export default SideBar

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DashBoard from '../pages/dashboard/dashboard'
import About from '../pages/about/about'
import Customer from '../pages/customer/customer'
import Order from '../pages/order/order'
import Product from '../pages/product/product'
import AddNewCustomer from '../addNewCustomer/addNewCustomer'
import AddNewOrder from './../addNewOrder/addNewOrder';
import AddNewProduct from '../addNewProduct/addNewProduct'
import Login from '../pages/loginPage/loginPage'
import EditCustomer from '../editCustomer/editCustomer'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />}></Route>
        <Route path="/dashBoard" element={<DashBoard />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="customer" element={<Customer />}></Route>
        <Route path="order" element={<Order />}></Route>
        <Route path="product" element={<Product />}></Route>
        <Route path="addNewCus" element={<AddNewCustomer />}></Route>
        <Route path="addNewOrd" element={<AddNewOrder />}></Route>
        <Route path="addNewPdt" element={<AddNewProduct />}></Route>
        <Route path="editCus" element={<EditCustomer />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router

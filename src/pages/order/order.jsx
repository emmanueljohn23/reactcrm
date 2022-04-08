import React, { useEffect, useState } from 'react'
import { Orderlist } from '../../api/orders_api'
import Search from '../../assets/icons/search.svg'
import Add from '../../assets/icons/addIcon.svg'
import CommonPageWrap from '../../containers/commonPageWrap/commonPageWrap'
import { useNavigate } from 'react-router-dom'

const Order = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([])

  useEffect(() => {
    Orderlist()
      .then((res) => {
        setOrders(res)
      })
      .catch((err) => console.log(err))
  }, [])

  const search_main = () => {
    navigate('/addNewCus')
  }
  return (
    <div>
      <CommonPageWrap>
        <div className='cus_div'>
        <h2 className='cus_head'>Orders({orders.length})</h2>
        <table>
          <thead>
            <tr>
              <th>Reference</th>
              <th>Quantity</th>
              <th>Amount</th>
              <th>Customer</th>
              <th>Order Date</th>
              <th>Shipping Date</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((item, id) => {
              console.log(orders)
              return (
                <tr key={id}>
                  <td>{item.Reference}</td>
                  <td>{item.Quantity}</td>
                  <td>{item.Amount}</td>
                  <td>{item.Customer}</td>
                  <td>{item.OrderDate}</td>
                  <td>{item.ShippingDate}</td>
                  <td>
                    <button>Edit</button>
                    <button>Delete</button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <div className='icon_main'>
              <img className='search_main' src={Search} alt='search'></img>
              <img className='add_main' onClick={search_main} src={Add} alt='add'></img>
        </div>
        </div>
      </CommonPageWrap>
    </div>
  )
}

export default Order

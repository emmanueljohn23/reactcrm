import React, { useEffect, useState } from 'react'
import { Orderlist } from '../../api/orders_api'

import CommonPageWrap from '../../containers/commonPageWrap/commonPageWrap'

const Order = () => {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    Orderlist()
      .then((res) => {
        setOrders(res)
      })
      .catch((err) => console.log(err))
  }, [])

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
        </div>
      </CommonPageWrap>
    </div>
  )
}

export default Order

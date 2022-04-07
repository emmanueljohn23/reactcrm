import CommonPageWrap from '../../containers/commonPageWrap/commonPageWrap'

import React, { useEffect, useState } from 'react'
import { getUser } from '../../api/customers_api'
import './customer.css'

const Customer = () => {
  const [customers, setCustomers] = useState([])

  useEffect(() => {
    getUser()
      .then((res) => {
        setCustomers(res)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <div>
      <CommonPageWrap>
        <div className='cus_div'>
          <h2 className='cus_head'>Customers({customers.length})</h2>
          <table>
            <thead>
              <tr>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Membership</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {customers.map((item, id) => {
                console.log(customers)
                return (
                  <tr key={id}>
                    <td>{item.FirstName}</td>
                    <td>{item.LastName}</td>
                    <td>{item.Email}</td>
                    <td>{item.Mobile}</td>
                    <td>{item.Membership}</td>
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

export default Customer

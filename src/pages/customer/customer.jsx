import CommonPageWrap from '../../containers/commonPageWrap/commonPageWrap'

import React, { useEffect, useState } from 'react'
import { getUser } from '../../api/customers_api'
import './customer.css'
import Edit from '../../assets/icons/Edit.svg'
import Delete from '../../assets/icons/Delete.svg'
const Customer = () => {
  const [customers, setCustomers] = useState([{
    FirstName:"k",
    LastName:23
  },
  {
    FirstName:"k",
    LastName:23
  }
])

  // useEffect(() => {
  //   getUser()
  //     .then((res) => {
  //       setCustomers(res)
  //     })
  //     .catch((err) => console.log(err))
  // }, [])


  const cusDelete = (e) =>{
    let cusId = e.target.id;
    setCustomers((customers)=>customers.filter((value,i)=> i!=cusId)) 
  }
  return (
    <div>
      <CommonPageWrap >
        <div className="cus_div">
          <h2 className="cus_head">Customers({customers.length})</h2>
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
                    <td className='edt_del'>
                      <img className='edt_icon' src={Edit} alt="edit"></img>
                      <img className='del_icon' id={id} onClick={cusDelete} src={Delete} alt="delete"></img>
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

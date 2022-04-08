import CommonPageWrap from '../containers/commonPageWrap/commonPageWrap'
// import './addNewCustomer.css'
import LeftArrow from '../assets/icons/leftArrow.svg'
import { useState } from 'react';
import Router from '../router/router';
import {PostData} from '../api/customers_api'

const EditCustomer = (props) => {

  const [cusValue,setCusVal] = useState(
    [
      {
        id: '',
        FirstName: '',
        LastName: '',
        Email: '',
        Mobile:""
      },
    ],
  );
  const [myval, setval] = useState()

  const cusOnCng = (e) => {
    let cusName = e.target.name;
    let cusVal = e.target.value;
    setval({...myval,[cusName]:cusVal});
  }
  const save_cus_val = () => {
    let cusState = [...cusValue];
    cusState.push(myval);
    PostData(myval)
    setCusVal(myval)
    // console.log(cusValue)
  }

  return (
    <div>
      <CommonPageWrap>
        <div className="cus_div">
          <span className="cus_span"></span>
          <div className="add_Customer">
            <h3>Customer</h3>
            <form className="cus_form">
              <input placeholder="FirstName*" name="fname" onChange={cusOnCng}/>
              <input placeholder="LastName*" name="lname" onChange={cusOnCng}/>
              <input placeholder="0*" name="reward" onChange={cusOnCng}/>
              <input placeholder="Email*" name="email" onChange={cusOnCng}/>
              <input placeholder="Mobile*" name="mobile" onChange={cusOnCng}/>
            </form>
            <div className="cus_btn">
              <button className="btn_save" onClick={save_cus_val}> Save</button>
              <button className="btn_back"> <span className='btn_span'>
              <img className='lftArrImg' src={LeftArrow} alt="leftArrow"></img>Back
            </span></button>
            </div>
          </div>
        </div>
      </CommonPageWrap>
    </div>
  )
}
export default EditCustomer;

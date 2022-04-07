import CommonPageWrap from '../containers/commonPageWrap/commonPageWrap'
import './addNewOrder.css'
import LeftArrow from '../assets/icons/leftArrow.svg'

const AddNewOrder = () => {
    return (
        <CommonPageWrap>
          <div className="cus_div">
            <span className="cus_span">Application / Customer</span>
            <div className="add_Customer">
              <h3>Order</h3>
              <form className='cus_form'>
                <input placeholder='FirstName*'/>
                <input placeholder='LastName*'/>
                <input placeholder='0*'/>
                <input placeholder='Email*'/>
                <input placeholder='Mobile*'/>
              </form>
              <div className='cus_btn'>
              <button className='btn_save'>Save</button>
              <button className="btn_back"> <span className='btn_span'>
              <img className='lftArrImg' src={LeftArrow} alt="leftArrow"></img>Back
              </span></button>
              </div>
            </div>
          </div>
        </CommonPageWrap>
    )
}

export default AddNewOrder;
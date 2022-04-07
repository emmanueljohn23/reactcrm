import CommonPageWrap from '../containers/commonPageWrap/commonPageWrap'
import LeftArrow from '../assets/icons/leftArrow.svg'


const AddNewProduct = () => {
  
    return (
        <CommonPageWrap>
          <div className="cus_div">
            <span className="cus_span">Application / Product</span>
            <div className="add_Customer">
              <h3>Product</h3>
              <form className='cus_form'>
                <input placeholder='Category'/>
                <input placeholder='Product*'/>
                <input placeholder='0'/>
                <input placeholder='0'/>
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

export default AddNewProduct;
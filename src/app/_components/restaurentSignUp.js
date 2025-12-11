const RestaurentSignup = ()=>{
    return(
        <>
            <h2>Restaurent SignUp Page</h2>
                <div className="input-wapper">
                    <input type="text" name="txt_name" placeholder="Enter your Resturant Name" className="input-field"/>
                </div>
                <div className="input-wapper">
                    <input type="text" name="txt_email" placeholder="Enter Your Email" className="input-field"/>
                </div>
                <div className="input-wapper">
                    <input type="text" name="txt_phone" placeholder="Enter Your Phone" className="input-field"/>
                </div>
                <div className="input-wapper">
                    <input type="text" name="txt_email" placeholder="Enter Your Password" className="input-field"/>
                </div>
                <div className="input-wapper">
                    <input type="text" name="txt_email" placeholder="Enter Your Location" className="input-field"/>
                </div>
                <div className="input-wapper">
                    <input type="text" name="txt_address" placeholder="Enter Your Address" className="input-field"/>
                </div>
                <div>
                    <button className="login-btn">Submit</button>
                </div>
        </>
    )
}
export default RestaurentSignup;
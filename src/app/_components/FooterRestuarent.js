import "./Footer.Style.css"
const FooterRestuarent = ()=>{
    return(
        <>
            <footer className="footer-container">
    <div className="footer-left">
        <h2 className="footer-logo">DeliveryApp</h2>
        <p>Your tasty food partner.</p>
    </div>

    <div className="footer-links">
        <div className="footer-col">
            <h4>Company</h4>
            <ul>
                <li>About</li>
                <li>Careers</li>
                <li>Blog</li>
                <li>Press</li>
            </ul>
        </div>

        <div className="footer-col">
            <h4>Support</h4>
            <ul>
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>FAQs</li>
                <li>Payments</li>
            </ul>
        </div>

        <div className="footer-col">
            <h4>Services</h4>
            <ul>
                <li>Food Delivery</li>
                <li>Bulk Orders</li>
                <li>Corporate</li>
                <li>Partner With Us</li>
            </ul>
        </div>

        <div className="footer-col">
            <h4>Legal</h4>
            <ul>
                <li>Terms</li>
                <li>Privacy</li>
                <li>Cookies</li>
                <li>Security</li>
            </ul>
        </div>
    </div>

    <div className="footer-social">
        <h4>Follow Us</h4>
        <div className="social-icons">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-youtube"></i>
        </div>
    </div>
</footer>
        </>
    )
}
export default FooterRestuarent;
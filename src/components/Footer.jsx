import React from "react";

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-4">
            <div className="container">
                <div className="row">
                    {/* Column 1 */}
                    <div className="col-md-4">
                        <h5>About Us</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    {/* Column 2 */}
                    <div className="col-md-4">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#home" className="text-white">Home</a></li>
                            <li><a href="#services" className="text-white">Services</a></li>
                            <li><a href="#contact" className="text-white">Contact</a></li>
                        </ul>
                    </div>
                    {/* Column 3 */}
                    <div className="col-md-4">
                        <h5>Contact</h5>
                        <p>Email: info@example.com</p>
                        <p>Phone: +123 456 7890</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;


function Footer() {
    return (
        <footer id="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 footer-contact">
                            <h3>Joseph W Borders</h3>
                            <p>
                                United States <br />
                                <strong>Phone:</strong> (352) 587-5777<br />
                                <strong>Email:</strong> josephwborders@gmail.com<br />
                            </p>
                        </div>
                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">About Me</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>My Services</h4>
                            <ul>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Software Development</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Project Management</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Great Addition To Any Team</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Social Links</h4>
                            <p>I am available on the social platforms below:</p>
                            <div className="social-links mt-3">
                                <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                                <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container footer-bottom clearfix">
                <div className="copyright">
                    &copy; Copyright <strong><span>Arsha</span></strong>. All Rights Reserved
                </div>
                <div className="credits">
                    Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                </div>
            </div>
        </footer>

    );
}

export default Footer;
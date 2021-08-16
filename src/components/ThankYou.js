function ThankYou() {

    return (
             <div id="hero" className="d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
                            <h1>Registration Successful<em>!</em></h1>
                            <h2>You may now login using your<br /> email address and password.</h2>
                            <a href="/login"><button className="btn-get-started scrollto"
                            type="button">Sign In</button></a>

                            
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="400">
                        <img src="assets/img/why-us.png" className="img-fluid animated" alt="" />
                        </div>
                        
                    </div>
                    
                </div>
                
            </div>

    );
}

export default ThankYou;
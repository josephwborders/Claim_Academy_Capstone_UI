function MessageSent() {

    return (
             <div id="hero" className="d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
                            <h1>Message Sent!<em>!</em></h1>
                            <h2>Your message has been successfully delivered and a response will be on the way
                                as quickly as possible.
                            </h2>
                            <a href="/"><button className="btn-get-started scrollto"
                            type="button">Return to Home</button></a>

                            
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="400">
                        <img src="assets/img/why-us.png" className="img-fluid animated" alt="" />
                        </div>
                        
                    </div>
                    
                </div>
                
            </div>

    );
}

export default MessageSent;
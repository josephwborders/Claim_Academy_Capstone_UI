function Travel() {
    return (
        <div>
        <section id="breadcrumbs" className="breadcrumbs">
            <div className="container">
                <h2></h2>
            </div>
        </section>
        {/* end breadcrumbs
        begin profile */}
        <section id="portfolio-details" className="portfolio-details">
            <div className="container">
                <div className="row gy-4">
                    <div className="col-lg-8">
                    <h4>Travel</h4>
                    <ul>
                    <br/>
                        <li>
                            Below is a current map of places I've visited:
                            <br />
                            <img src="./assets/img/travelmap.png" width="100%"/>
                        </li>
                    <br />
                        <li> 
                            My favorites so far are Bali, Indonesia (visited 2x); Maldives (visited 2x);
                            Zanzibar, Tanzania (visited 3x); and Sardinia (stationed there for 2 years and 
                            have visited 3x since).
                        </li>
                    </ul>
                    </div>
                    <div className="col-lg-4">
                        <div className="portfolio-info">
                            <h3>Cooking</h3>
                            <br />
                            <ul>
                                <li><h6>Travel</h6></li>
                                <li>Fun facts: <em>I'm on my third passport. Since first traveling
                                    overseas while on active duty in the US Navy, the travel bug has
                                    bitten me in a serious way. I can't stop!</em>
                                </li>
                                <li>
                                    Current wish: <em>To see the northern lights.</em>
                                </li>

             
                            </ul>
                            <hr></hr>
                            <br /><br />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    );
  }
  
  export default Travel;
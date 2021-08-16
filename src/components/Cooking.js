function Cooking() {
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
                    <h4>Cooking</h4>
                    <ul>
                    <br/>
                        <li>
                            This is an interest which probably satisfies a general interest in DIY 
                            and making things by hand, but I first took an interest in cooking while 
                            stationed in Italy on active duty in the US Navy.
                        </li>
                    <br />
                        <li> 
                            One of the ways I learned to speak Italian was by watching a cooking show called <em>La
                            Prova Del Cuoco</em>. I would watch the show, then go out to the local shops to
                            gather ingredients and try making whatever I happened to see on the show on a given day.
                        </li>
                    <br />    
                        <li>
                            Some of my favorite things to make are pizza, lasagne, pasta alla carbonara, and 
                            le banane flambees.
                            <br /><br />
                            <img src="./assets/img/bananeflambees.jpg" width="100%" />
                            <em>An illustrative photo of bananes flambees.</em>
                        </li>
                    </ul>
                    <br/>
                    <br/>           
                    </div>
                    <div className="col-lg-4">
                        <div className="portfolio-info">
                            <h3>Cooking</h3>
                            <br />
                            <ul>
                                <li><h6>History</h6></li>
                                <li><em>I first took an interest in cooking while stationed in 
                                    La Maddalena, Italy.</em></li>
                                <li>Peripheral fact: <strong><em>I'm trilingual (English, Italian, Serbian).</em></strong></li>  
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
  
  export default Cooking;
function AirFramer() {
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
                    <h3>Experience Details</h3>
                    <ul>
                    
                    <img src='./assets/img/usslincoln.jpg' width='100%'/>
                    <em>Taking a break while out to sea aboard the USS Abraham Lincoln (CVN-72), circa 2004</em>
                        <br/><br/>
                        <li>
                        <strong>Maintained aircraft</strong> landing gear systems, brakes, and related pneumatic systems, 
                        reservoir pressurization, emergency actuating devices, pumps, valves, regulators, 
                        cylinders, lines, and fittings. Serviced pressure accumulators, emergency air 
                        bottles, oleo struts, reservoirs, and master brake cylinders.
                    </li>
                    <br/>
                    <li> 
                        Inspected, removed and replaced components of hydraulic systems
                        Replaced gaskets, packing, and wipers in hydraulic components
                        Removed, repaired and replaced aircraft fuselage, wings, fixed and 
                        movable surfaces, airfoils, regular seats, wheels and tires, 
                        controls and mechanisms.

                    </li>
                    <br/>
                    <li>
                        Removed, installed and calibrated aircraft flight control surfaces, fabricated and assembled 
                        metal components, and made minor repairs to aircraft fuselage. Installed rivets and metal fasteners
                        Painted, Welded, fabricated repairs for composite components. Performed non-destructive 
                        dye penetrant inspections (NDI). Performed daily, preflight, postflight and other periodic 
                        aircraft inspections.
                    </li>
                    <br/>
                    </ul>
                    <br/>           
                    </div>
                    <div className="col-lg-4">
                        <div className="portfolio-info">
                            <h3>United States Navy</h3>
                            <h5>Aviation Structural Mechanic | F/A-18 Hornet Platform 
                                <br/><br/>
                                Strike Fighter Squadron 125</h5><br />
                            <ul>
                                <li><em>Overall Service: </em>June 2002 to January 2010</li>
                                <li><em>Discharge: </em>Honorable</li>
                                <li><em>Locations: </em>Lemoore, CA; La Maddalena, Italy; Sigonella, Italy</li>
                            </ul>
                            <hr></hr>
                            <br /><br />
                        </div>
                        <img src="assets/img/navyam.png" alt=''/>
                    </div>
                </div>
            </div>
        </section>
    </div>
    );
  }
  
  export default AirFramer;
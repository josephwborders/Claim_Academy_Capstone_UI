
function Claim() {
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
                    <p>
                        A 12-week, 540-hour full stack developer course accredited by the Missouri Department
                        of Education. Curriculum includes Core Java, all the way through to building complete, modern
                        web applications using technologies such as:
                        <ul>
                            <li>SpringMVC</li>
                            <li>Apache Tomcat</li>
                            <li>Hibernate</li>
                            <li>MySQL</li>
                            <li>RESTful APIs</li>
                            <li>React</li>
                            <li>HTML & CSS</li>
                            <li>Eclipse EE</li>
                            <li>MySQL Workbench</li>
                            <li>Postman</li>
                            <li>Visual Studio Code</li>
                            <li>GitHub</li>
                        </ul>
                    </p>
                    <h4>Samples of work</h4><br />
                    <h5>Core Java Phone Book Application</h5>
                    <p>
                        A console application for storing contacts with names, phone numbers, 
                        and addresses. The application allows for the addition, deletion, and 
                        modification of contacts, using core java only. This project does not 
                        have persistence and will reset to it's default state between shutdowns 
                        and startups.
                    </p>
                    <p>
                        The application uses primitive variable types, Strings, and Arrays for
                        data storage and manipulation. Entries are sorted in alphabetical order 
                        using a bubble sort methodology. Contacts are displayed using the toString()
                        method. Error handling is achieved via try/catch. Switch statements are
                        employed for method selection via user input, and recursive programming is
                        used to allow users to return to previous menus. 
                    </p>
                    <p>
                        <a href='https://github.com/josephwborders/Phone-book-application'>View this project on GitHub</a>
                    </p> 
                    <h5>Full Stack Car Dealership Application</h5>
                    <p>
                        A web application written in Java, HTML, CSS, JSTL, using SpringMVC and Maven.
                        The application allows users to create accounts, browse vehicles for sale and 
                        make purchases. Purchased vehicles are removed from inventory and recorded as
                        a transaction viewable by users with administrator privileges.
                    </p>
                    <p>
                        Administrators can view, modiify, and delete vehicle inventory items; view 
                        transactions, and view a list of customers.
                    </p>
                    <p>
                        Vehicles which have been in inventory for more than 180 days are available 
                        for bidding, and up to a 10% discount from the original list price will be 
                        accepted if offered by an application user. If the user bids too low, a message
                        is displayed to inform them their bid was unsuccessful.
                    </p>
                    <p>
                        Views are created using JSPs, and data on the views is provided via servlets and 
                        JSTL tags. This project does not have persistence and will reset to it's default
                        state between shutdowns and startups.
                    </p>
                    <p>
                        <a href='https://github.com/josephwborders/Dealership-Application'>View this project on GitHub</a>
                    </p>
                    <h5>Full Stack Resume and Personal Portfolio Application</h5>
                    <p>
                        A web application with a back end written in Java with using SpringMVC and Maven,
                        plus a MySQL database, jQuery, and entity repositories for persistence. The 
                        front end uses React, HTML, and CSS.
                    </p>
                    <p>
                        The application allows potential employers to register accounts and create job
                        proposals to be sent to me for consideration. On registration, new users receive
                        a welcome email, and a confirmation email is also sent on proposal 
                        completion/submission. Users will receive email notification on approval or
                        rejection of job proposal submissions after having been viewed and considered
                        by me.
                    </p>
                    <p>
                        <a href='https://github.com/josephwborders?tab=repositories'>View this project on GitHub</a>
                    </p>           
                    </div>
                    <div className="col-lg-4">
                        <div className="portfolio-info">
                            <h3>Claim Academy</h3>
                            <h5>Full Stack Java Developer Academy</h5><br />
                            <ul>
                                <li><em>Start: </em>May 2021</li>
                                <li><em>End: </em>August 2021</li>
                                <li><em>Location: </em>Virtual</li>
                                <li><em>School Location: </em>St. Louis, Missouri</li>
                            </ul>
                            <hr></hr>
                            <br /><br />
                        </div>
                        <img src="assets/img/claim.png" alt=''/>
                    </div>
                </div>
            </div>
        </section>
    </div>
    );
  }
  
  export default Claim;
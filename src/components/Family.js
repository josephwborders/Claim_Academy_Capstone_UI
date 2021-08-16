function Family() {
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
                    <h4>Cat Family Members</h4>
                    <ul>
                    <img src='./assets/img/catsinthetub.jpg' width='100%'/>
                    <em>Alija on the left and Gecko on the right. Why are they in the tub? Who knows why cats do what they do?</em>
                        <br/><br/>
                        <li>
                        Alija is a <strong><em>Scottish Fold</em></strong> and is around 7 years old (we think). We adopted him from a couple
                        who were moving and couldn't take him along with them. He's extremely friendly and well-behaved.
                    </li>
                    <br/>
                    <li> 
                        Gecko is an <strong><em>Arabian Mau</em></strong> mix, and is the troublemaker of the two. He's friendly, but also quite
                        curious and at times mischevious. He was probably less than two months old when he found us in Dubai
                        International Airport's Terminal 2 parking lot. We were loading suitcases into the trunk and he appeared
                        from beneath the car as if he knew us already. We took him home, gave him a bath, and we've been inseparable
                        ever since.

                    </li>
                    </ul>
                    <br/>
                    <h4>Human Family Members</h4>
                    <ul>
                    <li>
                        Early one Summer morning in 2013, Marina and I sat next to each other on a flight from Dubai to Frankfurt. We 
                        chatted for a bit and then exchanged contact details after landing. We were married in November of that same year.
                    </li>
                    <br />
                    <li>
                        In January this year (2021), Kelly joined the team. She loves smiling, giggling, playing and generally
                        brings joy to whomever she's around. 
                    </li>
                    <br/>
                    </ul>
                    <br/>           
                    </div>
                    <div className="col-lg-4">
                        <div className="portfolio-info">
                            <h3>Family Life</h3>
                            <h5>Positions: Husband and Father</h5><br />
                            <ul>
                                <li><h6>Family Stats</h6></li>
                                <li><em>Married: </em>Since November 2013</li>
                                <li><em>Current Family Members: </em>3 humans, 2 cats</li>
                                <li><em>Members Expected To Join: </em>1 new human (due date March 1st, 2022)</li>
                                <li><em>Favorite Activities: </em>Smiling and having as much fun as possible!</li>
                            </ul>
                            <hr></hr>
                            <br /><br />
                        </div>
                        <img src="assets/img/family.jpg" alt='' width='100%'/>
                        <em>My wife, daughter, and me.</em>
                    </div>
                </div>
            </div>
        </section>
    </div>
    );
  }
  
  export default Family;
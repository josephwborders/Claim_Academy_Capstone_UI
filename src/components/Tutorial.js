function Tutorial() {
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
                    <h4>How To Use This Application:</h4>
                    <br />
                    <ul>
                        <li>
                        After browsing the my home page, work experience, education, personal life, and FAQs, click 
                        the "Get Started" button to create an account.
                        </li>
                        <br/>
                        <li> 
                        From your profile page, you'll be able to create, modify, and delete job proposals. On creation,
                        a notification email will be sent to me to let me know I have a proposal awaiting review.
                        </li>
                        <br />
                        <li>
                        Once I've reviewed your submission, I will update the status and you will receive notification of
                        whether your proposal will move forward in the acceptance process. If moved forward, you will be 
                        invited to schedule a time and date for a phone call or Zoom meeting.
                        </li>
                        </ul>
                        <br/>         
                    </div>
                    <div className="col-lg-4">
                        <div className="portfolio-info">
                            <h3>Tutorial</h3>
                            <ul>
                                <li><h6>Have a look over the home page</h6></li>
                                <li><em>
                                    It contains all my work experience, education, qualifications, and 
                                    awards & acknowledgements.
                                </em></li>
                                <li><h6>Browse the personal life menu in the navbar</h6></li>
                                <li><em>
                                    There you'll find information on my family life and hobbies.
                                </em></li>
                                <li><h6>Browse the FAQ page linked in the navbar</h6></li>
                                <li><em>
                                    There you'll find answers to common behavioral and technical 
                                    interview questions.
                                </em></li>
                                <li><h6>Create an account</h6></li>
                                <li><em>
                                    Click the "Get Started" button to create a profile and submit a job
                                    proposal if you think I'd be a good fit for your team!
                                </em></li>
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
  
  export default Tutorial;
function FinancialAdvisor() {
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
                    
                    <img src='./assets/img/meandeddy.jpg' width='100%'/>
                    <em>Me on the left with a great friend and colleague, <a href='https://www.linkedin.com/in/edward-webber-acsi-b9842b41/'>
                        Eddy Webber</a>, on the right.</em>
                        <br/><br/>
                        <li>
                        Managed approximately <strong><em>$4 million in assets on behalf of 30 expatriate 
                        clients of 12 nationalities</em></strong> with zero complaints and not one client lost
                        to another advisor or wealth management firm.
                    </li>
                    <br/>
                    <li> 
                        Provided holistic expertise in the areas of financial planning, investment, and portfolio 
                        management/analysis; including professional advice on pensions, trusts, inheritance, tax bands, 
                        insurance, and education planning. Other activities included financial modeling, onboarding 
                        new clients, providing ongoing service to existing clients, and cross-selling. 
                    </li>
                    <br/>
                    <li>
                        Advised companies on how to best manage their future end of service gratuity liabilities
                        (EOS - a system implemented in the UAE in lieu of formal pension requirements). I found
                        that over 90% of companies had zero planning in place for these predictable cash outflows
                        and that most paid benefits out of working capital. <strong><em>I designed a financial projection model 
                        to use in client meetings to show the difference between paying out of working capital and 
                        investing the present value of gratuity liabilities in a conservative multi-asset portfolio.</em></strong>
                        <br/><br/>
                        <span className='text-danger'><strong><em>
                            Calculation of cash outflows over the next 10 years without advance planning:
                        </em></strong></span>
                        <img src='./assets/img/eoswop.png' width='100%'/>
                        <br/><br/>
                        <span className='text-success'><strong><em>
                            Calculation of cash outflows over the next 10 years without advance planning:
                        </em></strong></span>
                        <img src='./assets/img/eoswithplan.png' width='100%'/>
                        <br/><br/>
                        <span className='text-info'><strong><em>
                            Illustrative sample multi-asset portfolio to demonstrate how returns would be generated:
                        </em></strong></span>
                        <img src='./assets/img/eosportfolio.png' width='100%'/>   
                    </li>
                    <br/>
                    <li>
                        The basic <strong><em>value proposition</em></strong> for companies considering the scenario above would be, "If 
                        I offered to sell you $10 million for the low price of $2 million, would you take the 
                        deal? What could your company do with the extra cash? Return value to shareholders? Invest 
                        in new capabilities? Distribute retention bonuses?", etc.
                    </li>
                    </ul>
                    <br/>

                    <h5>Guest Lecturer at the American University in the Emirates | Faculty of Business and Finance</h5>
                    <ul>
                    <li>
                        Invited by <a href='https://www.linkedin.com/in/rania-itani-dba-mba-6856131b/'>Dr. Rania 
                        Itani</a> to lecture her students on the financial services industry, asset classes, 
                        financial instruments, derivatives, economics, personal finance, lifecycle 
                        financial planning, and a range of other topics.
                        <br /><br />
                        <span className='text-success'><strong><em>
                            Guest lecturing at AUE:
                        </em></strong></span>
                        <img src='./assets/img/lecture1.jpeg' width='100%'/>
                        <br /><br />
                        <img src='./assets/img/lecture2.jpeg' width='100%'/>
                        <br /><br />
                        <img src='./assets/img/lecture3.jpeg' width='100%'/>
                    </li>
                    </ul>          
                    </div>
                    <div className="col-lg-4">
                        <div className="portfolio-info">
                            <h3>Guardian Wealth Management</h3>
                            <h5>Private Client Financial Advisor</h5><br />
                            <ul>
                                <li><em>Start: </em>April 2014</li>
                                <li><em>End: </em>January 2019</li>
                                <li><em>Location: </em>Dubai, United Arab Emirates</li>
                                <li><em>Company HQ: </em>London, United Kingdom</li>
                            </ul>
                            <hr></hr>
                            <br /><br />
                        </div>
                        <img src="assets/img/dubaiguardian.png" alt=''/>
                    </div>
                </div>
            </div>
        </section>
    </div>
    );
  }
  
  export default FinancialAdvisor;
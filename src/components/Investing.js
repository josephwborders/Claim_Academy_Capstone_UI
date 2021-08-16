function Investing() {
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
                    <h4>Current Strategy</h4>
                    <br />
                    <h6>Covered Call-Writing</h6>
                    <ul>
                    <br/>
                        <li>
                            I currently employ a relatively conservative strategy of writing weekly
                            covered call options. For a brief explanation of the strategy, take a look 
                            at Investopedia's page on the subject <a href='https://www.investopedia.com/terms/c/coveredcall.asp#:~:text=Covered%20calls%20are%20a%20neutral%20strategy%2C%20meaning%20the,for%20the%20life%20of%20the%20written%20call%20option.'>here.</a>
                        </li>
                    <br />
                        <li> 
                            My system broadly consists of the following steps:
                            <ol>
                                <br />
                                <li>Identify a company whose shares I wouldn't mind holding for the long term
                                in case the position turns against me. I'll use Under Armour as an example;
                                ticker: UAA.</li>
                                <li>
                                    Look at the company's fundamentals. What I want to see is a positive number 
                                    for EPS over the trailing 12 months (TTM). I may look deeper and check the 
                                    company's capital structure to determine whether there's too much debt on the 
                                    books. Check whether EPS is growing or contracting.
                                    <br />
                                    <br />
                                    <img src='./assets/img/fundamentals_LI.jpg' width='100%' />
                                    <br /><br /> 
                                </li>
                                <li>
                                    Check the technicals (chart). I use Bollinger and Keltner bands to assess whether 
                                    the company's shares may be over or under priced. I look for unusual volume, check 
                                    the RSI to assess whether the shares are overbought or oversold, check the ADX to 
                                    determine the momentum/relative strength of any up or down trends.
                                    <br />
                                    <br />
                                    <img src='./assets/img/technicals_LI.jpg' width='100%' />
                                    <br /><br /> 
                                </li>
                                <li>
                                    Check for recent news on the company to determine whether media coverage is having
                                    any potential positive or negative effects on price.
                                    <br />
                                    <br />
                                    <img src='./assets/img/news_LI.jpg' width='100%' />
                                    <br /><br /> 
                                </li>
                                <li>
                                    Check the company's events calendar. I typically stay away if a company is coming up 
                                    on an earnings announcement or other event which might have an effect on volatility.
                                    <br />
                                    <br />
                                    <img src='./assets/img/events_LI.jpg' width='100%' />
                                    <br /><br /> 
                                </li>
                                <br />
                            </ol>
                        </li>
                        <li>
                            I use E*Trade Pro standalone desktop software for my trading.
                            <br /><br />
                                <img src='./assets/img/etradepro_LI.jpg' width='100%' />
                            <br /><br /> 
                        </li>
                        <br />
                        <li>
                            Broadly, if a company satisfies the above criteria it will be a buy for me. 
                            I generally do not open a position with more than 1,000 shares. This leaves 
                            room for me to average down later if the price makes a significant drop.
                        </li>
                    </ul>
                    </div>
                    <div className="col-lg-4">
                        <div className="portfolio-info">
                            <h3>Personal Investing</h3>
                            <br />
                            <ul>
                                <li><h6>Investing</h6></li>
                                <li><em>I took an interest in financial markets around the time
                                        of the sub-prime mortgage crisis in 2007.
                                </em>
                                </li>
                                <li>
                                    <em>Since then, I've been active in the stock market to varying
                                        degrees, but have been investing consistently since becoming
                                        a financial advisor in 2014.
                                    </em>
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
  
  export default Investing;
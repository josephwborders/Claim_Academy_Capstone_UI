function DIY() {
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
                    <h4>Example:</h4>
                    <h5>Amateur Radio</h5>
                    <ul>
                    <br/>
                        <li>
                            I'm an FCC-licensed Amateur Radio Operator. I mostly enjoy using my Software Defined
                            Radio setup to scan the local airwaves to see which signals are passing through my
                            area. My SDR setup can receive signals from about 3MHz in frequency all the way 
                            up to 1.6 GHz.
                            <br /><br />
                            <img src="./assets/img/sdrsetup.jpg" width="100%"/>
                            <em>My SDR setup in my room in Afghanistan. From the top down: 
                                a low-noise amplifier, an upconverter to receive shortwave 
                                frequencies, a powered USB hub, and an RTL-SDR dongle. I have 
                                since added a broadcast FM filter to block out local radio stations
                                (FM broadcast signals are quite powerful and can drown out fainter
                                signals in other parts of the spectrum).
                            </em>
                        </li>
                    <br />

                        <li>
                            My software of choice for Windows is SDR#; CubicSDR when using a Mac.
                            <br /><br />
                            <img src="./assets/img/sdr.jpg" width="100%" />
                            <em>An illustrative photo SDR# software.</em>
                        </li>
                        <br />
                        <li>
                            A pandemic project built with a colleague while on lockdown in Kabul is below:

                            <br /><br />
                            <video width="50%" controls muted> 
                                <source src="./assets/video/sattracker.mp4" type="video/mp4"/>
                            </video>
                            <br /><br />
                        </li>
                        <li>
                            This is an amateur radio satellite tracker made mostly from things we found laying 
                            around the base. It locks onto and automatically tracks satellites across the sky, 
                            horizon to horizon, for the purpose of bouncing radio signals off them and back to Earth.
                        </li>
                        <br />
                        <li>
                            We re-purposed a small Pelican case to house and waterproof the electronics, we built the 
                            YAGI antenna from scratch, the tracker is connected to my Yaesu VX-8R handheld transciever
                            for transmission and reception of signals, the whole setup runs on a 12V battery resting
                            in the "hammock" setup beneath the tripod (which conveniently adds stability), and the 
                            Raspberry Pi controlling the whole setup runs via a headless configuration (receiving
                            commands from and sending feedback to a tablet running Android OS).
                        </li>
                    </ul>
                    <br/>
                    <br/>           
                    </div>
                    <div className="col-lg-4">
                        <div className="portfolio-info">
                            <h3>DIY Projects</h3>
                            <br />
                            <ul>
                                <li><h6>History</h6></li>
                                <li><em>Since I was a kid, I've always been interested in taking things apart to see 
                                        how they work, then putting them back together.</em></li>
                                <li>Project genres: <em>Engine mechanics, welding, fabrication, electronics, 
                                    carpentry, and amateur radio.</em></li>  
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
  
  export default DIY;
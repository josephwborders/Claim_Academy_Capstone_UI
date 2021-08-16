import '../index.css';



function Home() {
    return (
        // begin main section
        <div>
            <div id="hero" className="d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
                            <h1>Source Top-Tier Talent For Your Business</h1>
                            <h2>If you're looking for a Full Stack Developer, with a strong background in
                                a broad range of disciplines, you've come to the right place!<br /><br />
                                This application which serves as a skillset showcase, as well an interactive
                                resume, a snapshot of my personal life, and a job proposal delivery site
                                for recruiters.
                            </h2>
                            <div className="d-flex justify-content-center justify-content-lg-start">
                                <a href="/tutorial" className="btn-get-started scrollto">Tutorial</a>
                                <a href="/register" className="btn-get-started scrollto">Get Started</a>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="400">
                            <img src="assets/img/joehomepage.jpg" width='90%' className="img-fluid animated" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* // end main section
            // begin professional profile section */}
            <section id="about" className="about">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Professional <em>Profile</em></h2>
                    </div>
                    <div className="row content">
                        <div className="col-lg-6">
                            <p>Recent graduate of Claim Academy, St. Louis, <strong>Full Stack Java Developer</strong> Academy,
                                a 12-week, 540-hour training program accredited by the <em>Missouri Department of Education</em>.
                            </p>
                            <ul>
                                <li><i className="ri-check-double-line"></i>Core Java, Eclipse, VS Code, My SQL Database, jQuery</li>
                                <li><i className="ri-check-double-line"></i>RESTful API, SpringMVC, Maven Hibernate, Postman</li>
                                <li><i className="ri-check-double-line"></i>React, JavaScript X, HTML, CSS, JSP, JSTL, JSP</li>
                            </ul>
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0">
                            <p><em><strong>If you're looking for a full stack developer, why not <span className="text-success">
                                choose one who comes with as many skills as possible?</span></strong></em>
                            </p>
                            <p>Organized, detail-oriented professional with 19 years of experience working in multinational
                                environments in the areas of project management, personnel management, finance, sales, marketing,
                                administration, force protection, physical security systems, networking, electronic warfare,
                                training, operations planning, personnel management, and more.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* end about professional profile section
            begin professional education section */}
            <section id="why-us" className="why-us section-bg">
                <div className="container-fluid" data-aos="fade-up">
                    <div className="row">
                        <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
                            <div className="content">
                                <h3>Professional
                                    <strong> Education</strong> Highlights
                                </h3>
                            </div>
                            <div className="accordion-list">
                                <ul>
                                    <li>
                                        <a data-bs-toggle="collapse" className="collapse" data-bs-target="#accordion-list-1">
                                            <span>1</span> Bachelor in Business Administration with Honors | American Military University
                                            <i className="bx bx-chevron-down icon-show"></i>
                                            <i className="bx bx-chevron-up icon-close"></i></a>
                                        <div id="accordion-list-1" className="collapse show" data-bs-parent=".accordion-list">
                                            <p>
                                                Using the G.I. Bill, I started my foray into higher education while working as a
                                                NATO International Civilian Consultant in Afghanistan. Originally starting down the
                                                path toward a Bachelor of Science in Network and Communications Management with DeVry
                                                University, I eventually made the choice to pursue a Bachelor Degree in Business
                                                Administration with American Military University, graduating with Honors in 2016.
                                                <p>
                                                    Currently, I have completed 12 of 36 semester hours required for an MBA in Finance
                                                    with the same university.
                                                </p>
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <a data-bs-toggle="collapse" data-bs-target="#accordion-list-2" className="collapsed">
                                            <span>2</span> Full Stack Java Developer Course | Claim Academy
                                            <i className="bx bx-chevron-down icon-show"></i>
                                            <i className="bx bx-chevron-up icon-close"></i></a>
                                        <div id="accordion-list-2" className="collapse" data-bs-parent=".accordion-list">
                                            <p>
                                                A 12-week, 540-hour full stack developer course accredited by the Missouri Department
                                                of Education. Curriculum includes Core Java, all the way through to building complete, modern
                                                web applications using technologies such as SpringMVC, Apache Tomcat, Hibernate, MySQL,
                                                RESTful APIs, React, HTML, CSS, JSX, JSTL, jQuery, JSP; and developer tools such as Eclipse
                                                EE, MySQL Workbench, Postman, Visual Studio Code.
                                                <p>
                                                    <a href="https://github.com/josephwborders">Click here to visit my GitHub!</a>
                                                </p>
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <a data-bs-toggle="collapse" data-bs-target="#accordion-list-3" className="collapsed">
                                            <span>3</span> Certified Associate Project Manager (CAPM®) | Project Management Institute
                                            <i className="bx bx-chevron-down icon-show"></i>
                                            <i className="bx bx-chevron-up icon-close"></i></a>
                                        <div id="accordion-list-3" className="collapse" data-bs-parent=".accordion-list">
                                            <p>
                                                PMI’s Certified Associate in Project Management (CAPM)® is a valuable certification
                                                for project practitioners. Designed to demonstrate understanding of the fundamental
                                                knowledge, terminology and processes of effective project management.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <a data-bs-toggle="collapse" data-bs-target="#accordion-list-4" className="collapsed">
                                            <span>4</span> Level III Certificate in International Wealth and Investment Management | CISI
                                            <i className="bx bx-chevron-down icon-show"></i>
                                            <i className="bx bx-chevron-up icon-close"></i></a>
                                        <div id="accordion-list-4" className="collapse" data-bs-parent=".accordion-list">
                                            <p>
                                                Chartered Institute For Securities and Investment, London, United Kingdom.
                                                <p>The International Certificate in Wealth & Investment Management covers the essentials
                                                    of financial planning, private client asset management, fund management,
                                                    advisory functions and investment analysis from a global perspective. The
                                                    qualification ensures and understanding of the range of assets and investment
                                                    products available in the market and solutions to meet the investment, retirement
                                                    and protection planning needs for your private clients. It an qualification for
                                                    international candidates working in private banking and wealth management roles.
                                                </p>
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-5 align-items-stretch order-1 order-lg-2 img"
                            data-aos="zoom-in" data-aos-delay="150"><img src="assets/img/certs.png" 
                            className="img-fluid animated" alt="" /></div>
                    </div>
                </div>
            </section>
            {/* end professional education section
            begin professional experience section */}
            <section id="portfolio" className="portfolio">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2><em>Professional</em> Experience</h2>
                        <p>
                            Worldwide service in a varied array of disciplines, mostly in leadership roles, within a 
                            range of organizations from large to small.
                        </p>
                    </div>
                    <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
                        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                            <div className="portfolio-img"><img src="assets/img/claim.png"
                                className="img-fluid" alt="" /></div>
                            <div className="portfolio-info">
                                <h4>Claim Academy</h4>
                                <p>Full Stack Java Developer Course</p>
                                <a href="/claim" className="details-link" title="More Details">
                                    <span>View</span></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                            <div className="portfolio-img">
                                <img src="assets/img/emw-nato.png" className="img-fluid" alt="" />
                            </div>
                            <div className="portfolio-info">
                                <h4>Project Manager | EMW Inc.</h4>
                                <p>NATO Resolute Support Mission Afghanistan</p>
                                <a href="/projectmanager" className="details-link" title="More Details">
                                    <span>View</span></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                            <div className="portfolio-img"><img src="assets/img/dubaiguardian.png"
                                className="img-fluid" alt=""  />
                            </div>
                            <div className="portfolio-info">
                                <h4>Financial Advisor | Guardian Wealth Management</h4>
                                <p>Dubai, United Arab Emirates</p>
                                <a href="/financialadvisor" className="details-link" title="More Details">
                                    <span>View</span></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                            <div className="portfolio-img"><img src="assets/img/navyam.png"
                                className="img-fluid" alt="" />
                            </div>
                            <div className="portfolio-info">
                                <h4>Aviation Structural Mechanic | US Navy</h4>
                                <p>Strike Fighter Squadron 125, Lemoore CA</p>
                                <a href="/airframer" className="details-link" title="More Details">
                                    <span>View</span></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                            <div className="portfolio-img"><img src="assets/img/navymaa.png"
                                className="img-fluid" alt="" />
                            </div>
                            <div className="portfolio-info">
                                <h4>Master At Arms | US Navy</h4>
                                <p>Naval Security Forces</p>
                                <a href="/masteratarms" className="details-link" title="More Details">
                                    <span>View</span></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                            <div className="portfolio-img"><img src="assets/img/natoisaf.png"
                                className="img-fluid" alt="" />
                            </div>
                            <div className="portfolio-info">
                                <h4>Deputy Chief Air Transport Sec. | NATO</h4>
                                <p>International Security Assistance Force Afghanistan</p>
                                <a href="/deputychief" className="details-link" title="More Details">
                                    <span>View</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end professional experience section
            begin awards and acknowledgements section */}
                        <section id="about" className="about">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Awards & <em>Acknowledgements</em></h2>
                    </div>
                    <div className="row content">
                        <div className="col-lg-6">
                            <p><strong>Medals and ribbons earned:</strong>
                            </p>
                            <img src='./assets/img/ribbonrack.png' width='70%' />
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0">
                            <p>
                                Delta Mu Delta International Business Honor Society; NATO non-article V ISAF Medal, Navy and 
                                Marine Corps Achievement Medal, Meritorious Unit Commendation Ribbon, Good Conduct 
                                Medal (x2), National Defense Service Medal, Global War on Terrorism Service Medal, Overseas 
                                Service Ribbon (x2), Expert Rifle Ribbon, Expert Pistol Ribbon.
                            </p>
                        </div>
                    </div>
                </div>

            </section>
          
        </div>

    );
}

export default Home;
import { useState, useEffect, setState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'


function CreateNewProposal() {
    const [user, setUser] = useState({});
    useEffect(() => {
        const params = {
        email: localStorage.getItem('loggedInUser')
        }
        axios.get('http://localhost:8080/findByEmail', { params })
        .then(response => {
            setUser(response.data);
        }).catch(error => {
    
        });
    }, []
    );

    const [newProposal, setNewProposal] = useState({
        companyName: '', companyInfo: '', companyWebsite: '', jobTitle: '',
        jobLocation: '', jobDescription: '', payRange: '', benefits: '', 
        additional: '', user: user, document: ([])
    });

    const changeHandlerProposal = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const tempProp = { ...newProposal };
        tempProp[name] = value;
        setNewProposal(tempProp);
    }
    const history = useHistory();
    const handleCreateProposal = () => {
        const tempProposal={...newProposal};
        tempProposal.user = user;
        axios.post('http://localhost:8080/saveProposal', tempProposal).then(response => {
            history.push('/welcome')
        }).catch(error => {
            console.log("proposal not added")
        });
    }

    const [proposals, setProposals] = useState([]);
    useEffect(() => {
        const params = {
        email: localStorage.getItem('loggedInUser')
        }
        axios.get('http://localhost:8080/findProposalByUser', {params})
        .then(response => {
            setProposals(response.data)
        }).catch(error => {
        });

    }, []
    );

    const onFileChangeHandler = (e) => {
        e.preventDefault();
        const doc = setState({
            selectedFile: e.target.files[0]
        });
        const formData = new FormData();
        formData.append('file', doc);
        setNewProposal.document(formData)
    };

    return (
        <div>
        <section id="breadcrumbs" className="breadcrumbs">
            <div className="container">
                <h2>Logged in as {user.firstName}</h2>
            </div>
        </section>
        {/* end breadcrumbs
        begin create proposal */}
        <section id="portfolio-details" className="portfolio-details">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-8">
                        <h3>Complete the form below to create a new proposal.</h3>
                        <br />
                        <div className="container">
        <div className="col-sm-12 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
            
            <form>
            <label>Company Name</label>
            <input onChange={changeHandlerProposal} className="form-control me-2"
            type="text" placeholder=""
            name="companyName" value={setNewProposal.companyName} required />
            <label>Company Details</label>
            <textarea onChange={changeHandlerProposal} className="form-control me-2"
            type="text" placeholder=""
            name="companyInfo" value={setNewProposal.companyInfo} required id="txtArea" 
            rows="3" cols="119"></textarea>
            <label>Company Website</label>
            <input onChange={changeHandlerProposal} className="form-control me-2"
            type="text" placeholder=""
            name="companyWebsite" value={setNewProposal.companyWebsite} required />
            <label>Job Title</label>
            <input onChange={changeHandlerProposal} className="form-control me-2"
            type="text" placeholder=""
            name="jobTitle" value={setNewProposal.jobTitle} required />
            <label>Job Location</label>
            <input onChange={changeHandlerProposal} className="form-control me-2"
            type="text" placeholder=""
            name="jobLocation" value={setNewProposal.jobLocation} required />
            <label>Job Description</label>
            <textarea onChange={changeHandlerProposal} className="form-control me-2"
            type="text" placeholder=""
            name="jobDescription" value={setNewProposal.jobDescription} required id="txtArea" 
            rows="3" cols="119"></textarea>
            <label>Pay Range</label>
            <input onChange={changeHandlerProposal} className="form-control me-2"
            type="text" placeholder=""
            name="payRange" value={setNewProposal.payRange} required />
            <label>Benefits</label>
            <input onChange={changeHandlerProposal} className="form-control me-2"
            type="text" placeholder=""
            name="benefits" value={setNewProposal.benefits} required />
            <label>Additional Information</label>
            <input onChange={changeHandlerProposal} className="form-control me-2"
            type="text" placeholder=""
            name="additional" value={setNewProposal.additional} required /><br />
            <label>Document Upload</label><br />
            <input className="form-control me-2" type="file" name="document" onChange={onFileChangeHandler}/>
            <br /><br />
            <div >      
            <a onClick={handleCreateProposal}  className="btn-get-started scrollto"><button>Create</button></a>  
            <br />
            <br />
            <a href="/home" className="btn-get-started scrollto"><button>I'm having second thoughts..</button></a>
            </div>
            </form>
            </div>

        </div>

                            
                        </div>
                        <div className="col-lg-4">
                            <div className="portfolio-info">
                                <h3>Account information</h3>
                                <img src={'data:image/jpeg;base64,'+ user.avatar} alt="avatar" width="90%"/>
                                <br /><br />
                                <form>
                                    <em>Edit profile image</em>
                                    <input type="file" name="avatar" />
                                </form>
                                <hr />
                                    <ul>
                                        <li><strong>Name</strong>: {user.firstName} {user.lastName}</li>
                                        <li><strong>Company</strong>: {user.company}</li>
                                        <li><strong>Job Title</strong>: {user.title}</li>
                                        <li><strong>Active Proposals</strong>: {([proposals.length])}</li>
                                    </ul>
                            </div>
                            <div className="portfolio-description">
                                <h2>Proposal Creation Tips:</h2>
                                    <p>
                                         Follow the ABCs of communication:
                                         <ul>
                                             <li>Accuracy</li>
                                             <li>Brevity</li>
                                             <li>Clarity</li>
                                         </ul>
                                    </p>
                                    <p>
                                        I will most certainly follow the link provided to the
                                        company's website, so please keep the company description
                                        brief. 
                                    </p>
                                    <p>
                                        If the job title includes "entry-level", or "junior", but
                                        requires 7+ years of experience and a Congressional Medal
                                        of Honor, please recalibrate your expectations for the role. 
                                    </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

    </div>
    );
  }
  
  export default CreateNewProposal;
  
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'


function Edit() {
    const [user, setUser] = useState({});
    const [proposals, setProposals] = useState([]);
    const [newProposal, setNewProposal] = useState({
        ...proposals
    });
    const history = useHistory();

    useEffect(() => {
        const params = {
            email: localStorage.getItem('loggedInUser')
        }
        axios.get('http://localhost:8080/findByEmail', { params })
            .then(response => {
                setUser(response.data);
                setNewProposal.user(response.data.user);
                setNewProposal.id(response.data.id);
            }).catch(error => {

            });
    }, []
    );

    useEffect(() => {
        const params = {
            email: localStorage.getItem('loggedInUser')
        }
        axios.get('http://localhost:8080/findProposalByUser', { params })
            .then(response => {
                setProposals(response.data)
            }).catch(error => {
            });

    }, []
    );

    useEffect(() => {
        const params = {
            id: localStorage.getItem('viewProposal')
        }
        axios.get('http://localhost:8080/findProposalById', { params })
            .then(response => {
                setProposals(response.data);

            }).catch(error => {

            });
    }, []
    );

    const changeHandlerProposal = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const tempProp = { ...newProposal };
        tempProp[name] = value;
        setNewProposal(tempProp);
    }

    // const handleUpdateProposal = () => {
    //     const params = { 
    //         proposal: {...newProposal} 
    //         };
    //     axios.put('http://localhost:8080/updateProposal', {params}).then(response => {
    //         history.push('/welcome')
    //         console.log({params})
    //     }).catch(error => {
    //         console.log({params})
    //     });
    // }

    const handleUpdateProposal = () => {
        const tempProposal={...newProposal};
        tempProposal.user = user;
        axios.post('http://localhost:8080/saveProposal', tempProposal).then(response => {
            history.push('/welcome')
        }).catch(error => {
            console.log("proposal not added")
        });
    }

    return (
        <div>
            <section id="breadcrumbs" className="breadcrumbs">
                <div className="container">
                    <h2>Logged in as {user.firstName}</h2>
                </div>
            </section>
            {/* end breadcrumbs
            begin profile */}
            <section id="portfolio-details" className="portfolio-details">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-8">
                            <h3>Proposal Details</h3>
                            <p>Amend the fields below and click "Update" to save.</p>
                            <div>
                                <form>
                                    <label>Company Name</label>
                                    <textarea onChange={changeHandlerProposal} className="form-control me-2"
                                        type="textarea" defaultValue={proposals.companyName}
                                        name="companyName" value={setNewProposal.companyName} required id="txtArea"
                                        rows="1" cols="119"></textarea>
                                    <label>Company Details</label>
                                    <textarea onChange={changeHandlerProposal} className="form-control me-2"
                                        type="textarea" defaultValue={proposals.companyInfo}
                                        name="companyInfo" value={setNewProposal.companyInfo} required id="txtArea"
                                        rows="3" cols="119"></textarea>
                                    <label>Company Website</label>
                                    <textarea onChange={changeHandlerProposal} className="form-control me-2"
                                        type="textarea" defaultValue={proposals.companyWebsite}
                                        name="companyWebsite" value={setNewProposal.companyWebsite} required id="txtArea"
                                        rows="1" cols="119"></textarea>
                                    <label>Job Title</label>
                                    <textarea onChange={changeHandlerProposal} className="form-control me-2"
                                        type="textarea" defaultValue={proposals.jobTitle}
                                        name="jobTitle" value={setNewProposal.jobTitle} required id="txtArea"
                                        rows="1" cols="119"></textarea>                   
                                    <label>Job Location</label>
                                    <textarea onChange={changeHandlerProposal} className="form-control me-2"
                                        type="textarea" defaultValue={proposals.jobLocation}
                                        name="jobLocation" value={setNewProposal.jobLocation} required id="txtArea"
                                        rows="1" cols="119"></textarea>                                   
                                    <label>Job Description</label>
                                    <textarea onChange={changeHandlerProposal} className="form-control me-2"
                                        type="textarea" defaultValue={proposals.jobDescription}
                                        name="jobDescription" value={setNewProposal.jobDescription} required id="txtArea"
                                        rows="3" cols="119"></textarea>
                                    <label>Pay Range</label>
                                    <textarea onChange={changeHandlerProposal} className="form-control me-2"
                                        type="textarea" defaultValue={proposals.payRange}
                                        name="payRange" value={setNewProposal.payRange} required id="txtArea"
                                        rows="1" cols="119"></textarea>           
                                    <label>Benefits</label>
                                    <textarea onChange={changeHandlerProposal} className="form-control me-2"
                                        type="textarea" defaultValue={proposals.benefits}
                                        name="benefits" value={setNewProposal.benefits} required id="txtArea"
                                        rows="1" cols="119"></textarea>                                   
                                    <label>Additional Information</label>
                                    <textarea onChange={changeHandlerProposal} className="form-control me-2"
                                        type="textarea" defaultValue={proposals.additional}
                                        name="additional" value={setNewProposal.additional} required id="txtArea"
                                        rows="1" cols="119"></textarea>

                                    <br /><br />
                                    <div >
                                        <a onClick={handleUpdateProposal} className="btn-get-started scrollto"><button>Update</button></a>
                                        <br />
                                        <br />
                                        <a href="/welcome"><button className="btn-get-started scrollto">I'm having second thoughts..</button></a>
                                    </div>
                                </form>
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
                                    <li><a href="/createproposal"><button className="btn-get-started scrollto"
                                        type="button">Create New Proposal</button></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}

export default Edit;
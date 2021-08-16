import { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'

function View() {
    const [user, setUser] = useState({});
    const [proposals, setProposals] = useState([]);
    const [proposal, setProposal] = useState([]);
    const history = useHistory();

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

        useEffect(() => {
            const params = {
            id: localStorage.getItem('viewProposal')
            }
            axios.get('http://localhost:8080/findProposalById', { params })
            .then(response => {
                setProposal(response.data);
                
            }).catch(error => {
        
            });
        }, []
        );


        const handleDelete = (id) => {
            const params = { id }
            axios.delete('http://localhost:8080/delete', {params})
            .then(response => {
                history.push("/welcome")
            })
        }

        const handleEdit = (id) => {
            const params = { id }
            axios.put('http://localhost:8080/findProposalById', {params})
            .then(response => {
                localStorage.setItem("editProposal", response.data.id);
                history.push("/edit")
            })
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
                        <p></p>
                       
                                    <div>
                                        <p>
                                        <strong>Company Name: </strong> {proposal.companyName}
                                    </p>
                                    <p>
                                        <strong>Company Details: </strong> {proposal.companyInfo}
                                    </p>
                                    <p>
                                        <strong>Company Website: </strong> <a href={proposal.companyWebsite}>{proposal.companyWebsite}</a>
                                    </p>
                                    <p>
                                        <strong>Job Title: </strong> {proposal.jobTitle}
                                    </p>
                                    <p>
                                        <strong>Job Location: </strong> {proposal.jobLocation}
                                    </p>
                                    <p>
                                        <strong>Job Description: </strong> {proposal.jobDescription}
                                    </p>
                                    <p>
                                        <strong>Pay Range: </strong> {proposal.payRange}
                                    </p>
                                    <p>
                                        <strong>Benefits: </strong> {proposal.benefits}
                                    </p>
                                    <p>
                                        <strong>Additional Information: </strong> {proposal.additional}
                                    </p>
                                    </div>
                                    <hr />
                                    <br/><br />
                                    <button onClick={handleEdit} className="btn-get-started scrollto"
                                            type="button">Edit</button>
                                    <button onClick={handleDelete} className="btn-get-started scrollto"
                                            type="button">Delete</button>

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
  
  export default View;
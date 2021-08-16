import { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Dropdown, DropdownButton } from "react-bootstrap";
import {faBackspace, faEdit, faEye} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-dom'





function WelcomeAdmin() {
    const [user, setUser] = useState({});
    const [proposals, setProposals] = useState([]);
    const [refreshProposals, setRefreshProposals] = useState(0);
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
            axios.get('http://localhost:8080/findAllProposals')
            .then(response => {
                setProposals(response.data)
            }).catch(error => {
            });

        }, [refreshProposals]
        );

        const handleDelete = (id) => {
            const params = { id }
            axios.delete('http://localhost:8080/delete', {params})
            .then(response => {
                setRefreshProposals(count => count +1)
            })
        }

        const handleAccept = (id) => {
            const params = { id }
            axios.get('http://localhost:8080/updateStatusSelected', {params})
            .then(response => {
                setRefreshProposals(count => count +1)
            })
        }


        const handleDecline = (id) => {
            const params = { 
                id
             }
            axios.get('http://localhost:8080/updateStatusDeclined', {params})
            .then(response => {
                setRefreshProposals(count => count +1)
            })
        }

        const handleView = (id) => {
            const params = { id }
            axios.get('http://localhost:8080/findProposalById', {params}).then(response => {
                localStorage.setItem("viewProposal", response.data.id);
                history.push("/view");
            }).catch(error => {
                history.push("/error")
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
                        <div className="col-lg-9">
                        <h3>Your Proposals</h3>
                        <p></p>
                        {proposals.map((proposal, index) => {
                                    return (                                     
                                        <span key="index"></span>
                                    );
                                })}
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Created</th>
                                    <th>Company</th>
                                    <th>Job Title</th>
                                    <th>Status</th>
                                    <th>View</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {proposals.map((proposal, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{proposal.proposalCreated}</td>
                                            <td>{proposal.companyName}</td>
                                            <td >{proposal.jobTitle}</td>
                                            <td><DropdownButton id="dropdown-basic-button" title={proposal.status}>
                                                <Dropdown.Item onClick={()=>handleAccept(proposal.id)}>Select for Consideration</Dropdown.Item>
                                                <Dropdown.Item onClick={()=>handleDecline(proposal.id)}>Decline</Dropdown.Item>
                                                </DropdownButton>
                                            </td>
                                            <td><FontAwesomeIcon onClick={()=>handleView(proposal.id)} icon={faEye} /></td>
                                            <td><FontAwesomeIcon onClick={()=>handleDelete(proposal.id)} icon={faBackspace} /></td>
                                        </tr>
                                    );
                                })}
                               
                            </tbody>
                        </Table>
                            
                        </div>
                        <div className="col-lg-3">
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
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
  }
  
  export default WelcomeAdmin;
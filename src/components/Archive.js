import { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from "react-bootstrap";
import {faEye} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-dom'

function Archive() {
    const [user, setUser] = useState({});
    const [archives, setArchives] = useState([]);
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
            axios.get('http://localhost:8080/findArchiveByUser', {params})
            .then(response => {
                setArchives(response.data)
            }).catch(error => {
                history.push("/error")
            });

        }, []
        );

        const handleView = (id) => {
            const params = { id }
            axios.get('http://localhost:8080/findArchiveById', {params}).then(response => {
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
                        <div className="col-lg-8">
                        <h3>Your Archived Proposals</h3>
                        <p></p>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Created</th>
                                    <th>Company</th>
                                    <th>Job Title</th>
                                    <th>Status</th>
                                    <th>View</th>
                                </tr>
                            </thead>
                            <tbody>
                                {archives.map((archive, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{archive.proposalCreated}</td>
                                            <td>{archive.companyName}</td>
                                            <td >{archive.jobTitle}</td>
                                            <td>{archive.status}</td>
                                            <td><FontAwesomeIcon onClick={()=>handleView(archive.id)} icon={faEye} /></td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </Table>
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
  
  export default Archive;
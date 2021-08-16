import { useState } from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom'

function SignUp() {
    const [signUpUser, setSignUpUser] = useState({
        firstName: '', lastName: '', email: '', phone: '',
        company: '', title: '', permission: 'user', password: '', proposals: ([])
    });
    const history = useHistory();

    const changeHandlerUser = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const tempSignUp = { ...signUpUser };
        tempSignUp[name] = value;
        setSignUpUser(tempSignUp);
    }
    
    const handleSignUp = () => {
        
        axios.post('http://localhost:8080/saveUser', signUpUser).then(response => {
            history.push('/thankyou')
        }).catch(error => {
            console.log("user not added")
        });
    }

    return (
             <div id="hero" className="d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
                            {/* <h1>Welcome<em>!</em></h1> */}
                            <h2>Create a New Account</h2>
                            <form > 
                                <input onChange={changeHandlerUser} className="form-control me-2"
                                    type="text" placeholder="First Name"
                                    name="firstName" value={signUpUser.firstName} required /><br />
                                <input onChange={changeHandlerUser} className="form-control me-2" type="text"
                                    placeholder="Last Name" name="lastName" 
                                    value={signUpUser.lastName} required />
                                <br />                               
                                <input onChange={changeHandlerUser} className="form-control me-2"
                                    type="email" placeholder="Email Address"
                                    name="email" value={signUpUser.email} required /><br />
                                <input onChange={changeHandlerUser} className="form-control me-2" type="text"
                                    placeholder="Phone number - ex. (212) 515-1255" name="phone" 
                                    value={signUpUser.phone} required />
                                <br />
                                <input onChange={changeHandlerUser} className="form-control me-2"
                                    type="text" placeholder="Company"
                                    name="company" value={signUpUser.company} required /><br />
                                <input onChange={changeHandlerUser} className="form-control me-2" type="text"
                                    placeholder="Job Title" name="title" 
                                    value={signUpUser.title} required />
                                <br />
                                <input onChange={changeHandlerUser} className="form-control me-2"
                                    type="password" placeholder="Choose a password"
                                    name="password" value={signUpUser.password} required />
                                    <br />
                                <button onClick={handleSignUp} className="btn-get-started scrollto"
                                    type="button">Create Account</button>
                                    
                            </form>
                        </div>
                        
                        <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="400">
                            <img src="assets/img/why-us.png" className="img-fluid animated" alt="" />
                        </div>
                        
                    </div>
                    
                </div>
                
            </div>

    );
}

export default SignUp;
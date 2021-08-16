import { useState } from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom'

function Login() {

    const [signInUser, setSignInUser] = useState({ email: '', password: '' });
    const history = useHistory();

    const changeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const tempSignIn = { ...signInUser };
        tempSignIn[name] = value;
        setSignInUser(tempSignIn);
    }

    const handleLogin = () => {
        axios.post('http://localhost:8080/login', signInUser).then(response => {
            localStorage.setItem("loggedInUser", response.data.email, response.data.id, response.data.permission);
            history.push("/welcome");
        }).catch(error => {
            history.push("/error")
        });
    }

    return (
        <div id="hero" className="d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
                        <h1>Welcome<em>!</em></h1>
                        <h2>Please sign in to continue</h2>
                        <form >
                            <input onChange={changeHandler} className="form-control me-2"
                                type="email" placeholder="Email Address"
                                name="email" value={signInUser.email} required /><br />
                            <input onChange={changeHandler} className="form-control me-2" type="password"
                                placeholder="Password" name="password" value={signInUser.password} required />
                            <br />
                            <button onClick={handleLogin} className="btn-get-started scrollto"
                                type="button">Sign In</button>
                        </form>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="400">
                        <img src="assets/img/joehomepage.jpg" className="img-fluid animated" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
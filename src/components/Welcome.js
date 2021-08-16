import { useState, useEffect } from 'react';
import axios from 'axios';
import WelcomeUser from './WelcomeUser';
import WelcomeAdmin from './WelcomeAdmin';

function Welcome() {
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

    const toggleDisplay = () => {
        const permission = user.permission
        if (permission === 'user') {
            return (
				<WelcomeUser />
            );
        } else {
            return (
				<WelcomeAdmin />
            );
        }
    }
    return (
        toggleDisplay()
    );
}
  export default Welcome;
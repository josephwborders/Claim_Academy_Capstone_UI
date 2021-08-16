import { useState } from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom'

function Contact() {
    const [contact, setContact] = useState({
        name: '', email: '', subject: '', message: ''
    });
    const history = useHistory();

    const changeHandlerContact = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const tempContact = { ...contact };
        tempContact[name] = value;
        setContact(tempContact);
    }
    
    const handleContact = () => {
        
        axios.post('http://localhost:8080/contact', contact).then(response => {
            history.push('/messagesent')
        }).catch(error => {
            console.log("messsage not sent")
        });
    }

    
    return (
        <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">
  
          <div className="section-title">
            <h2>Contact</h2>
            <h4>Fill Out the Form Below To Send Me a Message</h4>
          </div>
          <div className="row">
            <div className="col-lg-12 mt-5 mt-lg-0 d-flex align-items-stretch">
              <form role="form" className="php-email-form">
                <div className="row">
                  <div className="form-group col-md-6">
                    <label>Your Name</label>
                    <input onChange={changeHandlerContact} type="text" name="name" 
                    className="form-control" id="name" value={contact.name} required />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Your Email Address</label>
                    <input onChange={changeHandlerContact} type="email" className="form-control" 
                    name="email" id="email" value={contact.email} required />
                  </div>
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <input onChange={changeHandlerContact} type="text" className="form-control" 
                  name="subject" id="subject" required value={contact.subject}/>
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea onChange={changeHandlerContact} className="form-control" name="message" 
                  rows="10" required value={contact.message}/>
                </div>
                <div  className="text-center"><button onClick={handleContact} type="submit">Send Message</button></div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Contact;
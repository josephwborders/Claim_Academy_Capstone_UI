import { Route, withRouter } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import ThankYou from './ThankYou';
import Welcome from './Welcome';
import CreateNewProposal from './CreateNewProposal';
import Claim from './Claim';
import ProjectManager from './ProjectManager';
import FinancialAdvisor from './FinancialAdvisor';
import DeputyChief from './DeputyChief';
import MasterAtArms from './MasterAtArms';
import AirFramer from './AirFramer';
import Family from './Family';
import Reading from './Reading';
import Cooking from './Cooking';
import DIY from './DIY';
import Travel from './Travel';
import Investing from './Investing';
import FAQ from './FAQ';
import Tutorial from './Tutorial';
import Contact from './Contact';
import MessageSent from "./MessageSent";
import View from "./View";
import Edit from "./Edit";
import Archive from "./Archive";

function Layout() {

    const toggleRoutes = () => {
      if (localStorage.getItem('loggedInUser')) {
        return (
          <div>
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/thankyou" component={ThankYou} />
            <Route path="/welcome" component={Welcome} />
            <Route path="/createproposal" component={CreateNewProposal} />
            <Route path="/claim" component={Claim} />
            <Route path="/projectmanager" component={ProjectManager} />
            <Route path="/financialadvisor" component={FinancialAdvisor} />
            <Route path="/deputychief" component={DeputyChief} />
            <Route path="/masteratarms" component={MasterAtArms} />
            <Route path="/airframer" component={AirFramer} />
            <Route path="/family" component={Family} />
            <Route path="/reading" component={Reading} />
            <Route path="/cooking" component={Cooking} />
            <Route path="/diy" component={DIY} />
            <Route path="/travel" component={Travel} />
            <Route path="/investing" component={Investing} />
            <Route path="/faq" component={FAQ} />
            <Route path="/tutorial" component={Tutorial} />
            <Route path="/contact" component={Contact} />
            <Route path="/messagesent" component={MessageSent} />
            <Route path="/view" component={View} />
            <Route path="/edit" component={Edit} />
            <Route path="/archive" component={Archive} />


            <Footer />

  
          </div>
        );
      } else {
        return (
          <div>
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/thankyou" component={ThankYou} />
            <Route path="/welcome" component={Welcome} />
            <Route path="/claim" component={Claim} />
            <Route path="/projectmanager" component={ProjectManager} />
            <Route path="/financialadvisor" component={FinancialAdvisor} />
            <Route path="/deputychief" component={DeputyChief} />
            <Route path="/masteratarms" component={MasterAtArms} />
            <Route path="/airframer" component={AirFramer} />
            <Route path="/family" component={Family} />
            <Route path="/reading" component={Reading} />
            <Route path="/cooking" component={Cooking} />
            <Route path="/diy" component={DIY} />
            <Route path="/travel" component={Travel} />
            <Route path="/investing" component={Investing} />
            <Route path="/faq" component={FAQ} />
            <Route path="/tutorial" component={Tutorial} />
            <Route path="/contact" component={Contact} />
            <Route path="/messagesent" component={MessageSent} />

            <Footer />
          </div>
        );
      }
    }
    return (
      toggleRoutes()
    );
  }
  
  export default withRouter(Layout);
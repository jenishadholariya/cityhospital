import './App.css';
import Header from './Component/Header/Header';
import Home from './Container/Home/Home';
import Footer from './Component/Footer/Footer';
import{ Route,Switch } from 'react-router-dom';
import Department from './Container/Department/Department';
import Doctor from './Container/Doctor/Doctor';
import About from './Container/About/About';
import Contact from './Container/Contact/Contact';
import Ref from './Container/Ref/Ref';
import 'bootstrap/dist/css/bootstrap.min.css';
import Auth from './Container/Auth/Auth';
import Medician from './Container/Medician/Medician';
import Bookappointment from './Container/Appoinment/Bookappointment';
import Listappointment from './Container/Appoinment/Listappointment';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path={"/"} exact component={Home}></Route>
        <Route path={"/Department"} exact component={Department}></Route>
        <Route path={"/Doctor"} exact component={Doctor}></Route>
        <Route path={"/About"} exact component={About}></Route>
        <Route path={"/Contact"} exact component={Contact}></Route>
        <Route path={"/Auth"} exact component={Auth}></Route>
        <Route path={"/Medician"} exact component={Medician}></Route>
        <Route path={"/Bookappointment"} exact component={Bookappointment}></Route>
        <Route path={"/Listappointment"} exact component={Listappointment}></Route>
        <Route path={"/ref"} exact component={Ref}></Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

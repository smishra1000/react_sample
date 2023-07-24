import logo from './logo.svg';
import './App.css';
import Home from './Home';
//import Employee from './Employee';
import Person from './Person';
import CompanyForm from './CompanyForm';
import LifeCycle from './LifeCycle';

import { BrowserRouter, Routes, Link, Route } from 'react-router-dom';
import Aboutus from './pages/Aboutus';
import Contactus from './pages/Contactus';
import Header from './pages/Header';
import PhoneBook from './pages/PhoneBook';
import Employee from './pages/Employee';
import Parent from './pages/PropsDrilling';
import UseStateHookDemo from './pages/hooks/UseStateHookDemo';
import Hooks from './pages/hooks/Hooks';
import UserList from './pages/UserList';
import CounterUsingRedux from './pages/CounterUisngRedux';
import EmployeeUsingRedux from './pages/EmployeeUsingRedux';

function App() {
  return (
    <div>
      {/* <Home/>
    <Home/>
    <Home/>
    <Employee/>
    <h1>--------------------</h1> */}
      {/* <Person/> */}
      {/* <CompanyForm/> */}
      {/* <LifeCycle address="hyd"/> */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/aboutus" element={<Aboutus />}></Route>
          <Route path="/contactus" element={<Contactus />}></Route>
          <Route path="/phonebook" element={<PhoneBook />}></Route>
          <Route path="/employee" element={<Employee />}></Route>
          <Route path="/propsdrilling" element={<Parent />}></Route>
          <Route path="/hooksdemo" element={< Hooks/>}></Route>
          <Route path="/userlist" element={< UserList/>}></Route>
          <Route path="/counterredux" element={< CounterUsingRedux/>}></Route>
          <Route path="/empredux" element={< EmployeeUsingRedux/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

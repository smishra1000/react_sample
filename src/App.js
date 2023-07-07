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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

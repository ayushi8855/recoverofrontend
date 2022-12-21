import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';

import Addmember from './pages/Addmember';
import { Dashboard } from './pages/Dashboard';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { Navbar } from './pages/Navbar';
import { AdminDash } from './pages/AdminDash';
import { Billing } from './pages/Billing';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Dashboard />}></Route>
        <Route path='/addmember' element={<Addmember/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/admindash' element={<AdminDash />}></Route>
        <Route path='/billing' element={<Billing/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

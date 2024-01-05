import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Main.jsx';
import Update from './Components/Home/update.jsx';

import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div className="App m-5">
      <Link to='/'>Home</Link>
      
      <Link to='/companies'>Companies</Link>
      <Link to='/companyUpdate/'>CompanyUpdate</Link>
    </div>
  );
}

export default App;

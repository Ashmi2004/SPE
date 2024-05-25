import './App.css';
//components import
import SideNavigationMenu from './components/SideNavigationMenu';
import { useState, useEffect } from 'react';
import TopNavigationMenu from './components/TopNavigationMenu';
import { Route, Routes, useLocation, Navigate, useNavigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import JobPortal from './components/JobPortal'; 
import HrPortal from './components/HrPortal';
import HRDetails from './components/HRDetails';
import ApplicantDetails from './components/ApplicantDetails';

function App() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true); // Track initial loading

  const navigate = useNavigate();

  // Check if there is any localStorage entry on initial render and page refresh
  useEffect(() => {
    let isAuthenticated = false;
    const data = window.localStorage.getItem('Data');
    if (data) {
      isAuthenticated = true;
      setAuthenticated(isAuthenticated);
    }
    setLoading(false); // Set loading to false after initial render

    // If not authenticated and not on the login page, redirect to login
    if (!isAuthenticated && location.pathname !== '/login') {
      
      navigate("/login");

    }
  },[authenticated]);

  return (
    <div className="p-5 h-screen">
          <Routes>
            <Route path='login' element={<Login setAuthenticated = {setAuthenticated}/>} />
            <Route path='jobPortal' element={<JobPortal/>}/>
            <Route path='hrPortal' element={<HrPortal/>}/>
            <Route path='hrDetails' element={<HRDetails/>}/>
            <Route path='applicantDetails' element={<ApplicantDetails/>}/>
            <Route path='main' element={<Dashboard />} />
          </Routes>
  </div>

  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { FaHome, FaProductHunt, FaBlog, FaHeadset, FaUser, FaSignInAlt, FaSignOutAlt, FaShoppingCart, FaSearch, FaBars, FaTimes } from 'react-icons/fa';

// Import all pages
import Home from './pages/Home';
import Product from './pages/Product';
import Blog from './pages/Blog';
import HelpLine from './pages/HelpLine';
import Login from './pages/Login';
import Profile from './pages/Profile';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn');
    const name = localStorage.getItem('userName');
    if (loggedIn === 'true') {
      setIsLoggedIn(true);
      setUserName(name || 'User');
    }
  }, []);

  const handleLogin = (email, name) => {
    setIsLoggedIn(true);
    const displayName = name || email.split('@')[0];
    setUserName(displayName);
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userName', displayName);
    localStorage.setItem('userEmail', email);
    setProfileDropdownOpen(false);
    navigate('/');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName('');
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');
    setProfileDropdownOpen(false);
    navigate('/login');
  };

  const styles = {
    navbar: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      background: 'linear-gradient(135deg, #1e1b4b, #312e81)',
      padding: '15px 5%',
      zIndex: 1000,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
    },
    logo: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: 'white',
      textDecoration: 'none',
    },
    navLinks: {
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
      flexWrap: 'wrap',
    },
    link: {
      color: 'white',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
      padding: '8px 12px',
    },
    activeLink: {
      background: 'rgba(255,255,255,0.2)',
      borderRadius: '8px',
    },
    profileBtn: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      background: 'rgba(255,255,255,0.1)',
      border: 'none',
      padding: '8px 16px',
      borderRadius: '50px',
      color: 'white',
      cursor: 'pointer',
    },
    dropdown: {
      position: 'absolute',
      top: '50px',
      right: '20px',
      background: 'white',
      borderRadius: '12px',
      padding: '10px 0',
      minWidth: '180px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
    },
    dropdownItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '10px 20px',
      color: '#333',
      textDecoration: 'none',
      cursor: 'pointer',
    },
    mainContent: {
      paddingTop: '80px',
      minHeight: '100vh',
    },
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div>
      <nav style={styles.navbar}>
        <Link to="/" style={styles.logo}>🚀 TechStore</Link>
        
        <div style={styles.navLinks}>
          <Link to="/" style={{...styles.link, ...(isActive('/') ? styles.activeLink : {})}}>
            <FaHome /> Home
          </Link>
          <Link to="/products" style={{...styles.link, ...(isActive('/products') ? styles.activeLink : {})}}>
            <FaProductHunt /> Products
          </Link>
          <Link to="/blog" style={{...styles.link, ...(isActive('/blog') ? styles.activeLink : {})}}>
            <FaBlog /> Blog
          </Link>
          <Link to="/helpline" style={{...styles.link, ...(isActive('/helpline') ? styles.activeLink : {})}}>
            <FaHeadset /> HelpLine
          </Link>
          
          <div style={{ position: 'relative' }}>
            <button style={styles.profileBtn} onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}>
              <FaUser /> {isLoggedIn ? userName : 'Account'}
            </button>
            
            {profileDropdownOpen && (
              <div style={styles.dropdown}>
                {isLoggedIn ? (
                  <>
                    <Link to="/profile" style={styles.dropdownItem} onClick={() => setProfileDropdownOpen(false)}>
                      <FaUser /> My Profile
                    </Link>
                    <div style={styles.dropdownItem} onClick={handleLogout}>
                      <FaSignOutAlt /> Logout
                    </div>
                  </>
                ) : (
                  <Link to="/login" style={styles.dropdownItem} onClick={() => setProfileDropdownOpen(false)}>
                    <FaSignInAlt /> Login / Sign Up
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>

      <div style={styles.mainContent}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/helpline" element={<HelpLine />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/profile" element={<Profile userName={userName} />} />
        </Routes>
      </div>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
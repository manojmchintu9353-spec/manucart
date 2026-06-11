import React from 'react';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaSignOutAlt } from 'react-icons/fa';

const Profile = ({ userName }) => {
  const userName_value = userName || localStorage.getItem('userName') || 'Guest User';
  const userEmail = localStorage.getItem('userEmail') || 'guest@example.com';

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');
    window.location.href = '/login';
  };

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f5f7fb',
      minHeight: '100vh',
      padding: '40px 20px',
    },
    card: {
      maxWidth: '800px',
      margin: '0 auto',
      background: 'white',
      borderRadius: '20px',
      padding: '40px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    },
    header: {
      textAlign: 'center',
      marginBottom: '30px',
    },
    avatar: {
      width: '100px',
      height: '100px',
      background: 'linear-gradient(135deg, #667eea, #764ba2)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 20px',
      fontSize: '50px',
      color: 'white',
    },
    name: {
      fontSize: '28px',
      fontWeight: 'bold',
      color: '#333',
      marginBottom: '5px',
    },
    email: {
      color: '#666',
      marginBottom: '20px',
    },
    infoSection: {
      borderTop: '1px solid #eee',
      paddingTop: '20px',
    },
    infoRow: {
      display: 'flex',
      alignItems: 'center',
      padding: '15px 0',
      borderBottom: '1px solid #f0f0f0',
    },
    infoIcon: {
      width: '40px',
      color: '#667eea',
      fontSize: '18px',
    },
    infoLabel: {
      width: '120px',
      fontWeight: '600',
      color: '#666',
    },
    infoValue: {
      flex: 1,
      color: '#333',
    },
    logoutBtn: {
      width: '100%',
      padding: '14px',
      background: '#ef4444',
      color: 'white',
      border: 'none',
      borderRadius: '10px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      marginTop: '30px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <div style={styles.avatar}>
            <FaUser />
          </div>
          <h1 style={styles.name}>{userName_value}</h1>
          <p style={styles.email}>{userEmail}</p>
        </div>

        <div style={styles.infoSection}>
          <div style={styles.infoRow}>
            <div style={styles.infoIcon}><FaUser /></div>
            <div style={styles.infoLabel}>Full Name</div>
            <div style={styles.infoValue}>{userName_value}</div>
          </div>
          <div style={styles.infoRow}>
            <div style={styles.infoIcon}><FaEnvelope /></div>
            <div style={styles.infoLabel}>Email Address</div>
            <div style={styles.infoValue}>{userEmail}</div>
          </div>
          <div style={styles.infoRow}>
            <div style={styles.infoIcon}><FaPhone /></div>
            <div style={styles.infoLabel}>Phone Number</div>
            <div style={styles.infoValue}>+1 (555) 123-4567</div>
          </div>
          <div style={styles.infoRow}>
            <div style={styles.infoIcon}><FaMapMarkerAlt /></div>
            <div style={styles.infoLabel}>Address</div>
            <div style={styles.infoValue}>123 Tech Street, San Francisco, CA</div>
          </div>
        </div>

        <button style={styles.logoutBtn} onClick={handleLogout}>
          <FaSignOutAlt /> Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
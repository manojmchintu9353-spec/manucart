import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaGoogle, FaFacebook, FaGithub, FaArrowRight, FaUser } from 'react-icons/fa';

const Login = ({ onLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      onLogin(formData.email, formData.name);
      alert('Login Successful!');
    } else {
      onLogin(formData.email, formData.name);
      alert('Account Created Successfully!');
    }
  };

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea, #764ba2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
    },
    card: {
      background: 'white',
      borderRadius: '20px',
      padding: '40px',
      width: '100%',
      maxWidth: '450px',
      boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
    },
    title: {
      fontSize: '28px',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '10px',
      color: '#333',
    },
    subtitle: {
      textAlign: 'center',
      color: '#666',
      marginBottom: '30px',
    },
    inputGroup: {
      position: 'relative',
      marginBottom: '20px',
    },
    inputIcon: {
      position: 'absolute',
      left: '15px',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#999',
    },
    input: {
      width: '100%',
      padding: '14px 15px 14px 45px',
      border: '1px solid #ddd',
      borderRadius: '10px',
      fontSize: '16px',
      boxSizing: 'border-box',
    },
    passwordToggle: {
      position: 'absolute',
      right: '15px',
      top: '50%',
      transform: 'translateY(-50%)',
      cursor: 'pointer',
      color: '#999',
    },
    button: {
      width: '100%',
      padding: '14px',
      background: 'linear-gradient(135deg, #667eea, #764ba2)',
      color: 'white',
      border: 'none',
      borderRadius: '10px',
      fontSize: '16px',
      fontWeight: 'bold',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
    },
    toggleText: {
      textAlign: 'center',
      marginTop: '20px',
      color: '#666',
    },
    toggleLink: {
      color: '#667eea',
      cursor: 'pointer',
      fontWeight: 'bold',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>{isLogin ? 'Welcome Back' : 'Create Account'}</h1>
        <p style={styles.subtitle}>{isLogin ? 'Sign in to continue' : 'Join us today'}</p>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div style={styles.inputGroup}>
              <div style={styles.inputIcon}><FaUser /></div>
              <input
                type="text"
                placeholder="Full Name"
                style={styles.input}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
          )}

          <div style={styles.inputGroup}>
            <div style={styles.inputIcon}><FaEnvelope /></div>
            <input
              type="email"
              placeholder="Email Address"
              style={styles.input}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <div style={styles.inputIcon}><FaLock /></div>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              style={styles.input}
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
            <div style={styles.passwordToggle} onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>

          <button type="submit" style={styles.button}>
            {isLogin ? 'Sign In' : 'Create Account'} <FaArrowRight />
          </button>
        </form>

        <div style={styles.toggleText}>
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span style={styles.toggleLink} onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? ' Sign Up' : ' Sign In'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
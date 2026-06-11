
import React, { useState } from 'react';
import { FaHeadset, FaPhone, FaEnvelope, FaWhatsapp, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const HelpLine = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f8fafc',
      minHeight: '100vh',
    },
    hero: {
      background: 'linear-gradient(135deg, #1e1b4b, #312e81)',
      padding: '80px 20px',
      textAlign: 'center',
      color: 'white',
    },
    heroTitle: {
      fontSize: '42px',
      marginBottom: '15px',
    },
    heroSubtitle: {
      fontSize: '18px',
      opacity: 0.9,
    },
    mainContent: {
      maxWidth: '1200px',
      margin: '-40px auto 0',
      padding: '0 20px 60px',
    },
    supportGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '25px',
      marginBottom: '50px',
    },
    supportCard: {
      background: 'white',
      padding: '30px',
      borderRadius: '20px',
      textAlign: 'center',
      boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
    },
    supportIcon: {
      fontSize: '40px',
      marginBottom: '15px',
    },
    supportTitle: {
      fontSize: '20px',
      marginBottom: '10px',
    },
    supportAction: {
      display: 'inline-block',
      marginTop: '15px',
      color: '#667eea',
      textDecoration: 'none',
      fontWeight: '600',
    },
    contactSection: {
      background: 'white',
      borderRadius: '20px',
      padding: '40px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
    },
    sectionTitle: {
      fontSize: '28px',
      marginBottom: '30px',
      textAlign: 'center',
    },
    formGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '30px',
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
    },
    label: {
      fontWeight: '600',
      color: '#333',
    },
    input: {
      padding: '12px 16px',
      border: '1px solid #ddd',
      borderRadius: '10px',
      fontSize: '16px',
    },
    textarea: {
      padding: '12px 16px',
      border: '1px solid #ddd',
      borderRadius: '10px',
      fontSize: '16px',
      fontFamily: 'inherit',
      resize: 'vertical',
    },
    submitBtn: {
      background: 'linear-gradient(135deg, #667eea, #764ba2)',
      color: 'white',
      border: 'none',
      padding: '14px 30px',
      borderRadius: '10px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      marginTop: '20px',
    },
    contactInfo: {
      marginTop: '40px',
      paddingTop: '40px',
      borderTop: '1px solid #eee',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '30px',
    },
    infoItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
    },
    infoIcon: {
      width: '45px',
      height: '45px',
      background: '#f0f0f0',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '20px',
    },
    successMsg: {
      background: '#10b981',
      color: 'white',
      padding: '15px',
      borderRadius: '10px',
      marginTop: '20px',
      textAlign: 'center',
    },
    footer: {
      background: '#0f172a',
      color: '#94a3b8',
      padding: '40px 20px',
      textAlign: 'center',
    },
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>How Can We Help You?</h1>
        <p style={styles.heroSubtitle}>24/7 Customer Support - We're here for you</p>
      </div>

      {/* Main Content */}
      <div style={styles.mainContent}>
        {/* Support Options */}
        <div style={styles.supportGrid}>
          <div style={styles.supportCard}>
            <div style={styles.supportIcon}><FaHeadset /></div>
            <h3 style={styles.supportTitle}>Live Chat</h3>
            <p>Chat with our support team</p>
            <a href="#" style={styles.supportAction}>Start Chat →</a>
          </div>
          <div style={styles.supportCard}>
            <div style={styles.supportIcon}><FaPhone /></div>
            <h3 style={styles.supportTitle}>Call Us</h3>
            <p>Speak directly with experts</p>
            <a href="#" style={styles.supportAction}>Call Now →</a>
          </div>
          <div style={styles.supportCard}>
            <div style={styles.supportIcon}><FaWhatsapp /></div>
            <h3 style={styles.supportTitle}>WhatsApp</h3>
            <p>Quick messaging support</p>
            <a href="#" style={styles.supportAction}>Message Us →</a>
          </div>
          <div style={styles.supportCard}>
            <div style={styles.supportIcon}><FaEnvelope /></div>
            <h3 style={styles.supportTitle}>Email</h3>
            <p>Get response within 24hrs</p>
            <a href="#" style={styles.supportAction}>Send Email →</a>
          </div>
        </div>

        {/* Contact Form */}
        <div style={styles.contactSection}>
          <h2 style={styles.sectionTitle}>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div style={styles.formGrid}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Your Name</label>
                <input
                  type="text"
                  style={styles.input}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Email Address</label>
                <input
                  type="email"
                  style={styles.input}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Message</label>
              <textarea
                rows="5"
                style={styles.textarea}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>
            <button type="submit" style={styles.submitBtn}>Send Message</button>
            {submitted && <div style={styles.successMsg}>✅ Message sent successfully!</div>}
          </form>

          {/* Contact Info */}
          <div style={styles.contactInfo}>
            <div style={styles.infoItem}>
              <div style={styles.infoIcon}><FaPhone /></div>
              <div>
                <strong>Phone</strong><br />
                +1 (555) 123-4567
              </div>
            </div>
            <div style={styles.infoItem}>
              <div style={styles.infoIcon}><FaEnvelope /></div>
              <div>
                <strong>Email</strong><br />
                manojmchintu9353@gmail.com
              </div>
            </div>
            <div style={styles.infoItem}>
              <div style={styles.infoIcon}><FaClock /></div>
              <div>
                <strong>Hours</strong><br />
                24/7 Support Available
              </div>
            </div>
            <div style={styles.infoItem}>
              <div style={styles.infoIcon}><FaMapMarkerAlt /></div>
              <div>
                <strong>Address</strong><br />
                123 Tech Street, SF
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={styles.footer}>
        <p>© 2024 TechStore Support Center. All rights reserved.</p>
      </div>
    </div>
  );
};

export default HelpLine;
import React, { useState, useEffect } from 'react';
import { 
  FaHeadset, FaPhone, FaEnvelope, FaWhatsapp, FaFacebookMessenger,
  FaTwitter, FaInstagram, FaMapMarkerAlt, FaClock, FaGlobe,
  FaTicketAlt, FaCommentDots, FaQuestionCircle, FaLifeRing,
  FaRobot, FaUserTie, FaShieldAlt, FaAward, FaStar,
  FaArrowRight, FaCheckCircle, FaPaperPlane, FaMicrophone,
  FaFileAlt, FaSearch, FaFilter, FaSort, FaDownload,
  FaVideo, FaPhoneAlt, FaSms, FaFax, FaPrint,
  FaLanguage, FaVolumeUp, FaAccessibleIcon, FaUniversalAccess,
  FaHeart, FaHandshake, FaUsers, FaBuilding,
  FaArrowUp, FaArrowDown, FaTimes, FaBars
} from 'react-icons/fa';

const HelpLine = () => {
  const [activeTab, setActiveTab] = useState('contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    priority: 'normal'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        priority: 'normal'
      });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  const supportOptions = [
    { icon: <FaHeadset />, title: "24/7 Live Support", desc: "Chat with our support agents", action: "Start Chat", color: "#667eea" },
    { icon: <FaPhoneAlt />, title: "Call Us", desc: "Speak directly with experts", action: "Call Now", color: "#10b981" },
    { icon: <FaEnvelope />, title: "Email Support", desc: "Get response within 24hrs", action: "Send Email", color: "#f59e0b" },
    { icon: <FaWhatsapp />, title: "WhatsApp", desc: "Quick messaging support", action: "Message Us", color: "#25d366" }
  ];

  const faqs = [
    { 
      question: "How do I reset my password?", 
      answer: "To reset your password, click on 'Forgot Password' on the login page. You'll receive an email with instructions to create a new password. If you don't see the email, check your spam folder."
    },
    { 
      question: "What payment methods do you accept?", 
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, Google Pay, and bank transfers. All payments are processed securely."
    },
    { 
      question: "How can I track my order?", 
      answer: "Once your order ships, you'll receive a tracking number via email. You can also track your order by logging into your account and visiting the 'My Orders' section."
    },
    { 
      question: "What is your return policy?", 
      answer: "We offer a 30-day money-back guarantee on all products. If you're not satisfied, you can return the item within 30 days for a full refund. Items must be in original condition."
    },
    { 
      question: "How do I contact technical support?", 
      answer: "You can reach technical support via live chat (24/7), phone at 1-800-123-4567, or email at techsupport@company.com. Enterprise customers have dedicated support lines."
    },
    { 
      question: "Do you offer enterprise solutions?", 
      answer: "Yes! We provide customized enterprise solutions including dedicated account managers, custom SLAs, volume pricing, and on-premise deployment options."
    }
  ];

  const styles = {
    container: {
      fontFamily: "'Inter', 'Poppins', 'Segoe UI', sans-serif",
      backgroundColor: '#f8fafc',
      minHeight: '100vh',
      overflowX: 'hidden',
    },
    // Hero Section
    hero: {
      background: 'linear-gradient(135deg, #1e1b4b, #312e81, #4c1d95)',
      padding: '80px 5% 100px',
      position: 'relative',
      overflow: 'hidden',
    },
    heroBackground: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(255,255,255,0.15), transparent 50%)`,
    },
    heroContent: {
      maxWidth: '1400px',
      margin: '0 auto',
      textAlign: 'center',
      position: 'relative',
      zIndex: 2,
    },
    heroBadge: {
      display: 'inline-block',
      background: 'rgba(255,255,255,0.15)',
      backdropFilter: 'blur(10px)',
      padding: '8px 24px',
      borderRadius: '50px',
      fontSize: '0.85rem',
      marginBottom: '25px',
    },
    heroTitle: {
      fontSize: 'clamp(2rem, 6vw, 3.5rem)',
      fontWeight: '800',
      color: 'white',
      marginBottom: '20px',
    },
    heroSubtitle: {
      fontSize: 'clamp(1rem, 3vw, 1.2rem)',
      color: 'rgba(255,255,255,0.9)',
      maxWidth: '700px',
      margin: '0 auto',
      lineHeight: '1.6',
    },
    floatingShapes: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      pointerEvents: 'none',
    },
    shape1: {
      position: 'absolute',
      top: '10%',
      left: '5%',
      width: '150px',
      height: '150px',
      background: 'rgba(255,255,255,0.05)',
      borderRadius: '50%',
      animation: 'float 8s infinite ease-in-out',
    },
    shape2: {
      position: 'absolute',
      bottom: '15%',
      right: '8%',
      width: '200px',
      height: '200px',
      background: 'rgba(255,255,255,0.03)',
      borderRadius: '30px',
      transform: 'rotate(45deg)',
      animation: 'floatSlow 12s infinite ease-in-out',
    },
    // Main Content
    mainContent: {
      maxWidth: '1400px',
      margin: '-50px auto 0',
      padding: '0 5% 60px',
      position: 'relative',
      zIndex: 3,
    },
    // Support Options Cards
    supportGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '25px',
      marginBottom: '60px',
    },
    supportCard: (isHovered, color) => ({
      background: 'white',
      borderRadius: '20px',
      padding: '30px 25px',
      textAlign: 'center',
      boxShadow: isHovered ? '0 25px 50px -12px rgba(0,0,0,0.25)' : '0 10px 30px -5px rgba(0,0,0,0.1)',
      transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
      transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      cursor: 'pointer',
      borderTop: `4px solid ${color}`,
    }),
    supportIcon: (color) => ({
      fontSize: '3rem',
      color: color,
      marginBottom: '15px',
    }),
    supportTitle: {
      fontSize: '1.3rem',
      fontWeight: '700',
      marginBottom: '10px',
    },
    supportDesc: {
      color: '#64748b',
      marginBottom: '20px',
      fontSize: '0.9rem',
    },
    supportAction: (color) => ({
      color: color,
      fontWeight: '600',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
    }),
    // Tabs
    tabsContainer: {
      background: 'white',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
      marginBottom: '40px',
    },
    tabsHeader: {
      display: 'flex',
      borderBottom: '1px solid #e2e8f0',
      background: '#f8fafc',
    },
    tab: (isActive) => ({
      flex: 1,
      padding: '18px 20px',
      textAlign: 'center',
      background: isActive ? 'white' : 'transparent',
      color: isActive ? '#667eea' : '#64748b',
      border: 'none',
      cursor: 'pointer',
      fontWeight: '600',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      transition: 'all 0.3s',
      borderBottom: isActive ? '3px solid #667eea' : 'none',
    }),
    tabContent: {
      padding: '40px',
    },
    // Contact Form
    formGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '25px',
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
    },
    label: {
      fontWeight: '600',
      color: '#1e293b',
      fontSize: '0.9rem',
    },
    input: {
      padding: '12px 16px',
      border: '1px solid #e2e8f0',
      borderRadius: '12px',
      fontSize: '0.95rem',
      transition: 'all 0.3s',
      outline: 'none',
    },
    textarea: {
      padding: '12px 16px',
      border: '1px solid #e2e8f0',
      borderRadius: '12px',
      fontSize: '0.95rem',
      fontFamily: 'inherit',
      resize: 'vertical',
      outline: 'none',
    },
    submitBtn: {
      background: 'linear-gradient(135deg, #667eea, #764ba2)',
      color: 'white',
      border: 'none',
      padding: '14px 30px',
      borderRadius: '12px',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      transition: 'all 0.3s',
    },
    // Contact Info
    contactInfo: {
      background: 'linear-gradient(135deg, #667eea, #764ba2)',
      borderRadius: '20px',
      padding: '30px',
      color: 'white',
    },
    infoItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      marginBottom: '25px',
    },
    infoIcon: {
      width: '45px',
      height: '45px',
      background: 'rgba(255,255,255,0.2)',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.2rem',
    },
    // FAQ Section
    faqItem: {
      borderBottom: '1px solid #e2e8f0',
      padding: '20px 0',
      cursor: 'pointer',
    },
    faqQuestion: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontWeight: '600',
      fontSize: '1.05rem',
    },
    faqAnswer: {
      color: '#64748b',
      marginTop: '15px',
      lineHeight: '1.6',
      paddingRight: '30px',
    },
    // Emergency Section
    emergencySection: {
      background: 'linear-gradient(135deg, #ef4444, #dc2626)',
      borderRadius: '20px',
      padding: '40px',
      textAlign: 'center',
      color: 'white',
      marginTop: '40px',
    },
    emergencyNumber: {
      fontSize: '2rem',
      fontWeight: '800',
      margin: '15px 0',
      letterSpacing: '2px',
    },
    // Footer
    footer: {
      background: '#0f172a',
      color: '#94a3b8',
      padding: '60px 5% 30px',
    },
  };

  const keyframes = `
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }
    @keyframes floatSlow {
      0%, 100% { transform: translateY(0px) translateX(0px) rotate(45deg); }
      25% { transform: translateY(-30px) translateX(15px) rotate(50deg); }
      75% { transform: translateY(20px) translateX(-10px) rotate(40deg); }
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
    }
    .support-card, .tab-content {
      animation: fadeIn 0.5s ease-out;
    }
    .submit-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);
    }
  `;

  return (
    <div style={styles.container}>
      <style>{keyframes}</style>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroBackground}></div>
        <div style={styles.floatingShapes}>
          <div style={styles.shape1}></div>
          <div style={styles.shape2}></div>
        </div>
        <div style={styles.heroContent}>
          <div style={styles.heroBadge}>
            <FaHeadset /> 24/7 Customer Support
          </div>
          <h1 style={styles.heroTitle}>How Can We Help You?</h1>
          <p style={styles.heroSubtitle}>
            Our dedicated support team is here to assist you 24/7. 
            Choose your preferred way to connect with us.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div style={styles.mainContent}>
        {/* Support Options Cards */}
        <div style={styles.supportGrid}>
          {supportOptions.map((option, index) => (
            <div
              key={index}
              style={styles.supportCard(hoveredCard === index, option.color)}
              className="support-card"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div style={styles.supportIcon(option.color)}>{option.icon}</div>
              <h3 style={styles.supportTitle}>{option.title}</h3>
              <p style={styles.supportDesc}>{option.desc}</p>
              <a href="#" style={styles.supportAction(option.color)}>
                {option.action} <FaArrowRight />
              </a>
            </div>
          ))}
        </div>

        {/* Tabs Section */}
        <div style={styles.tabsContainer}>
          <div style={styles.tabsHeader}>
            <button style={styles.tab(activeTab === 'contact')} onClick={() => setActiveTab('contact')}>
              <FaEnvelope /> Contact Form
            </button>
            <button style={styles.tab(activeTab === 'faq')} onClick={() => setActiveTab('faq')}>
              <FaQuestionCircle /> FAQs
            </button>
            <button style={styles.tab(activeTab === 'info')} onClick={() => setActiveTab('info')}>
              <FaBuilding /> Contact Info
            </button>
          </div>

          <div style={styles.tabContent}>
            {/* Contact Form Tab */}
            {activeTab === 'contact' && (
              <div className="tab-content">
                <form onSubmit={handleSubmit}>
                  <div style={styles.formGrid}>
                    <div style={styles.formGroup}>
                      <label style={styles.label}>Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        style={styles.input}
                        placeholder="John Doe"
                      />
                    </div>
                    <div style={styles.formGroup}>
                      <label style={styles.label}>Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        style={styles.input}
                        placeholder="john@example.com"
                      />
                    </div>
                    <div style={styles.formGroup}>
                      <label style={styles.label}>Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        style={styles.input}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div style={styles.formGroup}>
                      <label style={styles.label}>Subject *</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        style={styles.input}
                        placeholder="How can we help?"
                      />
                    </div>
                    <div style={{ ...styles.formGroup, gridColumn: 'span 2' }}>
                      <label style={styles.label}>Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows="5"
                        style={styles.textarea}
                        placeholder="Please describe your issue in detail..."
                      />
                    </div>
                  </div>
                  <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'flex-end' }}>
                    <button type="submit" style={styles.submitBtn} className="submit-btn" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending...' : <><FaPaperPlane /> Send Message</>}
                    </button>
                  </div>
                  {submitSuccess && (
                    <div style={{ marginTop: '20px', padding: '15px', background: '#10b98120', borderRadius: '12px', color: '#10b981', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <FaCheckCircle /> Your message has been sent successfully! We'll get back to you soon.
                    </div>
                  )}
                </form>
              </div>
            )}

            {/* FAQ Tab */}
            {activeTab === 'faq' && (
              <div className="tab-content">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    style={styles.faqItem}
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <div style={styles.faqQuestion}>
                      <span>{faq.question}</span>
                      {openFaq === index ? <FaArrowUp /> : <FaArrowDown />}
                    </div>
                    {openFaq === index && (
                      <div style={styles.faqAnswer}>
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Contact Info Tab */}
            {activeTab === 'info' && (
              <div className="tab-content">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                  <div>
                    <h3 style={{ marginBottom: '20px', color: '#1e293b' }}>📍 Office Locations</h3>
                    <div style={styles.infoItem}>
                      <div style={styles.infoIcon}><FaMapMarkerAlt /></div>
                      <div>
                        <strong>US Headquarters</strong><br />
                        123 Tech Street, San Francisco, CA 94105
                      </div>
                    </div>
                    <div style={styles.infoItem}>
                      <div style={styles.infoIcon}><FaMapMarkerAlt /></div>
                      <div>
                        <strong>Europe Office</strong><br />
                        45 Innovation Way, London, UK
                      </div>
                    </div>
                    <div style={styles.infoItem}>
                      <div style={styles.infoIcon}><FaMapMarkerAlt /></div>
                      <div>
                        <strong>Asia Pacific</strong><br />
                        88 Digital Avenue, Singapore
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 style={{ marginBottom: '20px', color: '#1e293b' }}>⏰ Business Hours</h3>
                    <div style={styles.infoItem}>
                      <div style={styles.infoIcon}><FaClock /></div>
                      <div>
                        <strong>24/7 Support Available</strong><br />
                        Monday - Friday: 9AM - 9PM EST<br />
                        Saturday - Sunday: 10AM - 6PM EST
                      </div>
                    </div>
                    <div style={styles.infoItem}>
                      <div style={styles.infoIcon}><FaGlobe /></div>
                      <div>
                        <strong>Global Support Teams</strong><br />
                        Support available in English, Spanish, French, German, Chinese
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Emergency Support Section */}
        <div style={styles.emergencySection}>
          <div style={{ fontSize: '3rem' }}>🚨</div>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '10px' }}>24/7 Emergency Support</h2>
          <p>For critical issues that require immediate attention</p>
          <div style={styles.emergencyNumber}>
            <FaPhoneAlt style={{ marginRight: '10px' }} /> 1-800-123-4567
          </div>
          <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>Enterprise clients: Use your dedicated support line</p>
        </div>
      </div>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
          <div>
            <h3 style={{ color: 'white', marginBottom: '20px' }}>
              <FaHeadset style={{ marginRight: '10px' }} /> Support Center
            </h3>
            <p>Your satisfaction is our priority. We're here to help 24/7.</p>
          </div>
          <div>
            <h4 style={{ color: 'white', marginBottom: '15px' }}>Quick Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a href="#" style={{ color: '#94a3b8', textDecoration: 'none' }}>Knowledge Base</a>
              <a href="#" style={{ color: '#94a3b8', textDecoration: 'none' }}>Community Forum</a>
              <a href="#" style={{ color: '#94a3b8', textDecoration: 'none' }}>Video Tutorials</a>
              <a href="#" style={{ color: '#94a3b8', textDecoration: 'none' }}>System Status</a>
            </div>
          </div>
          <div>
            <h4 style={{ color: 'white', marginBottom: '15px' }}>Connect With Us</h4>
            <div style={{ display: 'flex', gap: '15px', fontSize: '1.5rem' }}>
              <FaWhatsapp style={{ cursor: 'pointer', color: '#25d366' }} />
              <FaFacebookMessenger style={{ cursor: 'pointer', color: '#0084ff' }} />
              <FaTwitter style={{ cursor: 'pointer', color: '#1da1f2' }} />
              <FaInstagram style={{ cursor: 'pointer', color: '#e4405f' }} />
            </div>
          </div>
        </div>
        <div style={{ textAlign: 'center', paddingTop: '40px', marginTop: '40px', borderTop: '1px solid #1e293b' }}>
          <p>© 2024 HelpLine Support Center. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </footer>
    </div>
  );
};

export default HelpLine;
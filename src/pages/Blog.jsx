import React, { useState, useEffect } from 'react';
import { 
  FaSearch, FaUser, FaCalendar, FaClock, FaTag, FaComment,
  FaHeart, FaRegHeart, FaShare, FaBookmark, FaRegBookmark,
  FaArrowRight, FaArrowLeft, FaFacebook, FaTwitter, FaLinkedin,
  FaInstagram, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt,
  FaEye, FaThumbsUp, FaRegComment, FaChartLine, FaTrophy,
  FaFire, FaNewspaper, FaPodcast, FaVideo, FaImage,
  FaQuoteLeft, FaQuoteRight, FaStar, FaRegStar, FaPenFancy,
  FaLaptop, FaMobile, FaTabletAlt, FaCode, FaCloud
} from 'react-icons/fa';

const Blog = () => {
  const [hoveredPost, setHoveredPost] = useState(null);
  const [likedPosts, setLikedPosts] = useState({});
  const [bookmarkedPosts, setBookmarkedPosts] = useState({});
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [viewMode, setViewMode] = useState('grid');

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const categories = ['All', 'Technology', 'Design', 'Development', 'AI', 'Cloud Computing', 'Cybersecurity'];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Artificial Intelligence in 2025",
      excerpt: "Explore how AI is transforming industries and reshaping our future with groundbreaking innovations...",
      category: "AI",
      author: "Sarah Johnson",
      authorAvatar: "👩‍💻",
      date: "March 15, 2024",
      readTime: "8 min read",
      views: 12450,
      likes: 342,
      comments: 89,
      image: "🤖",
      featured: true,
      tags: ["AI", "Machine Learning", "Future Tech"]
    },
    {
      id: 2,
      title: "Mastering React: Advanced Patterns and Performance",
      excerpt: "Level up your React skills with these advanced patterns and optimization techniques...",
      category: "Development",
      author: "Michael Chen",
      authorAvatar: "👨‍💻",
      date: "March 12, 2024",
      readTime: "12 min read",
      views: 8920,
      likes: 267,
      comments: 45,
      image: "⚛️",
      featured: false,
      tags: ["React", "JavaScript", "Web Dev"]
    },
    {
      id: 3,
      title: "UI/UX Design Trends That Will Dominate 2024",
      excerpt: "Discover the latest design trends that are shaping user experiences across the web...",
      category: "Design",
      author: "Emily Rodriguez",
      authorAvatar: "🎨",
      date: "March 10, 2024",
      readTime: "6 min read",
      views: 15670,
      likes: 523,
      comments: 112,
      image: "🎨",
      featured: true,
      tags: ["Design", "UI/UX", "Trends"]
    },
    {
      id: 4,
      title: "Cloud Native Architecture: Best Practices",
      excerpt: "Learn how to build scalable and resilient cloud-native applications with these best practices...",
      category: "Cloud Computing",
      author: "David Kumar",
      authorAvatar: "☁️",
      date: "March 8, 2024",
      readTime: "10 min read",
      views: 6430,
      likes: 198,
      comments: 34,
      image: "☁️",
      featured: false,
      tags: ["Cloud", "DevOps", "Architecture"]
    },
    {
      id: 5,
      title: "Cybersecurity Threats and How to Protect Your Data",
      excerpt: "Stay ahead of cyber threats with these essential security practices and tools...",
      category: "Cybersecurity",
      author: "Lisa Wang",
      authorAvatar: "🔒",
      date: "March 5, 2024",
      readTime: "9 min read",
      views: 18760,
      likes: 678,
      comments: 156,
      image: "🔒",
      featured: true,
      tags: ["Security", "Privacy", "Data Protection"]
    },
    {
      id: 6,
      title: "Getting Started with TypeScript: A Complete Guide",
      excerpt: "TypeScript is taking over the JavaScript world. Here's everything you need to get started...",
      category: "Development",
      author: "James Wilson",
      authorAvatar: "📘",
      date: "March 3, 2024",
      readTime: "11 min read",
      views: 5430,
      likes: 167,
      comments: 28,
      image: "📘",
      featured: false,
      tags: ["TypeScript", "JavaScript", "Programming"]
    },
    {
      id: 7,
      title: "The Rise of Edge Computing",
      excerpt: "Edge computing is revolutionizing how we process data. Here's why it matters...",
      category: "Technology",
      author: "Maria Garcia",
      authorAvatar: "🌐",
      date: "February 28, 2024",
      readTime: "7 min read",
      views: 7650,
      likes: 234,
      comments: 41,
      image: "🌐",
      featured: false,
      tags: ["Edge Computing", "IoT", "Technology"]
    },
    {
      id: 8,
      title: "Building Microservices with Docker and Kubernetes",
      excerpt: "A comprehensive guide to containerization and orchestration for modern applications...",
      category: "Cloud Computing",
      author: "Alex Thompson",
      authorAvatar: "🐳",
      date: "February 25, 2024",
      readTime: "14 min read",
      views: 9870,
      likes: 312,
      comments: 67,
      image: "🐳",
      featured: false,
      tags: ["Docker", "Kubernetes", "Microservices"]
    }
  ];

  const toggleLike = (postId) => {
    setLikedPosts(prev => ({ ...prev, [postId]: !prev[postId] }));
  };

  const toggleBookmark = (postId) => {
    setBookmarkedPosts(prev => ({ ...prev, [postId]: !prev[postId] }));
  };

  const filteredPosts = blogPosts
    .filter(post => activeCategory === 'All' || post.category === activeCategory)
    .filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                     post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()));

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const styles = {
    container: {
      fontFamily: "'Inter', 'Poppins', 'Segoe UI', sans-serif",
      backgroundColor: '#f8fafc',
      minHeight: '100vh',
      overflowX: 'hidden',
    },
    // Header
    header: {
      background: 'linear-gradient(135deg, #1e1b4b, #312e81)',
      color: 'white',
      padding: '60px 5% 40px',
      position: 'relative',
      overflow: 'hidden',
    },
    headerContent: {
      maxWidth: '1400px',
      margin: '0 auto',
      textAlign: 'center',
      position: 'relative',
      zIndex: 2,
    },
    headerTitle: {
      fontSize: 'clamp(2rem, 6vw, 3.5rem)',
      fontWeight: '800',
      marginBottom: '15px',
    },
    headerSubtitle: {
      fontSize: '1.1rem',
      opacity: 0.9,
      maxWidth: '600px',
      margin: '0 auto',
    },
    headerShape: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(255,255,255,0.1), transparent)`,
    },
    // Main Content
    mainContent: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '60px 5%',
    },
    // Search and Filter Bar
    searchBar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '20px',
      marginBottom: '40px',
      padding: '20px',
      background: 'white',
      borderRadius: '20px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
    },
    searchInputWrapper: {
      display: 'flex',
      alignItems: 'center',
      background: '#f1f5f9',
      borderRadius: '50px',
      padding: '8px 20px',
      flex: 1,
      minWidth: '250px',
    },
    searchInput: {
      border: 'none',
      background: 'transparent',
      padding: '10px',
      width: '100%',
      outline: 'none',
      fontSize: '0.95rem',
    },
    categoriesWrapper: {
      display: 'flex',
      gap: '12px',
      flexWrap: 'wrap',
    },
    categoryBtn: (isActive) => ({
      padding: '8px 20px',
      borderRadius: '50px',
      border: 'none',
      background: isActive ? 'linear-gradient(135deg, #667eea, #764ba2)' : '#f1f5f9',
      color: isActive ? 'white' : '#64748b',
      cursor: 'pointer',
      fontWeight: '500',
      transition: 'all 0.3s',
    }),
    viewToggle: {
      display: 'flex',
      gap: '10px',
    },
    viewBtn: {
      padding: '8px 15px',
      borderRadius: '10px',
      border: '1px solid #e2e8f0',
      background: 'white',
      cursor: 'pointer',
    },
    // Featured Section
    featuredSection: {
      marginBottom: '60px',
    },
    sectionTitle: {
      fontSize: '1.8rem',
      fontWeight: '700',
      marginBottom: '30px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    },
    featuredGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '30px',
    },
    featuredCard: (isHovered) => ({
      background: 'white',
      borderRadius: '25px',
      overflow: 'hidden',
      boxShadow: isHovered ? '0 25px 50px -12px rgba(0,0,0,0.25)' : '0 10px 30px -5px rgba(0,0,0,0.1)',
      transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
      transition: 'all 0.4s ease',
      cursor: 'pointer',
      position: 'relative',
    }),
    featuredImage: {
      background: 'linear-gradient(135deg, #667eea, #764ba2)',
      padding: '50px',
      textAlign: 'center',
      fontSize: '80px',
      position: 'relative',
    },
    featuredBadge: {
      position: 'absolute',
      top: '15px',
      left: '15px',
      background: '#f59e0b',
      color: 'white',
      padding: '5px 12px',
      borderRadius: '20px',
      fontSize: '0.7rem',
      fontWeight: '600',
    },
    featuredContent: {
      padding: '25px',
    },
    // Blog Grid
    blogGrid: {
      display: viewMode === 'grid' ? 'grid' : 'flex',
      gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
      flexDirection: viewMode === 'grid' ? 'unset' : 'column',
      gap: '30px',
    },
    blogCard: (isHovered) => ({
      background: 'white',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: isHovered ? '0 20px 40px -12px rgba(0,0,0,0.2)' : '0 5px 20px rgba(0,0,0,0.05)',
      transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      display: viewMode === 'grid' ? 'block' : 'flex',
      alignItems: viewMode === 'grid' ? 'stretch' : 'center',
      gap: viewMode === 'grid' ? 0 : '20px',
      marginBottom: viewMode === 'grid' ? 0 : '20px',
    }),
    blogImage: {
      background: 'linear-gradient(135deg, #e0e7ff, #c7d2fe)',
      padding: viewMode === 'grid' ? '40px' : '30px',
      textAlign: 'center',
      fontSize: viewMode === 'grid' ? '50px' : '40px',
      minWidth: viewMode === 'grid' ? 'auto' : '150px',
    },
    blogContent: {
      padding: viewMode === 'grid' ? '20px' : '20px 20px 20px 0',
      flex: 1,
    },
    blogMeta: {
      display: 'flex',
      gap: '15px',
      fontSize: '0.75rem',
      color: '#94a3b8',
      marginBottom: '12px',
      flexWrap: 'wrap',
    },
    metaItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
    },
    blogTitle: {
      fontSize: '1.25rem',
      fontWeight: '700',
      marginBottom: '10px',
      color: '#1e293b',
    },
    blogExcerpt: {
      color: '#64748b',
      lineHeight: '1.6',
      marginBottom: '15px',
    },
    blogFooter: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '15px',
    },
    authorInfo: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    authorAvatar: {
      width: '35px',
      height: '35px',
      background: '#e2e8f0',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.2rem',
    },
    actionButtons: {
      display: 'flex',
      gap: '12px',
    },
    actionBtn: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontSize: '1.1rem',
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
      color: '#94a3b8',
    },
    readMore: {
      color: '#667eea',
      textDecoration: 'none',
      fontWeight: '500',
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
    },
    // Newsletter Section
    newsletter: {
      background: 'linear-gradient(135deg, #667eea, #764ba2)',
      marginTop: '60px',
      padding: '60px 40px',
      borderRadius: '30px',
      textAlign: 'center',
      color: 'white',
    },
    newsletterTitle: {
      fontSize: '1.8rem',
      marginBottom: '15px',
    },
    newsletterForm: {
      display: 'flex',
      justifyContent: 'center',
      gap: '15px',
      marginTop: '30px',
      flexWrap: 'wrap',
    },
    newsletterInput: {
      padding: '14px 25px',
      borderRadius: '50px',
      border: 'none',
      width: '300px',
      outline: 'none',
    },
    newsletterBtn: {
      background: '#f59e0b',
      border: 'none',
      padding: '14px 30px',
      borderRadius: '50px',
      color: 'white',
      fontWeight: '600',
      cursor: 'pointer',
    },
    // Footer
    footer: {
      background: '#0f172a',
      color: '#94a3b8',
      padding: '60px 5% 30px',
      marginTop: '60px',
    },
    footerGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '40px',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    footerTitle: {
      color: 'white',
      fontSize: '1.1rem',
      marginBottom: '20px',
    },
    footerLinks: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
    },
    footerLink: {
      color: '#94a3b8',
      textDecoration: 'none',
      cursor: 'pointer',
    },
    socialIcons: {
      display: 'flex',
      gap: '15px',
      fontSize: '1.3rem',
    },
    copyright: {
      textAlign: 'center',
      paddingTop: '40px',
      marginTop: '40px',
      borderTop: '1px solid #1e293b',
    },
  };

  const keyframes = `
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
    }
    .blog-card, .featured-card {
      animation: fadeIn 0.5s ease-out;
    }
    .category-btn:hover {
      transform: translateY(-2px);
    }
    .read-more:hover {
      gap: 8px;
    }
  `;

  return (
    <div style={styles.container}>
      <style>{keyframes}</style>

      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerShape}></div>
        <div style={styles.headerContent}>
          <h1 style={styles.headerTitle}>
            <FaNewspaper style={{ marginRight: '10px' }} />
            TechInsights Blog
          </h1>
          <p style={styles.headerSubtitle}>
            Exploring the latest trends in technology, design, and development
          </p>
        </div>
      </header>

      {/* Main Content */}
      <div style={styles.mainContent}>
        {/* Search and Filter */}
        <div style={styles.searchBar}>
          <div style={styles.searchInputWrapper}>
            <FaSearch style={{ color: '#94a3b8' }} />
            <input
              type="text"
              placeholder="Search articles..."
              style={styles.searchInput}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div style={styles.categoriesWrapper}>
            {categories.map(cat => (
              <button
                key={cat}
                style={styles.categoryBtn(activeCategory === cat)}
                className="category-btn"
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <div style={styles.viewToggle}>
            <button style={styles.viewBtn} onClick={() => setViewMode('grid')}>📱 Grid</button>
            <button style={styles.viewBtn} onClick={() => setViewMode('list')}>📄 List</button>
          </div>
        </div>

        {/* Featured Posts */}
        {activeCategory === 'All' && searchQuery === '' && (
          <div style={styles.featuredSection}>
            <h2 style={styles.sectionTitle}>
              <FaFire color="#f59e0b" /> Featured Stories
            </h2>
            <div style={styles.featuredGrid}>
              {featuredPosts.map(post => (
                <div
                  key={post.id}
                  style={styles.featuredCard(hoveredPost === post.id)}
                  className="featured-card"
                  onMouseEnter={() => setHoveredPost(post.id)}
                  onMouseLeave={() => setHoveredPost(null)}
                >
                  <div style={styles.featuredImage}>
                    <span style={styles.featuredBadge}>Featured</span>
                    {post.image}
                  </div>
                  <div style={styles.featuredContent}>
                    <div style={styles.blogMeta}>
                      <span style={styles.metaItem}><FaCalendar /> {post.date}</span>
                      <span style={styles.metaItem}><FaClock /> {post.readTime}</span>
                      <span style={styles.metaItem}><FaEye /> {post.views.toLocaleString()}</span>
                    </div>
                    <h3 style={styles.blogTitle}>{post.title}</h3>
                    <p style={styles.blogExcerpt}>{post.excerpt}</p>
                    <div style={styles.blogFooter}>
                      <div style={styles.authorInfo}>
                        <div style={styles.authorAvatar}>{post.authorAvatar}</div>
                        <span style={{ fontSize: '0.85rem' }}>{post.author}</span>
                      </div>
                      <a href="#" style={styles.readMore} className="read-more">
                        Read More <FaArrowRight />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* All Posts */}
        <div>
          <h2 style={styles.sectionTitle}>
            <FaNewspaper /> Latest Articles
          </h2>
          <div style={styles.blogGrid}>
            {regularPosts.map(post => (
              <div
                key={post.id}
                style={styles.blogCard(hoveredPost === post.id)}
                className="blog-card"
                onMouseEnter={() => setHoveredPost(post.id)}
                onMouseLeave={() => setHoveredPost(null)}
              >
                <div style={styles.blogImage}>{post.image}</div>
                <div style={styles.blogContent}>
                  <div style={styles.blogMeta}>
                    <span style={styles.metaItem}><FaUser /> {post.author}</span>
                    <span style={styles.metaItem}><FaCalendar /> {post.date}</span>
                    <span style={styles.metaItem}><FaClock /> {post.readTime}</span>
                    <span style={styles.metaItem}><FaTag /> {post.category}</span>
                  </div>
                  <h3 style={styles.blogTitle}>{post.title}</h3>
                  <p style={styles.blogExcerpt}>{post.excerpt}</p>
                  <div style={styles.blogFooter}>
                    <div style={styles.actionButtons}>
                      <button 
                        style={styles.actionBtn}
                        onClick={() => toggleLike(post.id)}
                      >
                        {likedPosts[post.id] ? <FaHeart color="#ef4444" /> : <FaRegHeart />}
                        <span>{post.likes + (likedPosts[post.id] ? 1 : 0)}</span>
                      </button>
                      <button style={styles.actionBtn}>
                        <FaRegComment /> {post.comments}
                      </button>
                      <button 
                        style={styles.actionBtn}
                        onClick={() => toggleBookmark(post.id)}
                      >
                        {bookmarkedPosts[post.id] ? <FaBookmark color="#f59e0b" /> : <FaRegBookmark />}
                      </button>
                    </div>
                    <a href="#" style={styles.readMore} className="read-more">
                      Read <FaArrowRight />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div style={styles.newsletter}>
          <h2 style={styles.newsletterTitle}>Subscribe to Our Newsletter</h2>
          <p>Get the latest tech insights delivered straight to your inbox</p>
          <div style={styles.newsletterForm}>
            <input type="email" placeholder="Enter your email" style={styles.newsletterInput} />
            <button style={styles.newsletterBtn}>Subscribe</button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerGrid}>
          <div>
            <h3 style={styles.footerTitle}>
              <FaNewspaper style={{ marginRight: '10px', color: '#667eea' }} />
              TechInsights
            </h3>
            <p>Your daily source for technology news, tutorials, and insights.</p>
            <div style={styles.socialIcons}>
              <FaFacebook /> <FaTwitter /> <FaLinkedin /> <FaInstagram /> <FaYoutube />
            </div>
          </div>
          <div>
            <h4 style={styles.footerTitle}>Categories</h4>
            <div style={styles.footerLinks}>
              <a href="#" style={styles.footerLink}>Technology</a>
              <a href="#" style={styles.footerLink}>Design</a>
              <a href="#" style={styles.footerLink}>Development</a>
              <a href="#" style={styles.footerLink}>AI & ML</a>
            </div>
          </div>
          <div>
            <h4 style={styles.footerTitle}>Resources</h4>
            <div style={styles.footerLinks}>
              <a href="#" style={styles.footerLink}>About Us</a>
              <a href="#" style={styles.footerLink}>Contact</a>
              <a href="#" style={styles.footerLink}>Privacy Policy</a>
              <a href="#" style={styles.footerLink}>Terms of Service</a>
            </div>
          </div>
          <div>
            <h4 style={styles.footerTitle}>Contact</h4>
            <div style={styles.footerLinks}>
              <div><FaEnvelope style={{ marginRight: '10px' }} /> hello@techinsights.com</div>
              <div><FaPhone style={{ marginRight: '10px' }} /> +1 (555) 123-4567</div>
              <div><FaMapMarkerAlt style={{ marginRight: '10px' }} /> 123 Tech Street, Silicon Valley</div>
            </div>
          </div>
        </div>
        <div style={styles.copyright}>
          <p>© 2024 TechInsights Blog. All rights reserved. | Designed with ❤️ for tech enthusiasts</p>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
import React, { useState } from 'react';
import { 
  FaShoppingCart, FaStar, FaStarHalfAlt, FaRegHeart, FaHeart,
  FaFilter, FaSearch, FaThLarge, FaList, FaCheckCircle, 
  FaTruck, FaUndo, FaShieldAlt, FaEnvelope, FaPhone, 
  FaMapMarkerAlt, FaGem, FaMedal, FaArrowRight
} from 'react-icons/fa';

const Product = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [viewMode, setViewMode] = useState('grid');
  const [filterOpen, setFilterOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [priceRange, setPriceRange] = useState(2000);
  const [sortBy, setSortBy] = useState("featured");
  const [wishlist, setWishlist] = useState({});

  const products = [
    { id: 1, name: "UltraBook Pro X1", category: "Laptops", price: 1299, oldPrice: 1599, rating: 4.8, reviews: 234, image: "💻", badge: "Bestseller", inStock: true },
    { id: 2, name: "Quantum SmartWatch", category: "Wearables", price: 349, oldPrice: 499, rating: 4.6, reviews: 189, image: "⌚", badge: "New", inStock: true },
    { id: 3, name: "Aurora Wireless Earbuds", category: "Audio", price: 199, oldPrice: 299, rating: 4.7, reviews: 456, image: "🎧", badge: "Sale", inStock: true },
    { id: 4, name: "Spectrum Gaming Mouse", category: "Gaming", price: 79, oldPrice: 129, rating: 4.5, reviews: 567, image: "🖱️", badge: "", inStock: true },
    { id: 5, name: "Eclipse Mechanical KB", category: "Gaming", price: 159, oldPrice: 249, rating: 4.9, reviews: 345, image: "⌨️", badge: "Limited", inStock: false },
    { id: 6, name: "Nebula Tablet S8", category: "Tablets", price: 649, oldPrice: 799, rating: 4.7, reviews: 278, image: "📱", badge: "", inStock: true },
    { id: 7, name: "Vertex 4K Camera", category: "Cameras", price: 899, oldPrice: 1199, rating: 4.8, reviews: 167, image: "📷", badge: "Top Rated", inStock: true },
    { id: 8, name: "Titan Gaming Chair", category: "Gaming", price: 399, oldPrice: 599, rating: 4.6, reviews: 423, image: "🪑", badge: "", inStock: true }
  ];

  const categories = ["All", "Laptops", "Gaming", "Audio", "Wearables", "Tablets", "Cameras"];

  const toggleWishlist = (productId, e) => {
    e.stopPropagation();
    setWishlist(prev => ({ ...prev, [productId]: !prev[productId] }));
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} color="#fbbf24" size={14} />);
    }
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" color="#fbbf24" size={14} />);
    }
    return stars;
  };

  let filteredProducts = products
    .filter(p => activeCategory === "All" || p.category === activeCategory)
    .filter(p => p.price <= priceRange);

  if (sortBy === "priceLow") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === "priceHigh") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  } else if (sortBy === "rating") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.rating - a.rating);
  }

  const styles = {
    container: {
      fontFamily: "'Poppins', 'Segoe UI', sans-serif",
      backgroundColor: '#f5f7fb',
      minHeight: '100vh',
    },
    header: {
      background: 'linear-gradient(135deg, #1e1b4b, #312e81)',
      color: 'white',
      padding: '15px 5%',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
    },
    headerContent: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      maxWidth: '1400px',
      margin: '0 auto',
    },
    logo: {
      fontSize: '1.5rem',
      fontWeight: '800',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    },
    searchBar: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: 'rgba(255,255,255,0.15)',
      borderRadius: '50px',
      padding: '8px 20px',
      width: '300px',
    },
    searchInput: {
      background: 'transparent',
      border: 'none',
      color: 'white',
      outline: 'none',
      width: '100%',
      padding: '8px',
    },
    cartIcon: {
      position: 'relative',
      cursor: 'pointer',
    },
    cartCount: {
      position: 'absolute',
      top: '-8px',
      right: '-12px',
      backgroundColor: '#f59e0b',
      borderRadius: '50%',
      width: '20px',
      height: '20px',
      fontSize: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    heroBanner: {
      background: 'linear-gradient(135deg, #667eea, #764ba2)',
      margin: '30px 5%',
      borderRadius: '30px',
      padding: '50px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
    },
    heroText: {
      flex: 1,
      minWidth: '250px',
    },
    heroBadge: {
      display: 'inline-block',
      background: 'rgba(255,255,255,0.2)',
      padding: '5px 15px',
      borderRadius: '50px',
      fontSize: '0.8rem',
      marginBottom: '15px',
    },
    heroTitle: {
      fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
      marginBottom: '15px',
      color: 'white',
    },
    heroDiscount: {
      fontSize: '2rem',
      fontWeight: '800',
      marginBottom: '20px',
      color: 'white',
    },
    shopNowBtn: {
      background: 'white',
      color: '#667eea',
      border: 'none',
      padding: '12px 30px',
      borderRadius: '50px',
      fontWeight: '600',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
    },
    heroImage: {
      fontSize: '100px',
    },
    mainContent: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '0 5% 60px',
    },
    toolbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '15px',
      marginBottom: '30px',
      padding: '20px 0',
      borderBottom: '1px solid #e2e8f0',
    },
    filterBtn: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      background: 'white',
      border: '1px solid #e2e8f0',
      padding: '10px 20px',
      borderRadius: '12px',
      cursor: 'pointer',
      fontWeight: '500',
    },
    viewToggle: {
      display: 'flex',
      gap: '10px',
      background: 'white',
      padding: '5px',
      borderRadius: '12px',
      border: '1px solid #e2e8f0',
    },
    viewBtn: {
      padding: '8px 15px',
      borderRadius: '8px',
      cursor: 'pointer',
      border: 'none',
      background: 'transparent',
    },
    sortSelect: {
      padding: '10px 20px',
      borderRadius: '12px',
      border: '1px solid #e2e8f0',
      background: 'white',
      cursor: 'pointer',
    },
    productsGrid: {
      display: viewMode === 'grid' ? 'grid' : 'flex',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      flexDirection: viewMode === 'grid' ? 'unset' : 'column',
      gap: '25px',
    },
    productCard: (isHovered) => ({
      background: 'white',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: isHovered ? '0 25px 50px -12px rgba(0,0,0,0.25)' : '0 10px 30px -5px rgba(0,0,0,0.08)',
      transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
      transition: 'all 0.3s ease',
      position: 'relative',
      cursor: 'pointer',
      display: viewMode === 'grid' ? 'block' : 'flex',
      alignItems: viewMode === 'grid' ? 'stretch' : 'center',
      gap: viewMode === 'grid' ? 0 : '20px',
      padding: viewMode === 'grid' ? '0' : '20px',
    }),
    productBadge: {
      position: 'absolute',
      top: '15px',
      left: '15px',
      background: 'linear-gradient(135deg, #f59e0b, #ef4444)',
      color: 'white',
      padding: '4px 12px',
      borderRadius: '20px',
      fontSize: '0.7rem',
      fontWeight: '600',
      zIndex: 2,
    },
    wishlistBtn: {
      position: 'absolute',
      top: '15px',
      right: '15px',
      background: 'white',
      borderRadius: '50%',
      width: '35px',
      height: '35px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      zIndex: 2,
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    },
    productImage: {
      fontSize: viewMode === 'grid' ? '70px' : '50px',
      textAlign: 'center',
      padding: viewMode === 'grid' ? '40px 20px 20px' : '20px',
      background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)',
    },
    productInfo: {
      padding: viewMode === 'grid' ? '20px' : '0 20px 0 0',
      flex: viewMode === 'grid' ? 'unset' : 1,
    },
    productName: {
      fontSize: viewMode === 'grid' ? '1.1rem' : '1.2rem',
      fontWeight: '600',
      marginBottom: '8px',
    },
    productCategory: {
      fontSize: '0.75rem',
      color: '#94a3b8',
      marginBottom: '8px',
    },
    rating: {
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
      marginBottom: '10px',
    },
    priceContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      marginBottom: '10px',
    },
    currentPrice: {
      fontSize: viewMode === 'grid' ? '1.3rem' : '1.5rem',
      fontWeight: '700',
      color: '#6366f1',
    },
    oldPrice: {
      fontSize: '0.9rem',
      textDecoration: 'line-through',
      color: '#94a3b8',
    },
    stockStatus: {
      fontSize: '0.75rem',
      color: '#10b981',
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
      marginBottom: '15px',
    },
    addToCartBtn: {
      width: '100%',
      background: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
      border: 'none',
      padding: '12px',
      borderRadius: '12px',
      color: 'white',
      fontWeight: '600',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      transition: 'all 0.3s',
    },
    featuresSection: {
      background: 'white',
      padding: '50px 5%',
      marginTop: '60px',
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '30px',
      maxWidth: '1200px',
      margin: '0 auto',
      textAlign: 'center',
    },
    featureIcon: {
      fontSize: '2.5rem',
      color: '#6366f1',
      marginBottom: '15px',
    },
    newsletter: {
      background: 'linear-gradient(135deg, #1e1b4b, #312e81)',
      margin: '60px 5% 0',
      padding: '50px 40px',
      borderRadius: '30px',
      textAlign: 'center',
      color: 'white',
    },
    newsletterInput: {
      display: 'flex',
      justifyContent: 'center',
      gap: '15px',
      marginTop: '25px',
      flexWrap: 'wrap',
    },
    emailInput: {
      padding: '14px 25px',
      borderRadius: '50px',
      border: 'none',
      width: '300px',
      outline: 'none',
    },
    subscribeBtn: {
      background: '#f59e0b',
      border: 'none',
      padding: '14px 30px',
      borderRadius: '50px',
      color: 'white',
      fontWeight: '600',
      cursor: 'pointer',
    },
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
    copyright: {
      textAlign: 'center',
      paddingTop: '40px',
      marginTop: '40px',
      borderTop: '1px solid #1e293b',
    },
    filterSidebar: (isOpen) => ({
      position: 'fixed',
      top: 0,
      right: isOpen ? 0 : '-400px',
      width: '350px',
      height: '100vh',
      backgroundColor: 'white',
      zIndex: 2000,
      padding: '30px',
      boxShadow: '-5px 0 30px rgba(0,0,0,0.1)',
      transition: 'right 0.3s ease',
      overflowY: 'auto',
    }),
    filterHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '30px',
      paddingBottom: '15px',
      borderBottom: '1px solid #e2e8f0',
    },
    filterSection: {
      marginBottom: '25px',
    },
    filterTitle: {
      fontWeight: '600',
      marginBottom: '15px',
    },
    priceInput: {
      width: '100%',
      marginTop: '10px',
    },
    categoryList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
    },
    categoryItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      cursor: 'pointer',
      padding: '5px 0',
    },
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.logo}>
            <FaGem color="#f59e0b" /> TechStore
          </div>
          <div style={styles.searchBar}>
            <FaSearch style={{ opacity: 0.7 }} />
            <input type="text" placeholder="Search products..." style={styles.searchInput} />
          </div>
          <div style={styles.cartIcon}>
            <FaShoppingCart size={22} />
            <span style={styles.cartCount}>3</span>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <div style={styles.heroBanner}>
        <div style={styles.heroText}>
          <div style={styles.heroBadge}>🔥 Limited Time Offer</div>
          <h1 style={styles.heroTitle}>Summer Mega Sale</h1>
          <div style={styles.heroDiscount}>Up to 70% OFF</div>
          <button style={styles.shopNowBtn}>
            Shop Now <FaArrowRight />
          </button>
        </div>
        <div style={styles.heroImage}>🎉</div>
      </div>

      {/* Main Content */}
      <div style={styles.mainContent}>
        {/* Toolbar */}
        <div style={styles.toolbar}>
          <button style={styles.filterBtn} onClick={() => setFilterOpen(true)}>
            <FaFilter /> Filters
          </button>
          <div style={styles.viewToggle}>
            <button 
              style={{ ...styles.viewBtn, background: viewMode === 'grid' ? '#6366f1' : 'transparent', color: viewMode === 'grid' ? 'white' : '#333' }} 
              onClick={() => setViewMode('grid')}
            >
              <FaThLarge />
            </button>
            <button 
              style={{ ...styles.viewBtn, background: viewMode === 'list' ? '#6366f1' : 'transparent', color: viewMode === 'list' ? 'white' : '#333' }} 
              onClick={() => setViewMode('list')}
            >
              <FaList />
            </button>
          </div>
          <select style={styles.sortSelect} value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="featured">Featured</option>
            <option value="priceLow">Price: Low to High</option>
            <option value="priceHigh">Price: High to Low</option>
            <option value="rating">Best Rating</option>
          </select>
        </div>

        {/* Products Grid */}
        <div style={styles.productsGrid}>
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              style={styles.productCard(hoveredProduct === product.id)}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {product.badge && <span style={styles.productBadge}>{product.badge}</span>}
              <div style={styles.wishlistBtn} onClick={(e) => toggleWishlist(product.id, e)}>
                {wishlist[product.id] ? <FaHeart color="#ef4444" /> : <FaRegHeart />}
              </div>
              <div style={styles.productImage}>{product.image}</div>
              <div style={styles.productInfo}>
                <h3 style={styles.productName}>{product.name}</h3>
                <p style={styles.productCategory}>{product.category}</p>
                <div style={styles.rating}>
                  {renderStars(product.rating)} <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>({product.reviews})</span>
                </div>
                <div style={styles.priceContainer}>
                  <span style={styles.currentPrice}>${product.price}</span>
                  {product.oldPrice && <span style={styles.oldPrice}>${product.oldPrice}</span>}
                </div>
                <div style={styles.stockStatus}>
                  <FaCheckCircle size={12} /> {product.inStock ? 'In Stock' : 'Out of Stock'}
                </div>
                <button style={styles.addToCartBtn}>
                  <FaShoppingCart /> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div style={styles.featuresSection}>
        <div style={styles.featuresGrid}>
          <div><div style={styles.featureIcon}><FaTruck /></div><h4>Free Shipping</h4><p>On orders over $50</p></div>
          <div><div style={styles.featureIcon}><FaUndo /></div><h4>30-Day Returns</h4><p>Hassle-free returns</p></div>
          <div><div style={styles.featureIcon}><FaShieldAlt /></div><h4>2-Year Warranty</h4><p>Full protection plan</p></div>
          <div><div style={styles.featureIcon}><FaMedal /></div><h4>Premium Quality</h4><p>Best in class products</p></div>
        </div>
      </div>

      {/* Newsletter */}
      <div style={styles.newsletter}>
        <h2>Subscribe to Our Newsletter</h2>
        <p>Get exclusive deals and updates directly to your inbox</p>
        <div style={styles.newsletterInput}>
          <input type="email" placeholder="Enter your email" style={styles.emailInput} />
          <button style={styles.subscribeBtn}>Subscribe</button>
        </div>
      </div>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerGrid}>
          <div>
            <h3 style={styles.footerTitle}><FaGem style={{ marginRight: '10px', color: '#f59e0b' }} />TechStore</h3>
            <p>Your one-stop shop for premium electronics and gadgets.</p>
          </div>
          <div>
            <h4 style={styles.footerTitle}>Quick Links</h4>
            <div style={styles.footerLinks}>
              <a href="#" style={styles.footerLink}>About Us</a>
              <a href="#" style={styles.footerLink}>Contact</a>
              <a href="#" style={styles.footerLink}>FAQs</a>
            </div>
          </div>
          <div>
            <h4 style={styles.footerTitle}>Contact</h4>
            <div style={styles.footerLinks}>
              <div><FaEnvelope style={{ marginRight: '10px' }} /> manojmchintu9353@gmail.com</div>
              <div><FaPhone style={{ marginRight: '10px' }} /> +1 (555) 123-4567</div>
              <div><FaMapMarkerAlt style={{ marginRight: '10px' }} /> 123 Tech St, Silicon Valley</div>
            </div>
          </div>
        </div>
        <div style={styles.copyright}>
          <p>© 2024 TechStore. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </footer>

      {/* Filter Sidebar */}
      <div style={styles.filterSidebar(filterOpen)}>
        <div style={styles.filterHeader}>
          <h3>Filters</h3>
          <button onClick={() => setFilterOpen(false)} style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer' }}>✕</button>
        </div>
        <div style={styles.filterSection}>
          <h4 style={styles.filterTitle}>Categories</h4>
          <div style={styles.categoryList}>
            {categories.map(cat => (
              <div key={cat} style={styles.categoryItem} onClick={() => setActiveCategory(cat)}>
                <div style={{ width: '18px', height: '18px', borderRadius: '4px', border: '2px solid #6366f1', background: activeCategory === cat ? '#6366f1' : 'white' }} />
                <span>{cat}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={styles.filterSection}>
          <h4 style={styles.filterTitle}>Price Range: Up to ${priceRange}</h4>
          <input type="range" min="0" max="2000" value={priceRange} onChange={(e) => setPriceRange(Number(e.target.value))} style={styles.priceInput} />
        </div>
      </div>
    </div>
  );
};

export default Product;
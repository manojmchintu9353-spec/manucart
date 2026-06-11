import { Link } from "react-router-dom";

function Header() {
  return (
    <header
      style={{
        background: "#333",
        padding: "15px",
      }}
    >
      <nav
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <Link
          to="/"
          style={{ color: "blue", textDecoration: "none" }}
        >
          Home
        </Link>

        <Link
          to="/blog"
          style={{ color: "pink", textDecoration: "none" }}
        >
          Blog
        </Link>
        <Link
          to="/product"
          style={{ color: "gold", textDecoration: "none" }}
        >
          Product
        </Link>
        <Link
          to="/product"
          style={{ color: "orange", textDecoration: "none" }}
        >
          Product
        </Link>
        <Link
          to="/Login"
          style={{ color: "yellow", textDecoration: "none" }}
        >
          Login
        </Link>
        <Link
          to="/HelpLine"
          style={{ color: "green", textDecoration: "none" }}
        >
          HelpLine
        </Link>
        <Link
          to="/Profile"
          style={{ color: "green", textDecoration: "none" }}
        >
          Profile
        </Link>
      
      
      </nav>
    </header>
  );
}

export default Header;
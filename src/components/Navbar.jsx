import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      
      <div className="logo">
        <img src="/logo.png" alt="logo" />
      </div>

      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">About</a>
      </div>

    </div>
  );
}

export default Navbar;
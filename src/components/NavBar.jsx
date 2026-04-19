import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/analytics" className="brand brand-link">
          <span className="logo">⚡</span>
          <h1 className="title">TrackSpark</h1>
        </Link>
        <nav className="nav-links">
          <NavLink to="/applications" className={({ isActive }) => `nav-link ${isActive ? "tab-active" : ""}`}>
            Applications
          </NavLink>
          <NavLink to="/analytics" className={({ isActive }) => `nav-link ${isActive ? "tab-active" : ""}`}>
            Analytics
          </NavLink>
        </nav>
        <Link to="/applications/new" className="btn-primary">
          ✚ Add Application
        </Link>
      </div>
    </header>
  );
}

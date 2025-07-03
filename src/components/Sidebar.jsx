
import { Link } from "react-router-dom";

const Sidebar = () => (
  <div style={{ width: 200, background: "#111", height: "100vh", color: "#fff", padding: 20 }}>
    <h2>🎥 Movie Explorer</h2>
    <nav>
      <Link to="/" style={{ color: "#fff", display: "block", margin: "1rem 0" }}>Home</Link>
      <Link to="/my-list" style={{ color: "#fff", display: "block", margin: "1rem 0" }}>My List</Link>
    </nav>
  </div>
);

export default Sidebar;

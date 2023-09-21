import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <h1>Alyconr React Blog </h1>
    <div className="links">
      <Link to="/">Home</Link>
      <Link to="/create">New Blog</Link>
    </div>
  </nav>
);

export default Navbar;

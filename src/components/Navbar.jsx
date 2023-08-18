import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header>
      <h1>Bookstore</h1>
      <nav>
        <ul>
          <li><NavLink to="/" className="navs">Books</NavLink></li>
          <li><NavLink to="/categories" className="navs">Categories</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;

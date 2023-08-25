import { NavLink } from 'react-router-dom';
import user from '../images/user.png';

function Navbar() {
  return (
    <header>
      <nav>
        <h1>Bookstore CMS</h1>
        <ul>
          <li><NavLink to="/" className="navs">BOOKS</NavLink></li>
          <li><NavLink to="/categories" className="navs cat">CATEGORIES</NavLink></li>
        </ul>
      </nav>
      <img src={user} alt="Profile" className="user" />
    </header>
  );
}

export default Navbar;

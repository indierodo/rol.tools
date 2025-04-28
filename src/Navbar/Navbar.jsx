import { Link } from 'react-router-dom';
import './Navbar.scss';
import { useState } from 'react';
import hamburgerIcon from '../img/hamburger.png';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className='logo'>
        <Link to="/" className="navbar-brand">rol.tools</Link>
        <div onClick={toggleMenu} className='hamburger-button'><img src={hamburgerIcon} alt='menu'></img></div>
      </div>
      <div className={isOpen ? 'links open' : 'links'}>
        <ul>
          <li>
            <Link to="/">Tirar dados!</Link>
          </li>
          <li>
            <Link to="/npc">NPCs</Link>
          </li>
          <li>
            <Link to="/currency-converter">Convertidor de oro</Link>
          </li>
          <li>
            <Link to="/distance-converter">Calculadora de velocidad</Link>
          </li>
          <li>
            <Link to="/rules">Reglas</Link>
          </li>
        </ul>
      </div>
    </nav>

  );
}

export default Navbar;
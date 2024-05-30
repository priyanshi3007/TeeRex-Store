import React from 'react';
import { Link } from 'react-router-dom';
import { ImCart } from "react-icons/im";
import { useProductContext } from '../context/ProductContext';
import"../Styles/styles.css"
import Capturee from '../assets/Capturee.png';

const NavBar = () => {
  const { cart } = useProductContext();

  return (
    <div id="navbar">
    <div>
      <Link to="/">
    <img src={Capturee} alt="." style={{ height: '50px', marginRight: '10px' }} />

      </Link>


    </div>
    <div>
      <Link to="/cart">
        <ImCart style={{ fontSize: '35px', cursor: 'pointer'  , margin: '8px 26px 0px 33px'}} />
        {cart.length > 0 && <span className="cartCount">{cart.length}</span>}
      </Link>
    </div>
  </div>
  );
};

export default NavBar;
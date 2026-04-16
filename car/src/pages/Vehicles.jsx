import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../components/CartContext';
import Image  from './image/no.png';
import Image1 from './image/1.jpg';
import Image2 from './image/2.jpg';
import Image3 from './image/3.jpg';
import Image4 from './image/4.jpg';
import Image5 from './image/5.jpg';
import Image6 from './image/6.jpg';
import Image7 from './image/ster.jpg';
import Image8 from './image/nav.jpg';
import Image9 from './image/wheel.jpg';
import Image10 from './image/seat.jpg';
import Styles from './styles/Vehicle.module.css';
import Support from '../components/Support';

const vehicles = [
  { name: '2026 Vroomy Super Duty',   price: '$30,350', rawPrice: 30350, img: Image1 },
  { name: '2026 Vroomy V-150',        price: '$30,000', rawPrice: 30000, img: Image2 },
  { name: '2026 Vroomy Ranger',       price: '$30,500', rawPrice: 30500, img: Image3 },
  { name: '2026 Vroomy Escape',       price: '$40,350', rawPrice: 40350, img: Image4 },
  { name: '2026 Vroomy Bronco Sport', price: '$30,950', rawPrice: 30950, img: Image5 },
  { name: '2026 Vroomy MACH-E',       price: '$40,000', rawPrice: 40000, img: Image6 },
];

function Vehicles() {
  const { addToCart, totalItems } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (vehicle) => {
    addToCart(vehicle);
    navigate('/shop');
  };

  return (
    <>
      <div className={Styles.wrapper}>

        <div className={Styles.cartFloating}>
          <Link to="/shop" className={Styles.cartBadgeLink}>
            <i className="fa-solid fa-cart-arrow-down"></i>
            {totalItems > 0 && <span className={Styles.badge}>{totalItems}</span>}
          </Link>
        </div>

        <div className={Styles.cardFirst} id="section-1">
          <div className={Styles.explore}>
            <h1>Anything but Business as Usual</h1>
            <p>Learn how we can be a productive accelerator for your business.</p>
            <Link to="/" className={Styles.viewLink}>View Details</Link>
            <button
              type="button"
              className={Styles.exploreBtn}
              onClick={() => document.getElementById('section-2').scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Vroomy
            </button>
          </div>
          <div className={Styles.photo}>
            <img src={Image} alt="Vroomy vehicle" />
          </div>
        </div>

        <div className={Styles.cardSecond} id="section-2">
          <h2>All Vehicles</h2>
          <div className={Styles.carGrid}>
            {vehicles.map((vehicle, index) => (
              <div className={Styles.car} key={index}>
                <div className={Styles.carIcons}>
                  <i
                    className="fa-solid fa-cart-arrow-down"
                    title="Add to cart"
                    onClick={() => handleAddToCart(vehicle)}
                  ></i>
                  <i className="fa-regular fa-heart"></i>
                </div>
                <img src={vehicle.img} alt={vehicle.name} />
                <h4>{vehicle.name}</h4>
                <p>MSRP starting at {vehicle.price}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={Styles.cardthird}>
          <div className={Styles.describe}>
          <span className={Styles.tag}>PERFORMANCE & CAPABILITY</span>
          <h2>All-out power for every moment.</h2>
          <p>Powerful, precise and prepared-RAV4 Plug-in 
            Hybrid has trims that can handle city streets or 
            beaten paths with agility and strength.</p>
          </div>

          <div className={Styles.pic}>
           <img src={Image7}/>
           <img src={Image8}/>
           <img src={Image9}/>
           <img src={Image10}/>
          </div>
        </div>

      </div>

      <Support/>
    </>
  );
}

export default Vehicles;

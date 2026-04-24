import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../components/CartContext';
import Photo from './image/o1.png';
import Photo2 from './image/o3.png';
import Image  from './image/no.png';
import Image1 from './image/1.jpg';
import Image2 from './image/2.png';
import Image3 from './image/3.png';
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
  { name: '2026 Vroomy Super Duty',   price: '$30,350', rawPrice: 30350, color: "#666" , img: Image1 },
  { name: '2026 Vroomy V-150',        price: '$30,000', rawPrice: 30000, color: "#1a1a1a", img: Image2 },
  { name: '2026 Vroomy Ranger',       price: '$30,500', rawPrice: 30500, color: "#f0f0f0", img: Image3 },
  { name: '2026 Vroomy Escape',       price: '$40,350', rawPrice: 40350, color: "#e63312", img: Image4 },
  { name: '2026 Vroomy Bronco Sport', price: '$30,950', rawPrice: 30950, color: "#1a3a72", img: Image5 },
  { name: '2026 Vroomy MACH-E',       price: '$40,000', rawPrice: 40000, color: "#e85500", img: Image6 },
];

const videos = [
  { src: "/videos/in5.mp4", title: "Navigation", desc: "Smart navigation that learns your routes and guides you there without the guesswork."},
  { src: "/videos/in6.mp4", title: "Wheels", desc: "Performance wheels built to grip the road and turn heads at every angle."},
  { src: "/videos/in2.mp4", title: "Clutch", desc: "Smooth, responsive clutch engagement that puts total power delivery in your hands."},
  { src: "/videos/in3.mp4", title: "Seating", desc: "Contoured seats crafted for comfort on every drive, short or long."},
  { src: "/videos/in4.mp4", title: "Panoramic Roof", desc: "A wide glass ceiling that floods the cabin with light and opens the sky above you."},
  { src: "/videos/in1.mp4", title: "Steering", desc: "Precision-engineered steering that responds to every curve with effortless control."}
];
function Vehicles() {
  const { addToCart, totalItems } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (vehicle) => {
    addToCart(vehicle);
    navigate('/shop');
  };

  const [ selected, setSelected ] = useState(0);
  const videoRefs = useRef([]);


  return (
    <>
      <div className={Styles.wrapper}>

        <div className={Styles.cardFirst} id="section-1">
          <div className={Styles.explore}>
            <h1>Anything but Business as Usual</h1>
            <p>Learn how we can be a productive accelerator for your business.</p>
            <button className={Styles.viewLink} 
            onClick={() => document.getElementById('section-3').scrollIntoView({ behavior: 'smooth'})}
            >View Details</button>
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
                  <i className="fa-regular fa-heart" title="favourite"></i>
                </div>
                <img src={vehicle.img} alt={vehicle.name} />
                <h4>{vehicle.name}</h4>
                <p>MSRP starting at {vehicle.price}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={Styles.cardthird} id="section-3">
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

      <div className={Styles.picker}>
        <h2>Vroomy Colours Option</h2>
        <p>Vroomy is available in the following colours in Nepal 🚗.</p>
        <div className={Styles.select}>
        <img className={Styles.imgPick}
        src={vehicles[selected].img}
        alt={vehicles[selected].name}
        />
        <div className={Styles.btncolor}>
          {vehicles.map((car,i) => (
            <button key={i} className={`${Styles.color} ${i === selected ? Styles.active : ""}`} 
            onClick={() => setSelected(i)} 
            title={car.name}
            style={{ backgroundColor: car.color }}
            />
          ))}
        </div>
        <p>{vehicles[selected].name}</p>
        </div>
      </div>

      <div className={Styles.vidDes}>
        <div className={Styles.vidCard}>
          <h2>Car in action</h2>
          <div className={Styles.vidGrid}>
          {videos.map((vid,i) =>(
          <div className={Styles.track} key={i}>
            <video src={vid.src} autoPlay muted loop playsInline/>
            <div className={Styles.info}>
              <h3>{vid.title}</h3>
              <p>{vid.desc}</p>
            </div>
          </div>
           ))}
        </div>
      </div>
      </div>

      <Support/>
    </>
  );
}

export default Vehicles;

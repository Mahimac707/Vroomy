import React from 'react'
import { Link } from 'react-router-dom';
import Image from './image/log.jpg';
import Image1 from './image/build.jpg';
import Image2 from './image/touch.jpg';
import Image3 from './image/radio.jpg';
import Image4 from './image/seat.jpg';
import Image5 from './image/engine.jpg';
import Image6 from './image/nav.jpg';
import Styles from './styles/Home.module.css';
import Support from '../components/Support';

function Home() {
  return (
    <>
      <div className={Styles.first}>
        <div className={Styles.heroContent}>
          <h3>VROOMY RESOURCES</h3>
          <h1>Amp Up Your Ownership</h1>
          <p>Access to all the tools and information for your Vroomy — in one place</p>
          <div className={Styles.btnGroup}>
            <Link to="/sign"><button className={Styles.btnPrimary}>Sign in</button></Link>
            <Link to="/sign"><button className={Styles.btnSecondary}>Join us</button></Link>
          </div>
        </div>
      </div>


      <div className={Styles.second}>
  <div className={Styles.sectionHeader}>
    <span className={Styles.tag}>Technology</span>
    <h2>Tech that empowers your every move</h2>
  </div>

  <div className={Styles.carouselWrapper}>
    <button className={Styles.arrowBtn} onClick={() => {
      document.getElementById('carousel').scrollBy({ left: -300, behavior: 'smooth' });
    }}>&#8592;</button>

    <div className={Styles.cardGrid} id="carousel">
      <div className={Styles.card}>
        <div className={Styles.cardIcon}>
          <img src={Image1}/>
        </div>
        <h5>⚡ Digital Gauge Cluster</h5>
        <p>Fully customizable 12.33-in digital gauge cluster that keeps performance data front and center.</p>
      </div>
      <div className={Styles.card}>
        <div className={Styles.cardIcon}>
        <img src={Image2}/>
        </div>
        <h5>📱 Multimedia Touchscreen</h5>
        <p>Seamlessly extend your experience with an intuitive touchscreen interface.</p>
      </div>
      <div className={Styles.card}>
        <div className={Styles.cardIcon}>
        <img src={Image3}/>
        </div>
        <h5>🔗 Wireless Connectivity</h5>
        <p>Stay connected on the go with seamless wireless integration for your devices.</p>
      </div>
      <div className={Styles.card}>
        <div className={Styles.cardIcon}>
        <img src={Image4}/>
        </div>
        <h5>🛡️ Safety Suite</h5>
        <p>Advanced driver-assist features that keep you and your passengers protected.</p>
      </div>
      <div className={Styles.card}>
        <div className={Styles.cardIcon}>
        <img src={Image5}/>
        </div>
        <h5>🔋 Battery Management</h5>
        <p>Smart energy monitoring to maximize range and performance on every trip.</p>
      </div>
      <div className={Styles.card}>
        <div className={Styles.cardIcon}>
        <img src={Image6}/>
        </div>
        <h5>🗺️ Live Navigation</h5>
        <p>Real-time maps and traffic updates built directly into your dashboard.</p>
      </div>
    </div>

    <button className={Styles.arrowBtn} onClick={() => {
      document.getElementById('carousel').scrollBy({ left: 300, behavior: 'smooth' });
    }}>&#8594;</button>
  </div>

  <div className={Styles.third}>
    <div className={Styles.feature}>
      <span className={Styles.key}>KEY FEATURES</span>
      <h3>What we provide</h3>
        <div className={Styles.list}>

        <div className={Styles.item}>
          <div className={Styles.icon}>
        <i className="fa-solid fa-globe"></i>
        </div>
        <div><p className={Styles.itemName}>All-Wheel Drive</p></div>
        </div>

        <div className={Styles.item}>
          <div className={Styles.icon}>
          <i className="fa-solid fa-helmet-safety"></i>
        </div>
        <div><p className={Styles.itemName}>Advanced Safety Suite</p></div>
        </div>

        <div className={Styles.item}>
          <div className={Styles.icon}>
          <i className="fa-solid fa-box"></i>
        </div>
        <div><p className={Styles.itemName}>Panoramic Sunroof</p></div>
        </div>

        <div className={Styles.item}>
          <div className={Styles.icon}>
          <i className="fa-solid fa-tv"></i>
        </div>
        <div><p className={Styles.itemName}></p>Touchscreen Infotainment</div>
        </div>

        <div className={Styles.item}>
          <div className={Styles.icon}>
          <i className="fa-solid fa-gas-pump"></i>
        </div>
        <div><p className={Styles.itemName}>Fuel Efficient</p></div>
        </div>

        <div className={Styles.item}>
          <div className={Styles.icon}>
          <i className="fa-solid fa-bolt"></i>
        </div>
        <div><p className={Styles.itemName}>Turbocharged Engine</p></div>
        </div>

    </div>
  </div>
</div>

<div className={Styles.fourth}>
  <div className={Styles.trust}>
    <div className={Styles.trustFirst}>
      <h1>TRUST & SECURITY</h1>
      <p>We believe trust is earned, not given.
       That's why every car we offer goes through a
       thorough inspection process before it reaches you.
       From advanced driver-assistance systems to reinforced
       body structures, our vehicles are engineered to protect
       you and your loved ones on every journey.</p>
    </div>
    <div className={Styles.trustSecond}>
      <img src={Image}/> 
    </div>
  </div>
</div>
</div>

<Support/>

    </>
  )
}

export default Home
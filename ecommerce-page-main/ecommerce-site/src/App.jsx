import Images from "./components/Images";
import Cart from "./components/Cart";
import classes from './modules/App.module.css';
// import Lightbox from "./components/LightBox.jsx";
import { useState } from 'react';

function App() {

  // const [showLightbox, setShowLightbox] = useState(false);


  return (
    <> 
    {/* {showLightbox && (
        <Lightbox/>
      )}
      <img src={Image} onClick={() => setShowLightbox(true)}/> */}

    <nav className={classes['navbar-component']}>
        <h1 className={classes['sneakers']}>sneakers</h1>
        <div className={classes['nav-buttons']}>
          <button className={classes['nav-button']}>Collections</button>
          <button className={classes['nav-button']}>Man</button>
          <button className={classes['nav-button']}>Women</button>
          <button className={classes['nav-button']}>About</button>
          <button className={classes['nav-button']}>Contact</button>
        </div>
      </nav>
      <div className={classes['line']}></div>
        <div className={classes['main-components']}>
          <div className={classes['slider-component']}><Images /></div> 
          <div className={classes['price-component']}> 
            <h3 className={classes['sneaker-company']}>SNEAKER COMPANY</h3>
            <h1 className={classes['fall-limited']}>Fall Limited Edition Sneakers.</h1>
            <p className={classes['paraghraph']}>These low-profile sneakers are your perfect casual wear companion. Featuring a 
             durable rubber outer sole, they’ll withstand everything the weather can offer.
           </p> <br />
           <h1 className={classes['price']}>$125.00</h1>
           <div className={classes['price-calculator']}></div>
           
          </div>
           <Cart />  
        </div>
        
      
    </>
  );
}

export default App;

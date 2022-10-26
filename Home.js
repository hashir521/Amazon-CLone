import React from 'react'
import './Home.css'
import Product from './Product'
const Home = () => {
  return (
    <div>
     
    <div className='home'>
    
    <div className="home__container">
      <img className='home__image' 
      src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
                            
                             {/* products */}
      <div className="home__row">
        {/* product */}
        <Product 
          id = "123"
          title='Amazfit GTS 2 Mini Smart Watch GPS Fitness Tracker for Men Women, Alexa Built-in, 14 Days Battery Life, 70+ Sports Modes'
          price={152.99}
          image = "https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          rating={5}
        />

        <Product 
          id="321"
          title='EDUPLINK Portable Bluetooth Speaker Waterproof IPX7 Wireless Speaker with 20W Louder Speakers Switch Between Bluetooth Pairing'
          price={12}
          image = "https://m.media-amazon.com/images/I/61hqjITqd5L._AC_SX569_.jpg"
          rating={4}
        />
       
      </div>
      <div className="home__row">
      <Product 
          id = "10"
          title='Amazon Basics 6-Piece Nonstick, Carbon Steel Oven Bakeware Baking Set'
          price={29.99}
          image = "https://m.media-amazon.com/images/I/91hBA6hLfuL._AC_SX569_.jpg"
          rating={5}
        />

        <Product 
          id="11"
          title='Manhattan Toy Winkel Rattle & Sensory Teether Toy'
          price={3652}
          image = "https://m.media-amazon.com/images/I/71tjzN4QkCL._AC_SX522_.jpg"
          rating={5}
        />
         <Product 
          id="12"
          title='Drinking Glasses 6pc Set - Can Shaped Glass Cups, 16oz Beer Glasses, Tumbler Cup, Cocktail Glasses'
          price={563}
          image = "https://m.media-amazon.com/images/I/71zXDfia8WL._AC_SX569_.jpg"
          rating={4}
        />
      </div>
      <div className="home__row">
        
      <Product 
          id="321"
          title='Melissa & Doug Shape Sorting Cube - Classic Wooden Toy With 12 Shapes'
          price={400}
          image = "https://m.media-amazon.com/images/I/71aYQI5JwBL._AC_SX522_.jpg"
          rating={3}
        />
        
      </div>
    </div>
        
    </div>
    </div>
  )
}

export default Home
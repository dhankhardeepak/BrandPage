import React from 'react'

const Banner = () => {
  return (
    <div className='Hero flex'>
        <div className='heroContent'>
            <h1>YOUR FEET DESERVES THE<br /> BEST</h1>
            <p>No matter what he’s up against, Jayson always finds a way. A way to the basket. A way to his dreams. A way to make the game his own. With a lightweight and efficient design, his next signature shoe keeps this energy up for your next move.</p>
            <div className='heroButton'>
                <button>Shop Now</button>
                <button>Category</button>
            </div>
            <div className='shopping'>
                <p>Also Available on Amazon and Flipkart</p>
            </div>
        </div>
        <div className='HeroImage'>
            <img src="../../public/assets/HeroImage.jpg" alt="Hero Image"/>
        </div>
    </div>
  )
}


export default Banner;

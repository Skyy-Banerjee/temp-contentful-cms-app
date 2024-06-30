import React from 'react'
import heroImg from './assets/hero.svg'

function Hero() {
  return (
    <section className='hero'>
        <div className="hero-center">
            <div className="hero-title">
                <h1>Contentful CMS</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt similique vero provident eligendi, ea numquam labore itaque, nihil dolore exercitationem, asperiores repudiandae. Quae suscipit et iste dolore aperiam laboriosam reiciendis totam sit sunt doloribus! A?
                </p>
            </div>
            <div className="img-container">
                <img src={heroImg} alt="hero-img : woman and the browser" className='img'/>
            </div>
        </div>
    </section>
  )
}

export default Hero

import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'


const Hero = () => {
  return (
    <div className="hero">
        <div className="hero-left">
<h2>New Arrivals Only</h2>
<div>
    <div className='hero-hand-icon'>
        <p>
            New 
        </p>
        <img src={hand_icon} alt='' />

    </div>
</div>
        </div>
        <div className="hero-right">

        </div>
        </div>
  )
}
export default Hero
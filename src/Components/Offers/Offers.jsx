import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'
import { Link } from 'react-router-dom';


const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>Only On Best Sellers Products</p>
        <Link to='/womens'>
        <button>Check now</button>
        </Link>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
}
export default Offers
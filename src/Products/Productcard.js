import React from 'react'
// import '../styles/main.css'
import { Link } from 'react-router-dom'
import './productcard.css'

const Productcard = (props) => {
    return (
        <div>
 <div >
  <div className='main'>
  <Link className="link1" to={`/List/${props.product.id}`}>
    <div>
      <div className="category">{props.product.category}</div>
    
     <img className="image" src={props.product.image}/>
     <Link className="link2"to="#" >{props.product.title}</Link>
     <div>Cost {props.product.price}</div>
     <button className="buttons">Add to cart</button>
    </div></Link>
  </div>
</div>
      </div>
    )
}

export default Productcard
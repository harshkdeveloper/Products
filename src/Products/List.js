import React, { Component, useState,useEffect } from 'react'
import axios from 'axios'
import  { useParams,Link } from 'react-router-dom'
import './list.css'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
function List(){
	const {id}=useParams()
	const url=`https://fakestoreapi.com/products/${id}`
	const [product,setProduct]=useState(null)

	let content=null;
	useEffect(()=>{
axios.get(url)
.then(response=>{
	setProduct(response.data)
	
})
	},[url])
	console.log(product)
	if(product){
		content =
		<div>
			
	{/* <p>{product.title}</p> */}
	<div >
  <div>
    
    <div className="mobile">
     <Zoom> <img src ={product.image} className="image1"/> </Zoom>
      <div className="heading">{product.title}</div>
      <p className="tag">{product.rating.rate}✭     {product.rating.count} Comments</p>
	  <p className="tag1">Rs {product.price}</p>
	  <div style={{textAlign:'center',marginLeft:'360px',fontSize:'15px' }}>
	  <p>Available offers Bank Offer10% off on EMI Transactions with SBI Credit CardsT&C</p>
<p style={{marginRight:'60px'}}>Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit CardT&C</p>
<p style={{marginLeft:'216px' ,fontSize:'15px'}}>Bank Offer10% Off on Bank of Baroda Mastercard debit card first time transaction,Terms and Condition applyT&C</p>
<p style={{marginRight:'20px'}}>Combo OfferBuy 2 items save 5%;Buy 3 or 
more save 10%See all productsT&C</p></div>
<div style={{textAlign:'center' ,color:'green' ,marginRight:'6px'}}> Category: {product.category}</div>
<p className="description"> Description :{product.description}</p>
	<button className="buttons1">Add to cart</button>  
	<button className="buttons2">Buy Now</button>
    </div>
  </div>
</div>

	</div>
}
return(
<div>
	{/* <h1>product</h1> */}
	{/* <h1>{product.title}</h1> */}
	{content}
</div>
)
}

export default List
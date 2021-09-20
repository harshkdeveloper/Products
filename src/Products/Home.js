import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from './Loader'
import Productcard from './Productcard'
export const Home = () => {
   
	const url=`https://fakestoreapi.com/products/`
	const [products,setProducts]=useState({
        loading:false,
        data:null,
        error:false
    })
useEffect(()=>{
    setProducts({
        loading:true,
        data:null,
        error:false
    })
    axios.get(url)
    .then(response=>{
        setProducts({
            loading:false,
            data:response.data,
            error:false
        })
    })
    .catch(()=>{
        setProducts({
            loading:false,
            data:null,
            error:false
        })
    })
}, [url])
let content=null
    if(products.error){
        content= <p>
            There was an error please refresh the page
        </p>
    }
    if(products.loading){
        content=<Loader></Loader>
    }
    console.log(products.data)
    if(products.data){
        content=
        products.data.map((product,key)=>
<div>
    <Productcard product={product}/>
    </div>
        )
        
    }
    
    return (
        <div>
            {/* <h1>hye</h1> */}
            {content}
        </div>
    )
}
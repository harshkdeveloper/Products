import { useEffect, useState } from "react";
// import "./styles.css";
import axios from 'axios'

export default function Products() {
  const[posts,setPosts]=useState([]);

  useEffect(()=>{
axios.get('https://fakestoreapi.com/products')
.then(res=>{
  console.log(res)
  setPosts(res.data)
})
.catch(err=>{
  console.log(err)
  
},[])
  })
  return (
    <div className="App">
    
      <ul>
      {
        posts.map(post=>
          <li key={post.id}>{post.name}</li>)
        }
         </ul> 
      
    
    </div>
  );
}

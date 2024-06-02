import React from 'react';
import { Link } from 'react-router-dom';
import './All.css'
import { useState } from 'react';
import { useEffect } from 'react';



const All = () => {
  const [all_product, setAll_Product] = useState([]);
  
  useEffect(()=>{
    fetch('http://localhost:4000/allproducts')
    .then((response)=>response.json())
    .then((data)=>setAll_Product(data))
  },[])
    return (
      
        <div className="product-container">
          {all_product.map(product => (
            <div key={product.id} className="product-card">
              <Link to={`/product/${product.id}`} className='product-link'>
                <img src={product.image} alt={product.name} className="product-image" />
                <h3 className="product-name">{product.name}</h3>
              </Link>
              <p className="product-price">Price: ₹{product.price}</p>
            </div>
          ))}
        </div>
  );
}

export default All;

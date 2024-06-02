import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; 
import all_product from '../images/all_product'; 
import './AllCategory.css'

const AllCategory = ({ category, category_2, category_3 }) => {
  
  let filteredProducts = [];

  if (category === "All") {
    filteredProducts = all_product;
  } else if (category) {
    filteredProducts = all_product.filter(product => product.category === category);
  } else if (category_2) {
    filteredProducts = all_product.filter(product => product.category_2 === category_2);
  } else if (category_3) {
    filteredProducts = all_product.filter(product => product.category_3 === category_3);
  }

  

  return (
    <div className="category-container"> 
        {filteredProducts.map(product => (
          <div key={product.id} className="category-card"> 
          <Link to={`/product/${product.id}`} className='product-link'>
            <img src={product.image} alt={product.name} className="category-image" /> 
            <h3 className="category-name">{product.name}</h3> 
            </Link>
            <p className="category-price">Price: ₹{product.price}</p> 
          </div>
        ))}
    </div>
  );
};

// Add prop-type validation
AllCategory.propTypes = {
  category: PropTypes.string, 
  category_2: PropTypes.string, 
  category_3: PropTypes.string, 
};

export default AllCategory;



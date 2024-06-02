import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductPage.css';

const ProductPage = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [packetSize, setPacketSize] = useState(250);
  const [packetQuantity, setPacketQuantity] = useState(1);
  const navigate = useNavigate();
  const { productId } = useParams();

  useEffect(() => {
    fetch('http://localhost:4000/allproducts')
      .then((response) => response.json())
      .then((data) => {
        setAllProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching product data:', error);
        setLoading(false);
      });
  }, []);

  const product = allProducts.find((product) => product.id === parseInt(productId));

  const handleIncrement = () => setPacketQuantity((prevQuantity) => prevQuantity + 1);
  const handleDecrement = () => setPacketQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  const handleSizeChange = (e) => setPacketSize(parseInt(e.target.value));

  const handleBuyNow = () => {
    if (product) {
      // Save product details to local storage
      localStorage.setItem('productName', product.name);
      localStorage.setItem('packetSize', packetSize);
      localStorage.setItem('packetQuantity', packetQuantity);
      navigate('/contact');
    }
  };

  return (
    <div className="product-page">
      {loading ? (
        <p>Loading...</p>
      ) : product ? (
        <>
          <div className="product-image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="product-details">
            <h2 className="product-name">{product.name}</h2>
            <p className="product-description">{product.description}</p>
            <p className="product-price">Price: ₹{product.price}</p>
            <div className="quantity-options">
              <label htmlFor="packet-size">Packet Size:</label>
              <select name="psize" id="packet-size" value={packetSize} onChange={handleSizeChange}>
                <option value={250}>250gm</option>
                <option value={500}>500gm</option>
                <option value={750}>750gm</option>
              </select>
            </div>
            <div className="quantity-options">
              <label htmlFor="packet-quantity">Packet Quantity:</label>
              <div className="add-to-cart">
                <button onClick={handleDecrement}>-</button>
                <span style={{ margin: '0 10px' }}>{packetQuantity}</span>
                <button onClick={handleIncrement}>+</button>
              </div>
            </div>
            <div className="add-to-cart">
              <button className="add-to-cart-button" onClick={handleBuyNow}>
                Buy Now
              </button>
            </div>
          </div>
        </>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
};

export default ProductPage;

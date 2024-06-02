import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './contact.css';

function ContactForm() {
  const [productName, setProductName] = useState('');
  const [packetSize, setPacketSize] = useState('');
  const [packetQuantity, setPacketQuantity] = useState('');

  useEffect(() => {
    // Fetch product details from local storage
    setProductName(localStorage.getItem('productName') || '');
    setPacketSize(localStorage.getItem('packetSize') || '');
    setPacketQuantity(localStorage.getItem('packetQuantity') || '');
  }, []);

  if (!productName || !packetSize || !packetQuantity) {
    return <p>No product information found.</p>;
  }

  return (
    <div className="form-container">
      <form action="https://api.web3forms.com/submit" method="POST" className="contact-form">
        <h2>CONTACT</h2>
        <input type="hidden" name="access_key" value="ac5af08e-48b8-4365-8377-717be045c140" />
        <input type="text" name="name" placeholder="Full Name" /><br />
        <input type="email" name="email" placeholder="Email" /><br />
        <input type="text" name="title" placeholder="Product Name" defaultValue={productName} /><br />
        <input type="text" name="packageqty" placeholder="Package Quantity" defaultValue={packetSize} /><br />
        <input type="text" name="qty" placeholder="Product Quantity" defaultValue={packetQuantity} /><br />
        <input type="submit" className="submit" name="submit" value="Send Message" />
      </form>
    </div>
  );
}

ContactForm.propTypes = {
  productName: PropTypes.string,
  packetSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  packetQuantity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default ContactForm;


import React, { useState } from "react";
import './AddProduct.css'
import upload from '../../assets/upload_area.png'

const AddProduct = () => {
    const [image, setImage] = useState(false);
    const [productDetails, setProductDetails] = useState({
        name: "",
        image: "",
        category: "",
        category_2: "",
        category_3: "",
        description: "",
        price: "",
    })

    const imageHandler = (e) => {
        setImage(e.target.files[0]);
    }

    const changeHandler = (e) => {
        if (e.target.name === 'category' || e.target.name === 'category_2' || e.target.name === 'category_3') {
            // For category fields, make sure to handle empty string value properly
            console.log("Selected Category:", e.target.value); // Add this line to check the selected value
            setProductDetails({
                ...productDetails,
                [e.target.name]: e.target.value !== "" ? e.target.value : undefined
            });
        } else {
            // For other fields, directly set the value
            setProductDetails({
                ...productDetails,
                [e.target.name]: e.target.value
            });
        }
    }

    const Add_Product = async () => {
        console.log(productDetails);
        let responseData;
        let product = productDetails;

        let formData = new FormData();
        formData.append('product', image);

        await fetch('http://localhost:4000/upload', {
            method: 'POST',
            headers: {
                Accept: 'application/json'
            },
            body: formData,
        }).then((resp) => resp.json()).then((data) => { responseData = data; });

        if (responseData.success) {
            product.image = responseData.image_url;
            console.log(product);
            await fetch('http://localhost:4000/addproduct', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(product),
            }).then((resp) => resp.json()).then((data) => {
                data.success ? alert("Product Added") : alert("Failed")
            })
        }
    }

    return (
        <div className="add-product">
            <div className="add-product-itemfield">
                <p>Product Title</p>
                <input value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder="Type here" />
            </div>
            <div className="add-product-itemfield">
                <p>Product Description</p>
                <input value={productDetails.description} onChange={changeHandler} type="text" name='description' placeholder="Type here" />
            </div>
            <div className="add-product-itemfield">
                <p>Price</p>
                <input value={productDetails.price} onChange={changeHandler} type="text" name='price' placeholder="Type here" />
            </div>
            <div className="add-product-itemfield">
                <p>Product Category</p>
                <select value={productDetails.category} onChange={changeHandler} name="category" className="add-product-selector">
                    <option value="LightRoast">Light Roast</option>
                    <option value="MediumRoast">Medium Roast</option>
                    <option value="DarkRoast">Dark Roast</option>
                </select>
            </div>
            <div className="add-product-itemfield">
                <p>Category 2</p>
                <select value={productDetails.category_2} onChange={changeHandler} name="category_2" className="add-product-selector">
                    <option value="">Select Category</option>
                    <option value="Latte">Latte</option>
                    <option value="Mocha">Mocha</option>
                    <option value="Cappuccino">Cappuccino</option>
                    <option value="Americano">Americano</option>
                    <option value="Espresso">Espresso</option>
                </select>
            </div>
            <div className="add-product-itemfield">
                <p>Category 3</p>
                <select value={productDetails.category_3} onChange={changeHandler} name="category_3" className="add-product-selector">
                    <option value="">Select Category</option>
                    <option value="Robusta">Robusta</option>
                    <option value="Liberica">Liberica</option>
                    <option value="Arabica">Arabica</option>
                    <option value="Excelsa">Excelsa</option>
                </select>
            </div>
            <div className="add-product-itemfield">
                <label htmlFor="file-input">
                    <img src={image ? URL.createObjectURL(image) : upload} className="add-product-thumbnail-img" alt="" />
                </label>
                <input onChange={imageHandler} type="file" name='image' id="file-input" hidden />
            </div>
            <button onClick={() => { Add_Product() }} className="addproduct-btn"> ADD</button>
        </div>
    )
}

export default AddProduct;

import React, {useState, useEffect} from "react";
import './ListProduct.css'
import  cross  from '../../assets/crossicon.png'

const ListProduct=()=>{

    const [allproducts,setAllProducts]=useState([]);

    const fetchInfo=async()=>{
        await fetch('http://localhost:4000/allproducts')
        .then((res)=>res.json())
        .then((data)=>{setAllProducts(data)});
    }

    useEffect(()=>{
        fetchInfo();
    },[])

    const remove_product=async(id)=>{
        await fetch('http://localhost:4000/removeproduct',{
            method:'POST',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json',
            },
            body:JSON.stringify({id:id})
        })
        await fetchInfo();
    }

    return(
        <div className="list-product">
            <h1>All Products List</h1>
            <div className="listproduct-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Description</p>
                <p>Price</p>
                <p>Category</p>
                <p>Category 2</p>
                <p>Category 3</p>
                <p>Remove</p>
            </div>
            
            <div className="listproduct-allproducts">
                <hr />
                {allproducts.map((product,index)=>{
                    return<> <div key={index} className="listproduct-format-main listproduct-format">
                        <img src={product.image} alt="" className="listproduct-product-icon" />
                        <p>{product.name}</p>
                        <p>{product.description}</p>
                        <p>₹{product.price}</p>
                        <p>{product.category}</p>
                        <p>{product.category_2}</p>
                        <p>{product.category_3}</p>
                        <img onClick={()=>{remove_product(product.id)}} className='listproduct-remove-icon' src={cross} alt="" />
                    </div>
                    <hr /></>
                })}
            </div>
        </div>
    )
}

export default ListProduct;

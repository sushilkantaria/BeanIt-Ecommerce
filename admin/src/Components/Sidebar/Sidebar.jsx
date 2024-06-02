import React from "react";
import './Sidebar.css'
import {Link} from 'react-router-dom'
import add from '../../assets/add_pro.png'
import list from '../../assets/list.png'

const Sidebar=()=>{
    return(
        <div className='sidebar' >
            <Link to={'/addproduct'} style={{textDecoration:'none'}}>
                <div className="sidebar-item">
                    <img src={add} className='img' alt="" />
                    <p>Add Product</p>
                </div>
            </Link>
            <Link to={'/listproduct'} style={{textDecoration:'none'}}>
                <div className="sidebar-item">
                    <img src={list} className='img' alt="" />
                    <p>Product List</p>
                </div>
            </Link>
        </div>
    )
}

export default Sidebar
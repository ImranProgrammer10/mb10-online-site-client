import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './AllServices.css';
const AllServices = () => {
    const [services,setServices]=useState([]);
     useEffect(()=>{
         fetch("http://localhost:5000/allServices")
         .then(res=>res.json())
         .then(data=>setServices(data));
     },[])

     const {addToCart}=useAuth();
    return (   
        <div className=' container p-3'>
            <h1>All Products</h1>
            <div className='services'>
                <div className='  row container'>
                    {
                        services?.map((pd)=>(
                            <div className='  card col-12 col-sm-6 col-md-4  col-lg-3'>
                                <div className='service boarder boarder p-3'>
                                    <div className='services img'>
                                        <img style={{width:"262px", height:"162px"}}  className='w-100' src={pd?.img} alt=""/>
                                    </div>
                                    <h6>{pd?.name}</h6>
                                    {/* <h4>{pd?.model}</h4> */}
                                    <p>{pd?.description}</p>
                                    <h3 className='text-danger'>Cost:{pd?.price}$</h3>
                                    <Link to={`/booking/${pd._id}`}>
                                    <button className='btn btn-success'>Add To Cart</button>
                                    </Link>
                                    {/* <Button onClick={()=>addToCart(pd)}>Add to Cart</Button> */}
                                  
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default AllServices;
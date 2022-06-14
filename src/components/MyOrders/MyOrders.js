import React, { useEffect, useState } from 'react';

const MyOrders = () => {
    const [services,setServices]=useState([]);
    const email=sessionStorage.getItem("email");
    useEffect(()=>{
        fetch(`http://localhost:5000/myOrders/${email}`)
        .then(res=>res.json())
        .then(data=>setServices(data))

    },[])
    const handleDelete=(id)=>{
        fetch(`http://localhost:5000/deleteOrder/${id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount){
                alert("Deleted Successfully");
                const remaining=services.filter(service=>service._id !==id);
                setServices(remaining);
            }


        }
            )
        
        
    }
   
    return (
        <div className='container'>
           <h1>this is MyOrders</h1> 
           <div className='row container'>
               {services?.map((pd)=>(
                 
                   <div className='col-md-3'>
                       <div className='service border border p-3'>
                           <div className='services-img'>
                               <img className='img-fluid' style={{width:"262px", height:"162px"}}   src={pd?.img} alt/>
                               
                           </div>
                           <h6>{pd?.name}</h6>
                           <p>{pd?.description}</p>
                           <h3 className='text-danger'>Cost :{pd?.price}$</h3>
                           <button onClick={()=>handleDelete(pd?._id)} className='btn btn-danger' type="">Cancel</button>
                           <h4>{pd?.status} </h4>
                       </div>
                   </div>
               ))}
           </div>
        </div>
    );
};

export default MyOrders;
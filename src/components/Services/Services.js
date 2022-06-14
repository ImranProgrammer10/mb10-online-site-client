import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const Services = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/allServices")
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[])
    const handleDelete=(id)=>{
        const url=`http://localhost:5000/allServices/${id}`;
        fetch(url,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.deletedCount){
                alert("Deleted Successfully");
                const remaining=services.filter(service=>service._id !==id);
                setServices(remaining);
            }
        })
    }
    return (
        <div className='container'>
            <h1> Manage services</h1>
            <Table striped boardered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Event Title</th>
                    <th>Event Description</th>
                    <th>Image Link</th>
                    <th>Status</th>
                    <th> Action  </th>

                </tr>
                </thead>
                {services.map((pd,index)=>(
                    <tbody>
                        <td>{index}</td>
                        <td>{pd.title}</td>
                        <td>{pd.description}.to</td>
                        <td>{pd.img}</td>
                        <td>{pd.status}</td>
                        <button onClick={()=>handleDelete(pd._id)} className='btn bg-danger p-2'>Delete</button>
                    </tbody>
                ))}

                
            </Table>

        </div>
    );
};

export default Services;
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageOrder = () => {
    const [orders,setOrders]=useState([]);
    const [status,setStatus]=useState("");


    const handleStatus=(e)=>{
        setStatus(e.target.value);


    }
    useEffect(()=>{
        fetch("http://localhost:5000/allOrders")
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[])

    const handleUpdate=(id)=>{
        fetch(`http://localhost:5000/updateStatus/${id}`,{
            method:"PUT",
            headers:{"content-type":"application/json"},
            body:JSON.stringify({status}),
        })
    }

    const handleDelete=(id)=>{
        fetch(`http://localhost:5000/deleteOrder/${id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount){
                alert("Deleted Successfully");
                const remaining=orders.filter(order=>order._id !==id);
                setOrders(remaining);
            }


        }
            )
        
        
    }
    return (
        <div>
            <h1>{orders.length}</h1>    
            <Table striped boardered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Event Title</th>
                    <th>Event Description</th>
                    <th>Email</th>
                    <th>Image Link</th>
                    <th>Status</th>
                    <th> Action  </th>

                </tr>
                </thead>
                {orders.map((pd,index)=>(
                    <tbody>
                        <td>{index}</td>
                        <td>{pd.title}</td>
                        <td>{pd.description}</td>
                        <td>{pd.email}</td>
                        <td>{pd.img}</td>
                        <td>
                            <input onChange={handleStatus} type="text" defaultValue={pd.status} />
                            </td>
                            <button onClick={()=>handleDelete(pd?._id)} className='btn btn-danger' type="">Delete</button>
                        <button onClick={()=>handleUpdate(pd._id)} className='btn bg-danger p-2'>Update</button>
                    </tbody>
                ))}

                
            </Table>

        </div>
    );
};

export default ManageOrder;
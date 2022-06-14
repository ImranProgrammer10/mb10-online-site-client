import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddService.css';

const AddServices = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data =>{
        console.log(data);
        axios.post('http://localhost:5000/addServices',data)
        .then(res=>{
            if(res.data.insertedId){
                alert('Added Successfully');
                reset();
            }
            console.log(res);
        })

    } 
    return (
        <div className='add-service'>
            <h1>Please Add a service</h1>
               <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name", { required: true, maxLength: 100 })} placeholder="Name" />
        <input {...register("date", { required: true,   })} type="date"    />
        <textarea {...register("description")} placeholder="Description" />
        <input type="number" {...register("price")} placeholder="price" />
        <input {...register("img")} placeholder="img url" />
        <input type="submit" />
      </form>

        </div>
     
    );
};

export default AddServices;
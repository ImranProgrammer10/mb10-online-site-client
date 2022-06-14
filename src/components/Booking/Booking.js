import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { clearTheCart, getStoredCart } from '../utilities/fakeDb';
import './Booking.css';

const Booking = () => {
    const [service,setService]=useState({});
    const {serviceId}=useParams();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const email=sessionStorage.getItem("email");
    const onSubmit = data => {
        data.email=email;
        data.status="pending";
        const savedCart = getStoredCart();
        data.order = savedCart;
        console.log(data);
        fetch("http://localhost:5000/confirmOrder",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(data),
        })
        .then(res => res.json())
        .then(result => {
            if (result.insertedId) {
                alert('Order processed Successfully');
                clearTheCart();
                reset();
            }
        })
    }
    useEffect(()=>{
        fetch(`http://localhost:5000/singleProduct/${serviceId}`)
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])
 console.log(service)
    return (
        <div>
          
            <div className='booking-container'>
                <div className='row container'>
                    <div className='col-md-6'>
                        <div className='details-img'>
                            <img className='w-75' src={service?.img} alt=""/>
                        </div>
                        <h2>{service?.name}</h2>
                        <p className='text-start'>{service?.description}</p>
                        <h1>price: {service?.price} $</h1>
                      </div>

                      <div className='col-md-6'>
                        <h1>Booking Form</h1>
                        {/* <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

<input className='p-2 m-2 w-100' readOnly  {...register("name",{required:true})} defaultValue={service?.name} />
<input className='p-2 m-2 w-100' readOnly   {...register("description",{required:true})} defaultValue={service?.description} />

<input className='p-2 m-2 w-100'    type="date" {...register("date" )} />

<input className='p-2 m-2 w-100'   placeholder="comments" defaultValue="" {...register("comments")} />
<input className='p-2 m-2 w-100' readOnly placeholder="price"   {...register("price",{required:true})} defaultValue={service?.price} />
<input className='p-2 m-2 w-100' readOnly placeholder="img"  {...register("img",{required:true})}    defaultValue={service?.img} />

<input type="submit" />
</form> */}


<form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input  className='p-2 m-2 w-100' readOnly defaultValue={service?.name} {...register("name", { required: true }   )}  />
      
      {/* include validation with required or other standard HTML validation rules */}
      <input  className='p-2 m-2 w-100' readOnly  defaultValue={service?.description}  {...register("description", { required: true })} />
      <input  className='p-2 m-2 w-100' readOnly  defaultValue={service?.price}  {...register("price", { required: true })} />
      <input  className='p-2 m-2 w-100' readOnly  defaultValue={service?.img}  {...register("img", { required: true })} />
      <input className='p-2 m-2 w-100'    type="date" {...register("date" )} />
      <input  className='p-2 m-2 w-100'  placeholder='comments'  {...register("comments", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
                      </div>
                </div>
            </div>

  
    </div>
    );
};

export default Booking;
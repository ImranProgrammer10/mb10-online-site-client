import React from 'react';
 
import useAuth from '../../Hooks/useAuth';
import { useForm } from 'react-hook-form';

const Shipping = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { selectedService, remove, setselectedService } = useAuth();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <h1>Shipping</h1>
           
            {
                        selectedService?.map((service)=>(
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
                        ))
                    }
                
         

               

            
                
       
            
           
        </div>
    );
};

export default Shipping;
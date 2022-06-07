import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import PhoneInput from 'react-phone-number-input'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Form = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [value, setValue] = useState()
  const onSubmit = data => {
    fetch('https://loan-server-loan.herokuapp.com/information', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    }).then(res => res.json()).then(data => {
      if (data.sucess) {
        toast.success('Loan Information Submitted Successfully')
        navigate('/')
      }
    })
    reset()
  }
  return (
    <div className='flex items-center justify-center' style={{ minHeight: '100vh' }}>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg md:px-0 px-5 shadow-lg">
        <h1 className='text-2xl font-bold my-5 text-center uppercase'>Submit Your Loan Information</h1>
        <h2 className='text-xl mb-2'>Personal details</h2>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              First Name<span className='text-red-500'>*</span>
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Your First Name" {...register("firstName", { required: true, pattern: /^[A-Za-z]+$/i })} />
            {errors.firstName && <span className='text-red-500'>First Name is required</span>}
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Last Name<span className='text-red-500'>*</span>
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Your last Name" {...register("lastName", { required: true, pattern: /^[A-Za-z]+$/i })} />
            {errors.lastName && <span className='text-red-500'>Last Name is required</span>}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
              Your Age<span className='text-red-500'>*</span>
            </label>
            <input className="appearance-none block md:w-2/4 w-3/4 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder='Your Age' type='number' {...register("age", { required: true })} />
            {errors.age && <span className='text-red-500'>Age is required</span>}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
              Your Phone Number<span className='text-red-500'>*</span>
            </label>
            <PhoneInput className='appearance-none block md:w-2/4 w-3/4 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              defaultCountry="RU"
              international
              value={value}
              onChange={setValue} {...register("PhoneNumber", { required: true })} />
            {errors.PhoneNumber && <span className='text-red-500'>Phone Number is required</span>}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
              City<span className='text-red-500'>*</span>
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Your City Name" {...register("city", { required: true, pattern: /^[A-Za-z]+$/i })} />
            {errors.city && <span className='text-red-500'>City Name is required</span>}
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
              State<span className='text-red-500'>*</span>
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Your State" {...register("state", { required: true, pattern: /^[A-Za-z]+$/i })} />
            {errors.state && <span className='text-red-500'>State is required</span>}
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
              Zip<span className='text-red-500'>*</span>
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="Number" placeholder="Zip Code" {...register("zip", { required: true })} />
            {errors.zip && <span className='text-red-500'>Zip Code is required</span>}
          </div>
        </div>
        <h2 className='text-xl my-3'>Business details</h2>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
              Business Name<span className='text-red-500'>*</span>
            </label>
            <input className="appearance-none block md:w-2/4 w-3/4 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder='Your Business Name' type='text' {...register("business", { required: true, pattern: /^[A-Za-z]+$/i })} />
            {errors.business && <span className='text-red-500'>Business Name is required</span>}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
              GST Number<span className='text-red-500'>*</span>
            </label>
            <input className="appearance-none block md:w-2/4 w-3/4 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type='number' {...register("gstNumber", { required: true })} />
            {errors.gstNumber && <span className='text-red-500'>Gst Number is required</span>}
          </div>
        </div>
        <h2 className='text-xl'>Loan Application details</h2>
        <div>
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
            Amount<span className='text-red-500'>*</span>
          </label>
          <input type='number' className='appearance-none block md:w-full w-3/4 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
            {...register("amount", { required: true })} />
          {errors.amount && <span className='text-red-500'>Amount is required</span>}
        </div>
        <div>
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
            interest rate<span className='text-red-500'>*</span>
          </label>
          <input type='number' className='appearance-none block md:w-full w-3/4 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
            {...register("interest", { required: true })} />
          {errors.interest && <span className='text-red-500'>Interest is required</span>}
        </div>
        <div>
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
            loan tenure<span className='text-red-500'>*</span>
          </label>
          <input type='number' className='appearance-none block md:w-full w-3/4 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
            {...register("loan", { required: true })} max='12' />
          {errors.loan && <span className='text-red-500'>loan Tenure is required</span>}
        </div>
        <div>
          <input type="submit" value='Submit Form' className='btn btn-primary w-full' />
        </div>
      </form>
    </div>
  );
};

export default Form;      
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../store/slices/userdetail';
import { useNavigate } from 'react-router-dom';

const CreatePosts = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [data, setData] = useState({
        name:"",
        email:"",
        phone:"",
        message:""
    })

    const handleChange = (e) => {
        setData({...data,[e.target.name]:e.target.value})
    }

    const handleSubmit = () => {
        dispatch(createUser(data))
        navigate("/")
    }


    return (
        <div>
            <div className="mx-14 mt-10 border-2 border-blue-400 rounded-lg">
                <div className="mt-10 text-center font-bold">Contact Us</div>
                <div className="mt-3 text-center text-4xl font-bold">Make an Appointment</div>
                <div className="p-8">
                    <div className="flex gap-4">
                        <input type="Name" name="name" value={data.name} onChange={handleChange} className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Full Name *" />
                        <input type="email" name="email" value={data.email} onChange={handleChange} className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Email *" />
                    </div>
                    <div className="my-6 flex gap-4">
                    <input type="number" name="phone" value={data.number} onChange={handleChange} className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="phone *" />
                        
                    </div>
                    <div className="">
                        <textarea name="message" value={data.message} onChange={handleChange} id="text" cols="30" rows="10" className="mb-10 h-40 w-full resize-none rounded-md border border-slate-300 p-5 font-semibold text-gray-300">Message</textarea>
                    </div>
                    <div className="text-center">
                        <button onClick={handleSubmit} className="cursor-pointer rounded-lg bg-blue-700 px-8 py-5 text-sm font-semibold text-white">Book Appoinment</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreatePosts
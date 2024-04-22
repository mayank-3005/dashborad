import React, { useState } from 'react';
import img from "../assets/images/img.png";
import AllButoon from './buttonField/Button';
import { Link } from 'react-router-dom';
import logo from "../assets/images/logo.png";
const Form = () => {
  

  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    profession: '',
    email: '',
    state: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
   
  };

  return (
    <div className='form-container'>
    <div className="logo">
    <img src={logo} alt ="logo"></img>
    </div>
      <div className="grid grid-cols-2 form-main">
        <div>
          <img src={img} alt="img" className="max-w-full" />
        </div>
        <div className='bg-white pt-4'>
          <div className='form-title'>
            <h3>Fill out the form to Become a DSA</h3>
          </div>
          <form onSubmit={handleSubmit} className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 form-input">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400">
                  Enter Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder='Enter Your Full Name'
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full   border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400">
                  Enter Your Email ID
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder='Enter Your Email ID'
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full  border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label htmlFor="mobile" className="block text-sm font-medium text-gray-400">
                  Enter Your Mobile Number
                </label>
                <input
                  type="tel"
                  name="mobile"
                  id="mobile"
                  placeholder='Enter Your Mobile Number'
                  value={formData.mobile}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full  border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label htmlFor="state" className="block text-sm font-medium text-gray-400">
                  Select Your State
                </label>
                <select
                  name="state"
                  id="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                >
                  <option value="">Select State</option>
                </select>
              </div>
             
            </div>
            <div className='profession'>
            <label htmlFor="profession" className="block text-sm font-medium text-gray-400">
              Select Your Profession
            </label>
            <select
              name="profession"
              id="profession"
              value={formData.profession}
              onChange={handleChange}
              className=" p-2 w-full  border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              <option value="" className='select-option'>Select Profession</option>
            </select>
          </div>
            <div className='form-btn'>
            <Link to="/home" className="text-white">
            <AllButoon type={"submit"} btnText={"Continue"} />
          </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;

import React, { useState,Link } from "react";
import axios from "axios";

const GuestBook = () => {
  const apiUrl = "https://wedding-dxur.onrender.com";
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName:"",
    Email: "",
    Guest: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${apiUrl}/post`, formData);
      alert(response.data.message);
    } catch (error) {
      console.error("Error:", error.response.data);
    }
  };
  return (
    <>
      <div>
      <form
          noValidate=""
          className="space-y-6 container bg-white rounded-xl shadow-lg p-6 md:p-6"
          onSubmit={handleSubmit}
        >
          <div>
            <input
              id="FirstName"
              type="text"
              name="FirstName"
              placeholder="FirstName"
              className="w-full border-2 p-5 dark:bg-gray-100"
              onChange={handleChange}
              value={formData.FirstName}
            />
          </div>
          <div>
            <input
              id="LastName"
              type="text"
              name="LastName"
              placeholder="LastName"
              className="w-full border-2 p-5 dark:bg-gray-100"
              onChange={handleChange}
              value={formData.LastName}
            />
          </div>
          <div>
            <input
              id="Email"
              type="email"
              name="Email"
              placeholder="Email"
              className="w-full p-5 border-2 rounded dark:bg-gray-100"
              onChange={handleChange}
              value={formData.Email}
            />
          </div>
          <div>
            <input
              id="Guest"
              type="number"
              name="Guest"
              placeholder="Guest No"
              className="w-full p-5 border-2 rounded dark:bg-gray-100"
              onChange={handleChange}
              value={formData.Guest}
            />
          </div>
          <button
            type="submit"
            className="p-4 w-72 text-sm text-center font-bold bg-sky-400 tracking-wide uppercase rounded dark:bg--600 dark:text-gray-50"
          >
            Submit
          </button>
        </form>
      </div>
      {/* this CDA */}
      <div className="flex flex-col justify-center items-center mt-5 mb-5 bg-gray-100 rounded-lg shadow-lg md:scroll-sm">
                <h1 className=' text-center text-2xl font-bold text-sky-500'>The Best Gift</h1>
                <p className="text-md text-gray-700 mb-2 text-center">
                    Thank you for letting us share in your special day. We wish you all the happiness in the world.                </p>
                <p className="text-md text-gray-700 mb-4 text-center">
                    Lots of warm wishes to my sister, who found the love of her dreams. May your wedding be a special day, and wishing you many years of happiness! Cheers for my .                </p>

            </div>
    </>
  )
}

export default GuestBook

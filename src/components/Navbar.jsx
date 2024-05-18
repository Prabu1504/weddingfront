import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className=' bg-black flex justify-between items-center h-24  mx-auto px-4 text-white'>
            <h2 className='text-white-1000 text-2xl uppercase'>Wedding Invitation</h2>

            <ul className='flex justify-end items-center gap-10 text-white p-4'>
                <li><Link to="/" className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer
             duration-300 hover:text-black'>Ourstory</Link></li>
                <li><Link to="/Locationbar" className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer
             duration-300 hover:text-black'>Location</Link></li>
             <li><Link to="/Gallery" className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer
             duration-300 hover:text-black'>Gallery</Link></li>
                <li><Link to="/GuestBook" className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer
             duration-300 hover:text-black'>GuestBook</Link></li>
             </ul>
        </div>

    )
}

export default Navbar
import React from 'react'
import headersImage from "../assets/header1.1.jpg";
import img from '../assets/story.jpg'
import li from '../assets/wed1.jpg'
import lii from '../assets/afterparty.jpg'
import li1 from '../assets/dinner.jpg'
import mem1 from '../assets/wed1.jpg'
import mem2 from '../assets/mem1.jpg'
import mem3 from '../assets/mem1.1.jpg'
import mem4 from '../assets/mem2.jpg'
import mem5 from '../assets/mem3.jpg'
import mem6 from '../assets/mem4.jpg'
import mem7 from '../assets/mem5.jpg'
import mem8 from '../assets/mem6.jpg'
import mem9 from '../assets/mem7.jpg'
import { Link } from 'react-router-dom';


const Ourstory = () => {
    return (
        <>
        {/* this poster */}
            <div className="gap-10 flex items-center justify-center w-full relative">
                <img src={headersImage} alt="logo" className='scroll-smooth w-full h-[650px]' />
                <div className='w-full h-[650px] absolute flex justify-center items-center top-0 left-0 flex-col backdrop-brightness-50'>
                    <h1 className='text-5xl font-bold text-gray-50'>Hari</h1>
                    <h4 className='text-2xl text-gray-50 m-4 text-center font-serif flex justify-center items-center w-[75%]'>Wedding</h4>
                    <h1 className='text-5xl font-bold text-gray-50'>Aisha</h1>
                </div>
            </div>
            {/* this story */}
            <div className="flex flex-col lg:flex-row justify-between items-center lg:px-32 gap-16 mt-16">
                <div className=" w-full lg:w-3/4 h-[100px] mt-5">
                    <img className=" rounded-lg" src={img} alt="img" />
                </div>
                <div className=" w-full lg:w-3/4 space-y-4 h-[20px]">
                    <h1 className=" text-4xl font-semibold text-center text-sky-500 lg:text-start">Our Story</h1>
                    <p className=" text-justify lg:text-start font-semibold">
                        We were both young when I first saw you <br />
                        I close my eyes and the flashback starts <br />
                        I'm standin' there<br />
                        On a balcony in summer air<br />
                        See the lights, see the party, the ball gowns<br />
                        See you make your way through the crowd<br />
                        And say, "Hello"<br />
                        Little did I know<br />
                        That you were Romeo, you were throwin' pebbles<br />
                        And my daddy said, "Stay away from Juliet"<br />
                        And I was cryin' on the staircase<br />
                        Beggin' you, "Please don't go, " and I said<br />
                        Romeo, take me somewhere we can be alone<br />
                        I'll be waiting,
                    </p>
                </div>
            </div>
            <h1 className=' uppercase text-2xl ml-10 text-sky-500 mt-[25%] font-bold'>Party Time</h1>
            {/* this the party*/}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[2%] ml-[10%]'>
                <div className=' rounded-full shadow-full w-[50%] h-[50%]'>
                    <div className=' p-5 flex flex-col'>
                        <h1 className=' text-2xl font-semibold mb-2'>Rehearsal Dinner</h1>
                        <h1 className='flex justify-center items-center'>20/11/2023</h1>
                        <div className=' rounded-full overflow-hidden'>
                            <img src={li1} alt="li" />
                        </div>
                        <h1 className='text-center'>12:00PM-2:00PM</h1>
                        <h1 className='text-center'>The Sierra Resort 14 </h1>
                        <h1 className='text-center'>Pacific Grove Monterey,CA</h1>


                    </div>

                </div>
                <div className=' rounded-full shadow-full w-[50%] h-[50%]'>
                    <div className=' p-5 flex flex-col'>
                        <h1 className=' text-2xl font-semibold mb-2'>The Ceremony</h1>
                        <h1 className='flex justify-center items-center'>20/11/2023</h1>
                        <div className=' rounded-full overflow-hidden'>
                            <img src={li} alt="li" />
                        </div>
                        <h1 className='text-center'>12:00PM-2:00PM</h1>
                        <h1 className='text-center'>The Sierra Resort 14 </h1>
                        <h1 className='text-center'>Pacific Grove Monterey,CA</h1>


                    </div>

                </div>
                <div className=' rounded-full shadow-full w-[50%] h-[50%]'>
                    <div className=' p-5 flex flex-col'>
                        <h1 className=' text-2xl font-semibold mb-2 text-center'>After party</h1>
                        <h1 className='flex justify-center items-center'>20/11/2023</h1>
                        <div className=' rounded-full overflow-hidden'>
                            <img src={lii} alt="li" />
                        </div>
                        <h1 className='text-center'>12:00PM-2:00PM</h1>
                        <h1 className='text-center'>The Sierra Resort 14 </h1>
                        <h1 className='text-center'>Pacific Grove Monterey,CA</h1>
                    </div>
                </div>
            </div>
            {/* Memories page */}
            <h1 className=' uppercase text-2xl ml-10 text-sky-500 font-bold'> Our Memories</h1>
            <div className='grid grid-cols-1 md:grid-cols-1 gap-8 ml-9 mr-9 mt-10 sm:grid-cols-2 lg:grid-cols-3 '>
                <img src={mem1} alt="mem1" className='hover:scale-105 transition duration-300 ease-in-out' />
                <img src={mem2} alt="mem2" className='hover:scale-105 transition duration-300 ease-in-out' />
                <img src={mem3} alt="mem3" className='hover:scale-105 transition duration-300 ease-in-out' />
                <img src={mem4} alt="mem4" className='hover:scale-105 transition duration-300 ease-in-out' />
                <img src={mem5} alt="mem5" className='hover:scale-105 transition duration-300 ease-in-out' />
                <img src={mem6} alt="mem6" className='hover:scale-105 transition duration-300 ease-in-out' />
                <img src={mem7} alt="mem7" className='hover:scale-105 transition duration-300 ease-in-out' />
                <img src={mem8} alt="mem8" className='hover:scale-105 transition duration-300 ease-in-out' />
                <img src={mem9} alt="mem9" className='hover:scale-105 transition duration-300 ease-in-out' />

            </div>
            {/* this CDA  */}
            <div className="flex flex-col justify-center items-center  mt-4 ml-9 mb-4 mr-9 bg-gray-100 rounded-lg shadow-lg md:scroll-sm">
                <h1 className=' text-center text-2xl font-bold text-sky-500'>The Best Gift</h1>
                <p className="text-md text-gray-700 mb-2 text-center">
                Thank you for letting us share in your special day. We wish you all the happiness in the world.                </p>
                <p className="text-md text-gray-700 mb-4 text-center">
                Lots of warm wishes to my sister, who found the love of her dreams. May your wedding be a special day, and wishing you many years of happiness! Cheers for my .                </p>
                <Link to="/GuestBook">
                    <button className="text-md font-semibold text-white bg-sky-500 py-3 px-8 mb-4 rounded-lg shadow-lg hover:bg-sky-600">
                        Guest Book
                    </button>
                </Link>
            </div>

        </>
    )
}

export default Ourstory;
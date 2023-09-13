import React from 'react';
import { AiOutlineMail, AiOutlineFacebook, AiFillTwitterCircle, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

const Footer = () => {
    return (
        <div className='bg-[#fff5f5d2] mt-32 py-10'>
            <div>
                <h1 className='text-center text-4xl font-semibold '>Subscribe to Our Newsletter</h1>
                <div className='text-center mt-10 relative'>
                    <input className='w-72 p-2 bg-transparent border-b-2 focus:outline-none' type="text" placeholder='Your email address' />
                    <button className='absolute bottom-0 right-[614px]'><AiOutlineMail className='text-3xl text-gray-400 hover:text-[#fcb027] duration-300 active:scale-95' /></button>
                </div>
            </div>
            <div className='max-w-7xl mx-auto flex justify-between mt-32'>
                <div>
                    <h1 className="text-5xl text-yellow-500 font-extrabold mb-5"> BWE</h1>
                    <div className='flex gap-6'>
                        <button><AiOutlineFacebook className='text-4xl text-[#fcb027]' /></button>
                        <button>< AiFillTwitterCircle className='text-4xl text-[#fcb027]' /></button>
                        <button><AiFillLinkedin className='text-4xl text-[#fcb027]' /></button>
                        <button><AiFillInstagram className='text-4xl text-[#fcb027]' /></button>
                    </div>
                </div>
                <div className='flex justify-between w-[65%]'>
                    <div>
                        <h1 className='text-xl font-semibold uppercase mb-4 '>Company</h1>
                        <a className='text-gray-600' href="">About</a> <br />
                        <a className='text-gray-600' href="">Our Service</a> <br />
                        <a className='text-gray-600' href="">Affiliate Program</a> <br />
                        <a className='text-gray-600' href="">Privacy Policy</a> <br />
                    </div>
                    <div>
                        <h1 className='text-xl font-semibold uppercase mb-4 '>Get Help</h1>
                        <a className='text-gray-600' href="">FAQ</a> <br />
                        <a className='text-gray-600' href="">Returns</a> <br />
                        <a className='text-gray-600' href="">Payments Option</a> <br />
                        <a className='text-gray-600' href="">Shipping and Delivery</a> <br />
                    </div>
                    <div>
                        <h1 className='text-xl font-semibold uppercase mb-4 '>Online Shop</h1>
                        <a className='text-gray-600' href="">Men</a> <br />
                        <a className='text-gray-600' href="">Women</a> <br />
                        <a className='text-gray-600' href="">Accessories</a> <br />
                        <a className='text-gray-600' href="">Clothes and Apparels</a> <br />
                    </div>
                </div>
            </div>
            <hr className='max-w-7xl mx-auto my-4' />
            <div className=" max-w-7xl mx-auto text-gray-600 py-4">
                <div className="container mx-auto flex items-center justify-between">
                    <div className="text-sm">&copy; 2023 Reserved BWE</div>
                    <div className="flex space-x-4">
                        <img src="visa-icon.png" alt="Visa" className="h-6" />
                        <img src="mastercard-icon.png" alt="Mastercard" className="h-6" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
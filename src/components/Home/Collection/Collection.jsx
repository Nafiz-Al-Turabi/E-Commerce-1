import React from 'react';

const Collection = () => {
    return (
        <div className='my-20 relative'>
            <div className='mb-10'>
                <h1 className='text-4xl'>Our Collections</h1>
                <hr className='w-[70px] border-2 border-[#fcb027]' />
            </div>
            <div className='flex gap-11'>
                <div className='relative '>
                    <div className='h-[400px] w-[300px] bg-orange-50 rounded-xl shadow-lg'></div>
                    <img className='h-60 absolute top-10 left-7 ' src="https://i.ibb.co/zRXrfNv/bag-1.png" alt="" />
                    <div className='absolute bottom-0 bg-white p-2 rounded-bl-xl'>
                        <h1 className='text-2xl font-semibold mb-2'>Bags Collection</h1>
                        <a className='font-semibold hover:text-gray-600 duration-300 ' href="/">Shop now</a>
                    </div>
                </div>
                <div className='relative '>
                    <div className='h-[300px] w-[200px] bg-orange-50 rounded-xl shadow-lg'></div>
                    <img className='h-40 absolute top-10 left-10 ' src="https://i.ibb.co/tYCHs21/watch-1.png" alt="" />
                    <div className='absolute bottom-[100px] bg-white p-2 rounded-bl-xl'>
                        <h1 className='text-md font-semibold mb-2'>Watches Collection</h1>
                        <a className='font-semibold hover:text-gray-600 duration-300 ' href="/">Shop now</a>
                    </div>
                </div>
                <div className='relative '>
                    <div className='h-[300px] w-[200px] bg-orange-50 rounded-xl shadow-lg'></div>
                    <img className='h-40 absolute top-10 left-10 ' src="https://i.ibb.co/0nRHRcp/t-shirt.png" alt="" />
                    <div className='absolute bottom-[100px] bg-white p-2 rounded-bl-xl'>
                        <h1 className='text-md font-semibold mb-2'>T-Shirt Collection</h1>
                        <a className='font-semibold hover:text-gray-600 duration-300 ' href="/">Shop now</a>
                    </div>
                </div>
                <div className='relative '>
                    <div className='h-[300px] w-[200px] bg-orange-50 rounded-xl shadow-lg'></div>
                    <img className='h-40 absolute top-10 left-10 ' src="https://i.ibb.co/tYCHs21/watch-1.png" alt="" />
                    <div className='absolute bottom-[100px] bg-white p-2 rounded-bl-xl'>
                        <h1 className='text-md font-semibold mb-2'>Watches Collection</h1>
                        <a className='font-semibold hover:text-gray-600 duration-300 ' href="/">Shop now</a>
                    </div>
                </div>
                <div className='relative '>
                    <div className='h-[300px] w-[200px] bg-orange-50 rounded-xl shadow-lg'></div>
                    <img className='h-40 absolute top-10 left-0 ' src="https://i.ibb.co/khyMZDy/blue-sports-shoe-untied-ready-action-generated-by-ai.png" alt="" />
                    <div className='absolute bottom-[100px] bg-white p-2 rounded-bl-xl'>
                        <h1 className='text-md font-semibold mb-2'>Shoes Collection</h1>
                        <a className='font-semibold hover:text-gray-600 duration-300 ' href="/">Shop now</a>
                    </div>
                </div>
            </div>
            <button className='text-xl  font-semibold border border-[#fcb027] py-3 px-5 absolute bottom-0 right-0 rounded-lg hover:bg-[#fcb027] hover:text-white duration-300 active:scale-95'>Discover Now</button>
        </div>
    );
};

export default Collection;
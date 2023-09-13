import React from 'react';

const Categories = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <h1 className='text-4xl font-semibold text-center uppercase'>Featured Categories</h1>
            <div className="flex space-x-4 justify-center my-5">
                <button className="px-4 py-2 rounded-lg bg-[#fcb027] text-white">
                    All
                </button>
                <button className="px-4 py-2 rounded-lg bg-gray-200 text-gray-600">
                    Latest
                </button>
                <button className="px-4 py-2 rounded-lg bg-gray-200 text-gray-600">
                    Best Selling
                </button>
                <button className="px-4 py-2 rounded-lg bg-gray-200 text-gray-600">
                    Top Rated
                </button>
                <button className="px-4 py-2 rounded-lg bg-gray-200 text-gray-600">
                    Trendy
                </button>
            </div>
            <div className='flex justify-center gap-6 my-10'>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col items-center">
                    <img
                        src="https://i.ibb.co/CVxpVCW/watch.png"
                        alt="Product"
                        className="w-full h-96 object-contain"
                    />
                    <div className="px-6 py-4 text-center flex-grow">
                        <div className="font-bold text-xl mb-2">Product Title</div>
                        <div className="flex justify-between">
                            <span className="text-gray-500 line-through">$30.00</span>
                            <span className="text-[#fcb027] font-semibold">$20.00</span>
                        </div>
                    </div>
                    <div className="px-6 py-4">
                        <button className="border border-[#fcb027] hover:bg-[#fcb027] hover:text-white duration-300 active:scale-95 italic font-bold py-2 px-4 rounded-full">
                            Add to Cart
                        </button>
                    </div>
                </div>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col items-center">
                    <img
                        src="https://i.ibb.co/q9QGdJ9/download.png"
                        alt="Product"
                        className="w-full h-96 object-contain"
                    />
                    <div className="px-6 py-4 text-center flex-grow">
                        <div className="font-bold text-xl mb-2">Product Title</div>
                        <div className="flex justify-between">
                            <span className="text-gray-500 line-through">$30.00</span>
                            <span className="text-[#fcb027] font-semibold">$20.00</span>
                        </div>
                    </div>
                    <div className="px-6 py-4">
                        <button className="border border-[#fcb027] hover:bg-[#fcb027] hover:text-white duration-300 active:scale-95 italic font-bold py-2 px-4 rounded-full">
                            Add to Cart
                        </button>
                    </div>
                </div>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col items-center">
                    <img
                        src="https://i.ibb.co/xCQ4Jrh/water-proof-bag.png"
                        alt="Product"
                        className="w-full h-96 object-contain"
                    />
                    <div className="px-6 py-4 text-center flex-grow">
                        <div className="font-bold text-xl mb-2">Product Title</div>
                        <div className="flex justify-between">
                            <span className="text-gray-500 line-through">$30.00</span>
                            <span className="text-[#fcb027] font-semibold">$20.00</span>
                        </div>
                    </div>
                    <div className="px-6 py-4">
                        <button className="border border-[#fcb027] hover:bg-[#fcb027] hover:text-white duration-300 active:scale-95 italic font-bold py-2 px-4 rounded-full">
                            Add to Cart
                        </button>
                    </div>
                </div>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col items-center">
                    <img
                        src="https://i.ibb.co/jHtPvmd/hat.png"
                        alt="Product"
                        className="w-full h-96 object-contain"
                    />
                    <div className="px-6 py-4 text-center flex-grow">
                        <div className="font-bold text-xl mb-2">Product Title</div>
                        <div className="flex justify-between">
                            <span className="text-gray-500 line-through">$30.00</span>
                            <span className="text-[#fcb027] font-semibold">$20.00</span>
                        </div>
                    </div>
                    <div className="px-6 py-4">
                        <button className="border border-[#fcb027] hover:bg-[#fcb027] hover:text-white duration-300 active:scale-95 italic font-bold py-2 px-4 rounded-full">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
            <div className='text-center'>
                <button className='text-xl font-bold  bg-[#fcb027] text-white py-2 px-5 rounded-lg hover:bg-[#edb03e] duration-300'>See More</button>
            </div>
        </div>
    );
};

export default Categories;
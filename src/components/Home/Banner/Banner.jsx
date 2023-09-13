import { AiFillPlusCircle } from "react-icons/ai";

const Banner = () => {
    return (
        <div className='my-32'>
            <div className='flex justify-between items-center'>
                <div>
                    <h1 className='text-8xl text-slate-800 font-semibold'>Better <br /> Way to Start <br /> The Shopping</h1>
                    <p className='text-xl text-gray-600 w-2/3 mt-10'>Make the new experience of shopping, get the high quality products rom your favourite Brands</p>
                    <button className='bg-[#fcb027] mt-10 text-white py-4 px-8 text-2xl uppercase font-semibold rounded-lg hover:bg-[#c49235] duration-300 ease-in-out '>Shop Now</button>
                </div>
                <div className='relative'>
                    <div className='relative'>
                        <div className='h-[500px] w-[378px] bg-[#fcb027] rounded-tl-full rounded-tr-[550px] '></div>
                        <div className='absolute -top-20'>
                            <img className='h-[500px]' src="https://i.ibb.co/nQpNMv6/guy2.png" alt="" />
                            <h1 className='text-center text-white font-bold text-4xl absolute -bottom-20 -right-5 p-5 bg-gradient-to-t to-[#ffdb9935] from-[#fcb027] backdrop-filter backdrop-blur-sm '>New Fashion Trends</h1>
                        </div>
                    </div>
                    <div className='absolute bottom-8 -left-48'>
                        <div className="h-[116px] w-56 bg-[#076259] rounded-t-lg shadow-lg flex flex-col justify-center items-center">
                            <img src='https://i.ibb.co/pW520Pf/guy.png' alt='' className="h-52" />
                            <div className="p-4 w-56 bg-white rounded-b-lg shadow-lg text-center relative">
                                <h3 className="text-xl font-semibold text-gray-800">Winter jacket</h3>
                                <p className="text-gray-600 mt-2">$140</p>
                                <button className="absolute -top-16 -left-4">
                                    <AiFillPlusCircle  className="text-4xl bg-white text-gray-400 rounded-full"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
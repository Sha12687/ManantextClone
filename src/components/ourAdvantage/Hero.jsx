import React from 'react';

const HeroSection = () => {
    return (
        <div className="relative bg-cover bg-center h-[90vh]">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-black filter blur-sm"
                aria-hidden="true"
            >
                <img src="./restaurant.jpg" alt="" className='w-full h-[90vh]' />
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex items-center text-justify justify-stretch text-white px-[5rem]">
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl  font-extrabold">OUR <span className='px-9'><br />ADVANTAGE</span></h1>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;

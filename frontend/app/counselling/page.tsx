import React from 'react'
import Booking from '@/pagelevel/Booking'
import FAQ from '@/pagelevel/FAQ'
import Packages from '@/pagelevel/Packages'
import WhyUs from '@/pagelevel/WhyUs'
import Image from "next/image";
import bg from '../../public/bg.jpeg'

const page = () =>
{
    return (
        <>
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image src={ bg } alt="Background" className="w-full h-full object-cover object-top" />
                </div>
                <div className="container mx-auto px-6 py-16 relative z-10">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-10 md:mb-0">
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                                One-on-One MPSC Counselling
                            </h1>
                            <p className="text-lg text-gray-700 mb-8 max-w-lg">
                                Get personalized guidance from MPSC experts to optimize your
                                preparation strategy, clear your doubts, and increase your
                                chances of success.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button className="px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-800 transition duration-300 !rounded-button whitespace-nowrap cursor-pointer">
                                    Book a Session Now
                                </button>
                                <button className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 !rounded-button whitespace-nowrap cursor-pointer">
                                    Learn More
                                </button>
                            </div>
                        </div>
                        <div className="md:w-1/2 flex justify-center">
                            <img
                                src="https://readdy.ai/api/search-image?query=professional%20scene%20of%20a%20mentor%20counselling%20a%20student%2C%20Indian%20setting%2C%20modern%20office%20environment%2C%20discussion%20over%20study%20materials%20and%20laptop%2C%20professional%20attire%2C%20warm%20lighting%2C%20high%20quality%20realistic&width=600&height=400&seq=9&orientation=landscape"
                                alt="MPSC Counselling"
                                className="rounded-xl shadow-2xl max-w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <WhyUs />
            <Packages />
            <Booking />
            <FAQ />
        </>
    )
}

export default page
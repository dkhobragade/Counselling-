import React from 'react'
import { ClockCircleOutlined, CheckCircleOutlined } from '@ant-design/icons'
import { packages } from '@/helper/Constant'

const Packages = () =>
{
    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Counselling Packages
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Choose the package that best suits your preparation needs and
                        goals.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    { packages.map( ( pkg ) => (
                        <div
                            key={ pkg.id }
                            className={ `${ pkg.color } rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative` }
                        >
                            { pkg.popular && (
                                <div className="absolute top-0 right-0">
                                    <div className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                                        MOST POPULAR
                                    </div>
                                </div>
                            ) }
                            <div className={ `${ pkg.accent } h-2 w-full` }></div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                    { pkg.title }
                                </h3>
                                <div className="flex items-center mb-4">
                                    <ClockCircleOutlined className="text-gray-500 mr-2" />
                                    <span className="text-gray-600">{ pkg.duration }</span>
                                </div>
                                <div className="text-3xl font-bold text-gray-800 mb-6">
                                    { pkg.price }
                                </div>
                                <ul className="mb-8">
                                    { pkg.features.map( ( feature, index ) => (
                                        <li key={ index } className="flex items-start mb-3">
                                            <CheckCircleOutlined className="text-green-500 mt-1 mr-2" />
                                            <span className="text-gray-600">{ feature }</span>
                                        </li>
                                    ) ) }
                                </ul>
                                <button

                                    className={ `w-full py-3 font-semibold rounded-lg ${ pkg.accent } text-white hover:opacity-90 transition-opacity !rounded-button whitespace-nowrap cursor-pointer` }
                                >
                                    Book Now
                                </button>
                            </div>
                        </div>
                    ) ) }
                </div>
            </div>
        </section>

    )
}

export default Packages
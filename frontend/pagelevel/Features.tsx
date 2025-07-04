import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChalkboard } from '@fortawesome/free-solid-svg-icons/faChalkboard'
import { faArrowRight, faCheckCircle, faChartLine, faBookReader } from '@fortawesome/free-solid-svg-icons'

const Features = () =>
{
    return (
        <section className="bg-white py-20" >
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-medium mb-4">
                        Why Choose Us
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        Everything You Need to Succeed
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Comprehensive preparation resources and expert guidance to help
                        you achieve your MPSC goals.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-110 transition-transform duration-300"></div>
                        <div className="relative">
                            <div className="w-10 h-10 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <FontAwesomeIcon icon={ faChalkboard } className='text-blue-600 w-5' />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Expert Faculty
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Learn from top MPSC rankers and subject experts with years of
                                teaching experience.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center text-gray-600">
                                    <FontAwesomeIcon icon={ faCheckCircle } className='text-green-500 mr-2 w-5' />
                                    <span>Experienced educators</span>
                                </li>
                                <li className="flex items-center text-gray-600">
                                    <FontAwesomeIcon icon={ faCheckCircle } className='text-green-500 mr-2 w-5' />
                                    <span>Personal mentoring</span>
                                </li>
                                <li className="flex items-center text-gray-600">
                                    <FontAwesomeIcon icon={ faCheckCircle } className='text-green-500 mr-2 w-5' />
                                    <span>Doubt resolution</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-110 transition-transform duration-300"></div>
                        <div className="relative">
                            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <FontAwesomeIcon icon={ faBookReader } className='text-purple-600 w-5' />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Structured Learning
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Well-organized study material and systematic approach to cover
                                entire syllabus.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center text-gray-600">
                                    <FontAwesomeIcon icon={ faCheckCircle } className='text-green-500 mr-2 w-5' />
                                    <span>Comprehensive notes</span>
                                </li>
                                <li className="flex items-center text-gray-600">
                                    <FontAwesomeIcon icon={ faCheckCircle } className='text-green-500 mr-2 w-5' />
                                    <span>Regular assessments</span>
                                </li>
                                <li className="flex items-center text-gray-600">
                                    <FontAwesomeIcon icon={ faCheckCircle } className='text-green-500 mr-2 w-5' />
                                    <span>Performance tracking</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-110 transition-transform duration-300"></div>
                        <div className="relative">
                            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <FontAwesomeIcon icon={ faChartLine } className='text-green-600 w-5' />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Proven Results
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Consistent track record of producing top rankers in MPSC
                                examinations.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center text-gray-600">
                                    <FontAwesomeIcon icon={ faCheckCircle } className='text-green-500 mr-2 w-5' />
                                    <span>500+ selections</span>
                                </li>
                                <li className="flex items-center text-gray-600">
                                    <FontAwesomeIcon icon={ faCheckCircle } className='text-green-500 mr-2 w-5' />
                                    <span>Top 10 rankers</span>
                                </li>
                                <li className="flex items-center text-gray-600">
                                    <FontAwesomeIcon icon={ faCheckCircle } className='text-green-500 mr-2 w-5' />
                                    <span>Success guarantee</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-16 text-center">
                    <button className="px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg shadow-xl hover:bg-gray-800 transition duration-300 transform hover:translate-y-[-2px] !rounded-button whitespace-nowrap cursor-pointer inline-flex items-center">
                        <span>Explore All Features</span>
                        <FontAwesomeIcon icon={ faArrowRight } className='w-4 ml-4' />
                    </button>
                </div>
            </div>
        </section >
    )
}

export default Features
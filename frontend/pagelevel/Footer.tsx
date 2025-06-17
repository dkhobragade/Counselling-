import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faYoutube, faInstagram, faTwitter, faCcVisa, faGooglePay, faCcMastercard, faCcPaypal } from '@fortawesome/free-brands-svg-icons'
import { faPhoneAlt, faMoneyBillWave, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

const Footer = () =>
{
    return (
        <footer className="bg-gray-800 text-white pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div>
                        <h3 className="text-xl font-bold mb-4">MPSC Mentor</h3>
                        <p className="text-gray-400 mb-4">
                            Your trusted partner for MPSC preparation. We provide
                            personalized guidance to help you achieve your goals.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                            >
                                <FontAwesomeIcon icon={ faFacebook } />
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                            >
                                <FontAwesomeIcon icon={ faTwitter } />
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                            >
                                <FontAwesomeIcon icon={ faInstagram } />
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                            >
                                <FontAwesomeIcon icon={ faYoutube } />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                                >
                                    Courses
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                                >
                                    Counselling
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                                >
                                    Resources
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                                >
                                    Blog
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Support</h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                                >
                                    FAQ
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                                >
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                                >
                                    Terms & Conditions
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                                >
                                    Refund Policy
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <FontAwesomeIcon icon={ faMapMarkerAlt } className='mt-1 mr-3 text-gray-400 w-5' />
                                <span className="text-gray-400">
                                    123 Education Street, Mumbai, Maharashtra, India - 400001
                                </span>
                            </li>
                            <li className="flex items-center">
                                <FontAwesomeIcon icon={ faPhoneAlt } className='mr-3 text-gray-400 w-5' />
                                <span className="text-gray-400">+91 98765 43210</span>
                            </li>
                            <li className="flex items-center">
                                <FontAwesomeIcon icon={ faEnvelope } className='mr-3 text-gray-400 w-5' />
                                <span className="text-gray-400">support@mpscmentor.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-700 text-center">
                    <div className="flex justify-center space-x-6 mb-6">
                        <FontAwesomeIcon icon={ faCcVisa } className='text-2xl text-gray-400 w-5' />
                        <FontAwesomeIcon icon={ faCcMastercard } className='text-2xl text-gray-400 w-5' />
                        <FontAwesomeIcon icon={ faCcPaypal } className='text-2xl text-gray-400 w-5' />
                        <FontAwesomeIcon icon={ faGooglePay } className='text-2xl text-gray-400 w-5' />
                        <FontAwesomeIcon icon={ faMoneyBillWave } className='text-2xl text-gray-400 w-5' />
                    </div>
                    <p className="text-gray-500 text-sm">
                        &copy; { new Date().getFullYear() } MPSC Mentor. All rights
                        reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
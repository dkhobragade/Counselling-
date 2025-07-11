import React from 'react'
import { DownOutlined } from '@ant-design/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Header = () =>
{
    return (
        <header className="bg-white shadow-md fixed w-full  z-50">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="flex items-center">
                    <div className="text-2xl font-bold text-blue-700 mr-8 flex items-center">
                        <i className="fas fa-graduation-cap text-3xl mr-2"></i> DKMPSC
                    </div>
                    <nav className="hidden lg:flex items-center space-x-6">
                        <div className="relative group">
                            <button className="flex items-center text-gray-700 hover:text-blue-600 font-medium cursor-pointer">
                                Courses <DownOutlined className='ml-1' />
                            </button>
                            <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 hidden group-hover:block">
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                                >
                                    Prelims
                                </a>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                                >
                                    Mains
                                </a>
                            </div>
                        </div>
                        <div className="relative group">
                            <button className="flex items-center text-gray-700 hover:text-blue-600 font-medium cursor-pointer">
                                PYQ <DownOutlined className='ml-1' />
                            </button>
                            <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 hidden group-hover:block">
                                <a
                                    href="download"
                                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                                >
                                    Download
                                </a>
                                <a
                                    href="test"
                                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                                >
                                    Test
                                </a>
                            </div>
                        </div>
                        <a
                            href="#"
                            className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer"
                        >
                            Free Initiative
                        </a>
                        <a
                            href="counselling"
                            className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer"
                        >
                            Counselling
                        </a>
                    </nav>
                </div>
                <div className="flex items-center space-x-4">
                    <button className="px-6 py-2 text-sm font-medium text-blue-700 border border-blue-700 rounded-lg hover:bg-blue-50 !rounded-button whitespace-nowrap cursor-pointer">
                        Sign In
                    </button>
                    <button className="px-6 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 !rounded-button whitespace-nowrap cursor-pointer">
                        Register
                    </button>
                    <button className="lg:hidden text-gray-500 hover:text-gray-700 cursor-pointer">
                        <FontAwesomeIcon icon={ faBars } className='w-5' />
                    </button>
                </div>
            </div>
            {/* Mobile Menu */ }
            <div className="lg:hidden">
                <div className="px-4 py-3 space-y-1">
                    <div className="relative">
                        <button className="flex items-center w-full px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg">
                            <span>Courses</span>
                            { " " }<DownOutlined />
                        </button>
                        <div className="hidden px-4 py-2">
                            <a
                                href="#"
                                className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
                            >
                                Prelims
                            </a>
                            <a
                                href="#"
                                className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
                            >
                                Mains
                            </a>
                        </div>
                    </div>
                    <div className="relative">
                        <button className="flex items-center w-full px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg">
                            <span>PYQ</span>
                            { " " }<DownOutlined />
                        </button>
                        <div className="hidden px-4 py-2">
                            <a
                                href="download"
                                className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
                            >
                                Download
                            </a>
                            <a
                                href="test"
                                className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
                            >
                                Test
                            </a>
                        </div>
                    </div>
                    <a
                        href="#"
                        className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
                    >
                        Free Initiative
                    </a>
                    <a
                        href="#"
                        className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
                    >
                        Demo
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header
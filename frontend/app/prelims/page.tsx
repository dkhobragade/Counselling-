"use client"

import Course from '@/pagelevel/Prelims/Course'
import CTA from '@/pagelevel/Prelims/CTA'
import FAQs from '@/pagelevel/Prelims/FAQs'
import Overview from '@/pagelevel/Prelims/Overview'
import Stats from '@/pagelevel/Prelims/Stats'
import Syllabus from '@/pagelevel/Prelims/Syllabus'
import { Tabs } from 'antd'
import React, { useState } from 'react'

const page = () =>
{
    const [ activeTab, setActiveTab ] = useState<string>( "overview" );

    const handleTabChange = ( key: string ) =>
    {
        setActiveTab( key );
    };


    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */ }
            <div className="relative overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="relative z-10 pb-8 bg-gray-50 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
                        <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                            <div className="sm:text-center lg:text-left">
                                <div className="inline-block bg-blue-100 rounded-full px-3 py-1 text-sm font-semibold text-blue-600 mb-4">
                                    #BEST Platform for MPSC Preparation
                                </div>
                                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                    <span className="block">Master Your</span>
                                    <span className="block text-gray-900">MPSC</span>
                                    <span className="block text-blue-600">Prelims</span>
                                </h1>
                                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                    Join thousands of successful candidates who transformed their
                                    MPSC preparation with our expert guidance and comprehensive
                                    study resources.
                                </p>
                                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                    <div className="rounded-md shadow">
                                        <a
                                            href="#"
                                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 !rounded-button whitespace-nowrap cursor-pointer"
                                        >
                                            Enroll Now
                                        </a>
                                    </div>
                                    <div className="mt-3 sm:mt-0 sm:ml-3">
                                        <a
                                            href="#"
                                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10 !rounded-button whitespace-nowrap cursor-pointer"
                                        >
                                            Free Demo
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <img
                        className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                        src="https://readdy.ai/api/search-image?query=A%20professional%20young%20Indian%20student%20studying%20for%20MPSC%20exam%20with%20books%20and%20digital%20tablet%2C%20in%20a%20modern%20library%20setting%20with%20soft%20natural%20lighting%2C%20focused%20expression%2C%20wearing%20casual%20formal%20attire%2C%20high%20quality%20educational%20environment&width=800&height=600&seq=hero1&orientation=landscape"
                        alt="MPSC Preparation"
                    />
                </div>
            </div>

            {/* Stats Section */ }
            <Stats />

            {/* Main Content */ }
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <Tabs
                    activeKey={ activeTab }
                    onChange={ handleTabChange }
                    className="prelims-tabs"
                    tabBarStyle={ { marginBottom: "24px" } }
                >
                    <Tabs.TabPane tab="Overview" key="overview">
                        <Overview />
                    </Tabs.TabPane>

                    <Tabs.TabPane tab="Syllabus" key="syllabus">
                        <Syllabus />
                    </Tabs.TabPane>

                    <Tabs.TabPane tab="Course Details" key="course">
                        <Course />
                    </Tabs.TabPane>

                    <Tabs.TabPane tab="FAQs" key="faqs">
                        <FAQs />
                    </Tabs.TabPane>
                </Tabs>
            </div>

            {/* CTA Section */ }
            <CTA />

        </div>
    )
}

export default page
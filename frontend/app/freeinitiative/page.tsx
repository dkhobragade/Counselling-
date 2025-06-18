"use client"

import React, { useState } from 'react'
import { BookOutlined, CalendarOutlined, CheckCircleOutlined, ClockCircleOutlined, FileTextOutlined, LockOutlined, PlayCircleOutlined, TeamOutlined, TrophyOutlined } from '@ant-design/icons'
import { Button, Progress, Tabs, Tag } from 'antd'

const page = () =>
{

    const [ selectedVideo, setSelectedVideo ] = useState<number>( 0 );
    const courseVideos = [
        {
            id: 1,
            title: "Introduction to Indian Polity",
            description:
                "Learn the fundamental concepts of Indian Constitution and Democracy",
            duration: "45:20",
            instructor: "Dr. Rajesh Kumar",
            thumbnail:
                "https://readdy.ai/api/search-image?query=Professional%20educational%20setup%20with%20modern%20digital%20screen%20showing%20Indian%20constitution%20and%20democracy%20concepts%2C%20clean%20minimal%20background%20with%20warm%20lighting&width=400&height=225&seq=v1&orientation=landscape",
            isLocked: false,
            progress: 100,
        },
        {
            id: 2,
            title: "Understanding Maharashtra Geography",
            description:
                "Comprehensive overview of Maharashtra's geographical features and divisions",
            duration: "52:15",
            instructor: "Prof. Priya Desai",
            thumbnail:
                "https://readdy.ai/api/search-image?query=Professional%20classroom%20setup%20with%20digital%20display%20showing%20Maharashtra%20map%20and%20geographical%20features%2C%20modern%20educational%20environment%20with%20clean%20background&width=400&height=225&seq=v2&orientation=landscape",
            isLocked: true,
            progress: 0,
        },
        {
            id: 3,
            title: "Economic Development & Planning",
            description: "Analysis of economic policies and development strategies",
            duration: "48:30",
            instructor: "Dr. Amit Sharma",
            thumbnail:
                "https://readdy.ai/api/search-image?query=Modern%20lecture%20hall%20with%20professional%20presentation%20of%20economic%20charts%20and%20graphs%2C%20clean%20educational%20environment%20with%20subtle%20lighting&width=400&height=225&seq=v3&orientation=landscape",
            isLocked: true,
            progress: 0,
        },
        {
            id: 4,
            title: "Environmental Studies",
            description: "Key concepts in environmental science and ecology",
            duration: "55:45",
            instructor: "Dr. Neha Patel",
            thumbnail:
                "https://readdy.ai/api/search-image?query=Professional%20educational%20setup%20showing%20environmental%20science%20concepts%20on%20digital%20display%2C%20modern%20classroom%20with%20clean%20minimal%20background&width=400&height=225&seq=v4&orientation=landscape",
            isLocked: true,
            progress: 0,
        },
    ];



    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <div className="text-2xl font-bold text-blue-600">
                            DKMPSC Academy
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium !rounded-button whitespace-nowrap cursor-pointer">
                            Back to Course
                        </button>
                    </div>
                </div>
            </header>
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Video Player Section */ }
                    <div className="lg:col-span-2">
                        <div className="bg-white shadow rounded-lg overflow-hidden">
                            <div className="aspect-w-16 aspect-h-9 relative">
                                <img
                                    src={ courseVideos[ selectedVideo ].thumbnail }
                                    alt={ courseVideos[ selectedVideo ].title }
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                                    <PlayCircleOutlined className="text-6xl text-white opacity-80 hover:opacity-100 cursor-pointer" />
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <h1 className="text-2xl font-bold text-gray-900">
                                        { courseVideos[ selectedVideo ].title }
                                    </h1>
                                    <Tag
                                        color={
                                            courseVideos[ selectedVideo ].isLocked
                                                ? "error"
                                                : "success"
                                        }
                                    >
                                        { courseVideos[ selectedVideo ].isLocked
                                            ? "Locked"
                                            : "Free Preview" }
                                    </Tag>
                                </div>
                                <p className="text-gray-600 mb-4">
                                    { courseVideos[ selectedVideo ].description }
                                </p>
                                <div className="flex items-center justify-between text-sm text-gray-500">
                                    <div className="flex items-center space-x-4">
                                        <span>
                                            <i className="fas fa-user-tie mr-2"></i>
                                            { courseVideos[ selectedVideo ].instructor }
                                        </span>
                                        <span>
                                            <i className="fas fa-clock mr-2"></i>
                                            { courseVideos[ selectedVideo ].duration }
                                        </span>
                                    </div>
                                    { courseVideos[ selectedVideo ].progress > 0 && (
                                        <span className="flex items-center text-green-600">
                                            <CheckCircleOutlined className="mr-1" /> Completed
                                        </span>
                                    ) }
                                </div>
                            </div>
                        </div>
                        {/* Course Description */ }
                        <div className="mt-8 bg-white shadow rounded-lg p-6">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">
                                About This Course
                            </h2>
                            <p className="text-gray-600 mb-4">
                                This comprehensive course covers all aspects of MPSC
                                examination preparation. Our expert faculty members provide
                                detailed insights and strategic approaches to help you master
                                the subjects effectively.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex items-center space-x-2">
                                    <i className="fas fa-book text-blue-600"></i>
                                    <span>24 Total Lectures</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <i className="fas fa-clock text-blue-600"></i>
                                    <span>40+ Hours Content</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <i className="fas fa-certificate text-blue-600"></i>
                                    <span>Certificate of Completion</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <i className="fas fa-mobile-alt text-blue-600"></i>
                                    <span>Mobile-Friendly</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Playlist Section */ }
                    <div className="lg:col-span-1">
                        <div className="bg-white shadow rounded-lg overflow-hidden">
                            <div className="p-4 bg-gray-50 border-b border-gray-200">
                                <h3 className="text-lg font-semibold text-gray-900">
                                    Course Content
                                </h3>
                                <p className="text-sm text-gray-600">
                                    4 lectures • 3h 22m total length
                                </p>
                            </div>
                            <div className="divide-y divide-gray-200">
                                { courseVideos.map( ( video, index ) => (
                                    <div
                                        key={ video.id }
                                        className={ `p-4 cursor-pointer hover:bg-gray-50 ${ selectedVideo === index ? "bg-blue-50" : "" }` }
                                        onClick={ () => setSelectedVideo( index ) }
                                    >
                                        <div className="flex items-start space-x-3">
                                            <div className="flex-shrink-0 relative w-32 h-20">
                                                <img
                                                    src={ video.thumbnail }
                                                    alt={ video.title }
                                                    className="w-full h-full object-cover rounded"
                                                />
                                                { video.isLocked && (
                                                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded">
                                                        <LockOutlined className="text-white text-lg" />
                                                    </div>
                                                ) }
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="text-sm font-medium text-gray-900 mb-1">
                                                    { video.title }
                                                </h4>
                                                <div className="flex items-center text-xs text-gray-500">
                                                    <span className="mr-2">{ video.duration }</span>
                                                    { video.progress === 100 && (
                                                        <Tag color="success" className="text-xs">
                                                            Completed
                                                        </Tag>
                                                    ) }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) ) }
                            </div>
                            <div className="p-4 bg-gray-50 border-t border-gray-200">
                                <Button
                                    type="primary"
                                    block
                                    className="!rounded-button bg-blue-600 hover:bg-blue-700 border-none whitespace-nowrap cursor-pointer"
                                >
                                    Enroll Now to Access All Lectures
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default page
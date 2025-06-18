import React from 'react'
import { courseFeatures, syllabusData, testimonials, upcomingBatches } from '@/helper/Constant'
import FAQs from '@/pagelevel/Prelims/FAQs'
import { BookOutlined, CheckCircleOutlined } from '@ant-design/icons'
import { Button, Progress, Tabs, Tag } from 'antd'

const page = () =>
{
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
                                    <span className="block text-blue-600">Mains</span>
                                </h1>
                                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                    Transform your MPSC Mains preparation with our comprehensive
                                    course designed to help you master descriptive answers and
                                    develop analytical thinking skills.
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
            <div className="bg-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-4">
                        <div className="bg-blue-50 overflow-hidden shadow rounded-lg">
                            <div className="px-4 py-5 sm:p-6 text-center">
                                <dt className="text-sm font-medium text-gray-500 truncate">
                                    Success Rate
                                </dt>
                                <dd className="mt-1 text-3xl font-semibold text-blue-600">
                                    92%
                                </dd>
                            </div>
                        </div>
                        <div className="bg-blue-50 overflow-hidden shadow rounded-lg">
                            <div className="px-4 py-5 sm:p-6 text-center">
                                <dt className="text-sm font-medium text-gray-500 truncate">
                                    Top 100 Ranks
                                </dt>
                                <dd className="mt-1 text-3xl font-semibold text-blue-600">
                                    47
                                </dd>
                            </div>
                        </div>
                        <div className="bg-blue-50 overflow-hidden shadow rounded-lg">
                            <div className="px-4 py-5 sm:p-6 text-center">
                                <dt className="text-sm font-medium text-gray-500 truncate">
                                    Students Enrolled
                                </dt>
                                <dd className="mt-1 text-3xl font-semibold text-blue-600">
                                    10,000+
                                </dd>
                            </div>
                        </div>
                        <div className="bg-blue-50 overflow-hidden shadow rounded-lg">
                            <div className="px-4 py-5 sm:p-6 text-center">
                                <dt className="text-sm font-medium text-gray-500 truncate">
                                    Years of Excellence
                                </dt>
                                <dd className="mt-1 text-3xl font-semibold text-blue-600">
                                    15+
                                </dd>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Main Content */ }
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <Tabs
                    // activeKey={ activeTab }
                    // onChange={ handleTabChange }
                    className="prelims-tabs"
                    tabBarStyle={ { marginBottom: "24px" } }
                >
                    <Tabs.TabPane tab="Overview" key="overview">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-2">
                                <div className="bg-white shadow rounded-lg p-6 mb-8">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                        MPSC Mains Examination
                                    </h2>
                                    <p className="text-gray-600 mb-4">
                                        The MPSC Mains examination is the second and most crucial
                                        stage of the State Services Examination. It consists of six
                                        descriptive papers including an optional subject, testing
                                        candidates' in-depth knowledge, analytical abilities, and
                                        writing skills. Success in Mains examination requires a
                                        thorough understanding of subjects and excellent answer
                                        writing skills.
                                    </p>
                                    <p className="text-gray-600 mb-4">
                                        The Prelims consists of two papers: General Studies (Paper
                                        I) and Civil Services Aptitude Test (CSAT - Paper II). While
                                        both papers are compulsory, candidates need to score a
                                        minimum of 33% in Paper II (CSAT) to qualify, but only Paper
                                        I marks are considered for merit ranking.
                                    </p>
                                    <div className="bg-blue-50 rounded-lg p-4 mb-4">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                            Exam Pattern
                                        </h3>
                                        <ul className="list-disc pl-5 text-gray-600 space-y-1">
                                            <li>Two compulsory papers (objective type)</li>
                                            <li>
                                                Paper I: General Studies - 100 marks (100 questions)
                                            </li>
                                            <li>Paper II: CSAT - 80 marks (80 questions)</li>
                                            <li>Duration: 2 hours for each paper</li>
                                            <li>
                                                Negative marking: 1/4th mark deducted for each wrong
                                                answer
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="bg-blue-50 rounded-lg p-4">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                            Important Dates (2025)
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <p className="text-sm text-gray-500">
                                                    Application Start Date
                                                </p>
                                                <p className="font-medium">August 15, 2025</p>
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500">
                                                    Application End Date
                                                </p>
                                                <p className="font-medium">September 5, 2025</p>
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500">
                                                    Admit Card Release
                                                </p>
                                                <p className="font-medium">October 10, 2025</p>
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500">
                                                    Examination Date
                                                </p>
                                                <p className="font-medium">October 25, 2025</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-1">
                                <div className="bg-white shadow rounded-lg p-6 mb-8">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                                        Why Choose Our Prelims Course?
                                    </h3>
                                    <ul className="space-y-3">
                                        { courseFeatures.slice( 0, 4 ).map( ( feature, index ) => (
                                            <li key={ index } className="flex">
                                                <div className="flex-shrink-0 text-blue-500 mt-1">
                                                    <CheckCircleOutlined />
                                                </div>
                                                <div className="ml-3">
                                                    <p className="text-sm font-medium text-gray-900">
                                                        { feature.title }
                                                    </p>
                                                    <p className="text-sm text-gray-500">
                                                        { feature.description }
                                                    </p>
                                                </div>
                                            </li>
                                        ) ) }
                                    </ul>
                                    <Button
                                        type="primary"
                                        block
                                        className="mt-4 !rounded-button bg-blue-600 hover:bg-blue-700 border-none whitespace-nowrap cursor-pointer"
                                    >
                                        View Full Course Details
                                    </Button>
                                </div>
                                <div className="bg-white shadow rounded-lg p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                                        Upcoming Batches
                                    </h3>
                                    <ul className="space-y-4">
                                        { upcomingBatches.map( ( batch, index ) => (
                                            <li
                                                key={ index }
                                                className="border-b border-gray-200 pb-3 last:border-b-0 last:pb-0"
                                            >
                                                <p className="font-medium text-gray-900">
                                                    { batch.name }
                                                </p>
                                                <div className="flex justify-between text-sm text-gray-500 mt-1">
                                                    <span>Starts: { batch.startDate }</span>
                                                    <span>{ batch.duration }</span>
                                                </div>
                                                <div className="flex justify-between items-center mt-2">
                                                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                                                        { batch.mode }
                                                    </span>
                                                    <span className="text-xs text-orange-600">
                                                        { batch.seats }
                                                    </span>
                                                </div>
                                            </li>
                                        ) ) }
                                    </ul>
                                    <Button
                                        type="default"
                                        block
                                        className="mt-4 !rounded-button whitespace-nowrap cursor-pointer"
                                    >
                                        Enquire Now
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Syllabus" key="syllabus">
                        <div className="bg-white shadow rounded-lg p-6 mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                Detailed Syllabus Breakdown
                            </h2>
                            { syllabusData.map( ( paper, paperIndex ) => (
                                <div key={ paperIndex } className="mb-8 last:mb-0">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between bg-blue-50 p-4 rounded-lg mb-4">
                                        <h3 className="text-xl font-bold text-gray-900">
                                            { paper.paper }
                                        </h3>
                                        <div className="flex flex-col md:flex-row md:items-center mt-2 md:mt-0">
                                            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm mr-0 md:mr-3 mb-2 md:mb-0">
                                                { paper.marks } Marks
                                            </span>
                                            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                                                { paper.duration }
                                            </span>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        { paper.sections.map( ( section, sectionIndex ) => (
                                            <div
                                                key={ sectionIndex }
                                                className="border border-gray-200 rounded-lg p-4"
                                            >
                                                <div className="flex justify-between items-center mb-2">
                                                    <h4 className="font-medium text-gray-900">
                                                        { section.name }
                                                    </h4>
                                                    <span className="text-sm font-medium text-blue-600">
                                                        { section.percentage }%
                                                    </span>
                                                </div>
                                                <Progress
                                                    percent={ section.percentage }
                                                    showInfo={ false }
                                                    strokeColor="#2563EB"
                                                    trailColor="#EFF6FF"
                                                />
                                            </div>
                                        ) ) }
                                    </div>
                                </div>
                            ) ) }
                        </div>
                        <div className="bg-white shadow rounded-lg p-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                Recommended Books & Resources
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                        Paper I (General Studies)
                                    </h3>
                                    <ul className="space-y-3">
                                        <li className="flex">
                                            <div className="flex-shrink-0 text-blue-500 mt-1">
                                                <BookOutlined />
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-sm font-medium text-gray-900">
                                                    Indian Polity
                                                </p>
                                                <p className="text-sm text-gray-500">M. Laxmikanth</p>
                                            </div>
                                        </li>
                                        <li className="flex">
                                            <div className="flex-shrink-0 text-blue-500 mt-1">
                                                <BookOutlined />
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-sm font-medium text-gray-900">
                                                    Indian Economy
                                                </p>
                                                <p className="text-sm text-gray-500">Ramesh Singh</p>
                                            </div>
                                        </li>
                                        <li className="flex">
                                            <div className="flex-shrink-0 text-blue-500 mt-1">
                                                <BookOutlined />
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-sm font-medium text-gray-900">
                                                    History of Modern India
                                                </p>
                                                <p className="text-sm text-gray-500">Bipan Chandra</p>
                                            </div>
                                        </li>
                                        <li className="flex">
                                            <div className="flex-shrink-0 text-blue-500 mt-1">
                                                <BookOutlined />
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-sm font-medium text-gray-900">
                                                    Geography of India
                                                </p>
                                                <p className="text-sm text-gray-500">Majid Husain</p>
                                            </div>
                                        </li>
                                        <li className="flex">
                                            <div className="flex-shrink-0 text-blue-500 mt-1">
                                                <BookOutlined />
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-sm font-medium text-gray-900">
                                                    Maharashtra - History & Culture
                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    DKMPSC Study Material
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                        Paper II (CSAT)
                                    </h3>
                                    <ul className="space-y-3">
                                        <li className="flex">
                                            <div className="flex-shrink-0 text-blue-500 mt-1">
                                                <BookOutlined />
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-sm font-medium text-gray-900">
                                                    Analytical Reasoning
                                                </p>
                                                <p className="text-sm text-gray-500">M.K. Pandey</p>
                                            </div>
                                        </li>
                                        <li className="flex">
                                            <div className="flex-shrink-0 text-blue-500 mt-1">
                                                <BookOutlined />
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-sm font-medium text-gray-900">
                                                    Quantitative Aptitude
                                                </p>
                                                <p className="text-sm text-gray-500">R.S. Aggarwal</p>
                                            </div>
                                        </li>
                                        <li className="flex">
                                            <div className="flex-shrink-0 text-blue-500 mt-1">
                                                <BookOutlined />
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-sm font-medium text-gray-900">
                                                    Logical Reasoning
                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    DKMPSC Study Material
                                                </p>
                                            </div>
                                        </li>
                                        <li className="flex">
                                            <div className="flex-shrink-0 text-blue-500 mt-1">
                                                <BookOutlined />
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-sm font-medium text-gray-900">
                                                    Comprehension & English Language
                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    Plinth to Paramount
                                                </p>
                                            </div>
                                        </li>
                                        <li className="flex">
                                            <div className="flex-shrink-0 text-blue-500 mt-1">
                                                <BookOutlined />
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-sm font-medium text-gray-900">
                                                    CSAT Solved Papers
                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    DKMPSC Previous Years' Solutions
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Course Details" key="course">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-2">
                                <div className="bg-white shadow rounded-lg p-6 mb-8">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                        MPSC Mains Advanced Course
                                    </h2>
                                    <div className="flex flex-wrap gap-3 mb-6">
                                        <Tag color="blue" className="px-3 py-1 text-sm">
                                            Comprehensive Coverage
                                        </Tag>
                                        <Tag color="green" className="px-3 py-1 text-sm">
                                            Expert Faculty
                                        </Tag>
                                        <Tag color="orange" className="px-3 py-1 text-sm">
                                            Bilingual Teaching
                                        </Tag>
                                        <Tag color="purple" className="px-3 py-1 text-sm">
                                            Regular Assessment
                                        </Tag>
                                        <Tag color="cyan" className="px-3 py-1 text-sm">
                                            Doubt Resolution
                                        </Tag>
                                    </div>
                                    <p className="text-gray-600 mb-6">
                                        Our MPSC Prelims Foundation Course is meticulously designed
                                        to provide aspirants with a structured and comprehensive
                                        preparation strategy. The course covers the entire syllabus
                                        of both Paper I (General Studies) and Paper II (CSAT) with a
                                        focus on conceptual clarity and application-based learning.
                                    </p>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                                        Course Highlights
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                        { courseFeatures.map( ( feature, index ) => (
                                            <div
                                                key={ index }
                                                className="bg-blue-50 rounded-lg p-4 flex"
                                            >
                                                {/* <div className="flex-shrink-0 text-blue-600 mt-1">
                                                    { feature.icon }
                                                </div> */}
                                                <div className="ml-3">
                                                    <p className="font-medium text-gray-900">
                                                        { feature.title }
                                                    </p>
                                                    <p className="text-sm text-gray-600">
                                                        { feature.description }
                                                    </p>
                                                </div>
                                            </div>
                                        ) ) }
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                                        Course Duration & Schedule
                                    </h3>
                                    <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <p className="text-sm text-gray-500">Duration</p>
                                                <p className="font-medium">4 Months (16 Weeks)</p>
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500">
                                                    Classes Per Week
                                                </p>
                                                <p className="font-medium">5 Days (Monday to Friday)</p>
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500">Class Duration</p>
                                                <p className="font-medium">3 Hours per day</p>
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500">
                                                    Mode of Instruction
                                                </p>
                                                <p className="font-medium">Classroom & Online Live</p>
                                            </div>
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                                        Course Fee Structure
                                    </h3>
                                    <div className="border border-gray-200 rounded-lg overflow-hidden mb-6">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        Course Type
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        Fee
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        Duration
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200">
                                                <tr>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                        Comprehensive Mains Program
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        ₹75,000
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        6 Months
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                        Online Mains Program
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        ₹60,000
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        6 Months
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                        Weekend Mains Batch
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        ₹65,000
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        8 Months
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                                        <div className="flex">
                                            <div className="flex-shrink-0">
                                                <i className="fas fa-info-circle text-yellow-400"></i>
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-sm text-yellow-700">
                                                    Early bird discount of 10% available for registrations
                                                    before July 15, 2025. EMI options available.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-1">
                                <div className="bg-white shadow rounded-lg p-6 mb-8">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                                        Faculty Experts
                                    </h3>
                                    <div className="space-y-4">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                                                <img
                                                    src="https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20an%20Indian%20male%20professor%20in%20his%2040s%20with%20glasses%20and%20formal%20attire%2C%20neutral%20background%2C%20high%20quality%20portrait%20with%20warm%20lighting&width=100&height=100&seq=faculty1&orientation=squarish"
                                                    alt="Dr. Rajesh Sharma"
                                                    className="h-full w-full object-cover"
                                                />
                                            </div>
                                            <div className="ml-4">
                                                <h4 className="text-sm font-medium text-gray-900">
                                                    Dr. Rajesh Sharma
                                                </h4>
                                                <p className="text-xs text-gray-500">
                                                    History & Polity Expert
                                                </p>
                                                <p className="text-xs text-gray-500">
                                                    15+ years experience
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                                                <img
                                                    src="https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20an%20Indian%20female%20professor%20in%20her%2030s%20with%20formal%20business%20attire%2C%20neutral%20background%2C%20high%20quality%20portrait%20with%20warm%20lighting&width=100&height=100&seq=faculty2&orientation=squarish"
                                                    alt="Dr. Priya Desai"
                                                    className="h-full w-full object-cover"
                                                />
                                            </div>
                                            <div className="ml-4">
                                                <h4 className="text-sm font-medium text-gray-900">
                                                    Dr. Priya Desai
                                                </h4>
                                                <p className="text-xs text-gray-500">
                                                    Economics Expert
                                                </p>
                                                <p className="text-xs text-gray-500">
                                                    12+ years experience
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                                                <img
                                                    src="https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20an%20Indian%20male%20professor%20in%20his%2030s%20with%20formal%20shirt%2C%20neutral%20background%2C%20high%20quality%20portrait%20with%20warm%20lighting&width=100&height=100&seq=faculty3&orientation=squarish"
                                                    alt="Prof. Amit Kulkarni"
                                                    className="h-full w-full object-cover"
                                                />
                                            </div>
                                            <div className="ml-4">
                                                <h4 className="text-sm font-medium text-gray-900">
                                                    Prof. Amit Kulkarni
                                                </h4>
                                                <p className="text-xs text-gray-500">
                                                    CSAT & Aptitude Expert
                                                </p>
                                                <p className="text-xs text-gray-500">
                                                    10+ years experience
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white shadow rounded-lg p-6 mb-8">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                                        Success Stories
                                    </h3>
                                    <div className="space-y-4">
                                        { testimonials.map( ( testimonial, index ) => (
                                            <div
                                                key={ index }
                                                className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0"
                                            >
                                                <div className="flex justify-between items-center mb-2">
                                                    <p className="font-medium text-gray-900">
                                                        { testimonial.name }
                                                    </p>
                                                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                                                        { testimonial.rank }
                                                    </span>
                                                </div>
                                                <p className="text-sm text-gray-600 italic mb-1">
                                                    "{ testimonial.content }"
                                                </p>
                                                <p className="text-xs text-gray-500 text-right">
                                                    Batch of { testimonial.year }
                                                </p>
                                            </div>
                                        ) ) }
                                    </div>
                                    <Button
                                        type="default"
                                        block
                                        className="mt-4 !rounded-button whitespace-nowrap cursor-pointer"
                                    >
                                        View More Success Stories
                                    </Button>
                                </div>
                                <div className="bg-gradient-to-r from-blue-600 to-blue-800 shadow rounded-lg p-6">
                                    <h3 className="text-xl font-bold text-white mb-4">
                                        Get in Touch
                                    </h3>
                                    <p className="text-blue-100 mb-4">
                                        Have questions about our MPSC Prelims course? Contact our
                                        counselors for personalized guidance.
                                    </p>
                                    <div className="space-y-3 mb-4">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 text-white">
                                                <i className="fas fa-phone-alt"></i>
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-sm text-white">+91 9876543210</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 text-white">
                                                <i className="fas fa-envelope"></i>
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-sm text-white">info@dkmpsc.com</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 text-white">
                                                <i className="fas fa-map-marker-alt"></i>
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-sm text-white">
                                                    123, Education Hub, Mumbai
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <Button
                                        type="default"
                                        block
                                        className="bg-white text-blue-600 hover:bg-blue-50 !rounded-button whitespace-nowrap cursor-pointer"
                                    >
                                        Request Callback
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="FAQs" key="faqs">
                        <FAQs />
                    </Tabs.TabPane>
                </Tabs>
            </div>
            {/* CTA Section */ }
            <div className="bg-blue-600">
                <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                    <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                        <span className="block">Ready to start your MPSC journey?</span>
                        <span className="block text-blue-200">
                            Join our next batch and transform your preparation.
                        </span>
                    </h2>
                    <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                        <div className="inline-flex rounded-md shadow">
                            <a
                                href="#"
                                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 !rounded-button whitespace-nowrap cursor-pointer"
                            >
                                Enroll Now
                            </a>
                        </div>
                        <div className="ml-3 inline-flex rounded-md shadow">
                            <a
                                href="#"
                                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-700 !rounded-button whitespace-nowrap cursor-pointer"
                            >
                                Download Brochure
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default page
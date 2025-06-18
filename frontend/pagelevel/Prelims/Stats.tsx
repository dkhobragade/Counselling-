import React from 'react'

const Stats = () =>
{
    return (
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
    )
}

export default Stats
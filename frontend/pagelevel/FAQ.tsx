import React from 'react'
import { faqs } from '@/helper/Constant'
import { Collapse } from 'antd'

const FAQ = () =>
{
    return (
        <section className="bg-gray-50 py-16" >
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Find answers to common questions about our counselling services.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <Collapse items={ faqs } defaultActiveKey={ 1 } />
                </div>

                <div className="mt-12 text-center">
                    <p className="text-gray-600 mb-4">Still have questions?</p>
                    <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors !rounded-button whitespace-nowrap cursor-pointer">
                        Contact Support
                    </button>
                </div>
            </div>
        </section >

    )
}

export default FAQ
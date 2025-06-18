"use client"

import React from 'react'
import { EyeInvisibleOutlined, EyeOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Checkbox from 'antd/es/checkbox/Checkbox';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Button, Divider, Form, Input } from 'antd';

const page = () =>
{
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full bg-white rounded-lg shadow-xl p-8">
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">Welcome Back</h2>
                    <p className="text-gray-600 mt-1">
                        Sign in to continue to your account
                    </p>
                </div>

                <Form layout="vertical" className="mt-6">
                    <Form.Item
                        name="email"
                        rules={ [
                            {
                                required: true,
                                message: "Please input your email or mobile number!",
                            },
                        ] }
                        className="mb-4"
                    >
                        <Input
                            prefix={ <MailOutlined className="text-gray-400 mr-2" /> }
                            placeholder="Email or Mobile Number"
                            size="large"
                            autoComplete='new-password'
                            className="rounded-md py-2 px-4 border-gray-300 text-sm"
                        />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={ [
                            { required: true, message: "Please input your password!" },
                        ] }
                        className="mb-2"
                    >
                        <Input.Password
                            prefix={ <LockOutlined className="text-gray-400 mr-2" /> }
                            placeholder="Password"
                            size="large"
                            autoComplete='new-password'
                            className="rounded-md py-2 px-4 border-gray-300 text-sm"
                            iconRender={ ( visible ) =>
                                visible ? (
                                    <EyeOutlined className="cursor-pointer text-gray-400" />
                                ) : (
                                    <EyeInvisibleOutlined className="cursor-pointer text-gray-400" />
                                )
                            }
                        />
                    </Form.Item>

                    <div className="flex justify-between items-center mb-6">
                        <Form.Item name="remember" valuePropName="checked">
                            <Checkbox className="text-sm text-gray-600">
                                Remember me
                            </Checkbox>
                        </Form.Item>
                        <a
                            href="#"
                            className="text-sm text-blue-600 hover:text-blue-800 whitespace-nowrap"
                        >
                            Forgot Password?
                        </a>
                    </div>

                    <Form.Item className="mb-4">
                        <Button
                            type="primary"
                            htmlType="submit"
                            size="large"
                            block
                            className="!rounded-button bg-blue-600 hover:bg-blue-700 border-none h-12 font-medium whitespace-nowrap cursor-pointer"
                        >
                            Login
                        </Button>
                    </Form.Item>

                    <Divider className="my-6">
                        <span className="text-gray-500 text-sm px-2">OR</span>
                    </Divider>

                    <div className="space-y-3">
                        <button
                            type="button"
                            className="!rounded-button flex items-center justify-center w-full border border-gray-300 py-2.5 px-4 bg-white hover:bg-gray-50 transition-colors whitespace-nowrap cursor-pointer"
                        >
                            <FontAwesomeIcon icon={ faGoogle } className='text-red-500 mr-3 w-5' />
                            <span>Continue with Google</span>
                        </button>
                    </div>

                    <div className="text-center mt-6">
                        <p className="text-gray-600 text-sm">
                            Don't have an account?
                            <a
                                href="#"
                                className="text-blue-600 hover:text-blue-800 ml-1 font-medium"
                                onClick={ ( e ) =>
                                {
                                    e.preventDefault();
                                } }
                            >
                                Sign Up
                            </a>
                        </p>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default page
"use client"

import { useState } from 'react';
import { EyeInvisibleOutlined, EyeOutlined, LockOutlined, MailOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Divider, Form, Input, Tabs } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';


const page = () =>
{

    const [ activeTab, setActiveTab ] = useState<string>( "login" );
    const [ passwordVisible, setPasswordVisible ] = useState<boolean>( false );
    const [ confirmPasswordVisible, setConfirmPasswordVisible ] =
        useState<boolean>( false );
    const [ password, setPassword ] = useState<string>( "" );

    const getPasswordStrength = (
        password: string,
    ): { strength: number; text: string; color: string } =>
    {
        if ( !password ) return { strength: 0, text: "", color: "" };

        let strength = 0;
        if ( password.length >= 8 ) strength += 1;
        if ( /[A-Z]/.test( password ) ) strength += 1;
        if ( /[a-z]/.test( password ) ) strength += 1;
        if ( /[0-9]/.test( password ) ) strength += 1;
        if ( /[^A-Za-z0-9]/.test( password ) ) strength += 1;

        const strengthMap = [
            { text: "Weak", color: "bg-red-500" },
            { text: "Fair", color: "bg-orange-500" },
            { text: "Good", color: "bg-yellow-500" },
            { text: "Strong", color: "bg-blue-500" },
            { text: "Very Strong", color: "bg-green-500" },
        ];

        return {
            strength,
            text: strengthMap[ strength - 1 ]?.text || "",
            color: strengthMap[ strength - 1 ]?.color || "",
        };
    };

    const passwordStrength = getPasswordStrength( password );

    const handleTabChange = ( key: string ) =>
    {
        setActiveTab( key );
    };


    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full bg-white rounded-lg shadow-xl p-8">
                <Tabs
                    activeKey={ activeTab }
                    onChange={ handleTabChange }
                    centered
                    className="auth-tabs"
                >
                    <Tabs.TabPane tab="Login" key="login">
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
                                            setActiveTab( "signup" );
                                        } }
                                    >
                                        Sign Up
                                    </a>
                                </p>
                            </div>
                        </Form>
                    </Tabs.TabPane>

                    <Tabs.TabPane tab="Sign Up" key="signup">
                        <div className="text-center mb-6">
                            <h2 className="text-2xl font-bold text-gray-800">
                                Create your account
                            </h2>
                            <p className="text-gray-600 mt-1">Join MPSC Coaching today</p>
                        </div>

                        <Form layout="vertical" className="mt-6">
                            <Form.Item
                                name="fullName"
                                rules={ [
                                    { required: true, message: "Please input your full name!" },
                                ] }
                                className="mb-4"
                            >
                                <Input
                                    prefix={ <UserOutlined className="text-gray-400 mr-2" /> }
                                    placeholder="Full Name"
                                    size="large"
                                    className="rounded-md py-2 px-4 border-gray-300 text-sm"
                                />
                            </Form.Item>

                            <Form.Item
                                name="email"
                                rules={ [
                                    {
                                        required: true,
                                        message: "Please input your email address!",
                                    },
                                    {
                                        type: "email",
                                        message: "Please enter a valid email address!",
                                    },
                                ] }
                                className="mb-4"
                            >
                                <Input
                                    prefix={ <MailOutlined className="text-gray-400 mr-2" /> }
                                    placeholder="Email Address"
                                    autoComplete='new-password'
                                    size="large"
                                    className="rounded-md py-2 px-4 border-gray-300 text-sm"
                                />
                            </Form.Item>

                            <Form.Item
                                name="mobile"
                                rules={ [
                                    {
                                        required: true,
                                        message: "Please input your mobile number!",
                                    },
                                    {
                                        pattern: /^[0-9]{10}$/,
                                        message: "Please enter a valid 10-digit mobile number!",
                                    },
                                ] }
                                className="mb-4"
                            >
                                <Input
                                    prefix={ <PhoneOutlined className="text-gray-400 mr-2" /> }
                                    placeholder="Mobile Number"
                                    size="large"
                                    className="rounded-md py-2 px-4 border-gray-300 text-sm"
                                />
                            </Form.Item>

                            <Form.Item
                                name="password"
                                rules={ [
                                    { required: true, message: "Please input your password!" },
                                    {
                                        min: 8,
                                        message: "Password must be at least 8 characters!",
                                    },
                                ] }
                                className="mb-2"
                            >
                                <div className="relative">
                                    <Input
                                        prefix={ <LockOutlined className="text-gray-400 mr-2" /> }
                                        type={ passwordVisible ? "text" : "password" }
                                        placeholder="Password"
                                        autoComplete='new-password'
                                        size="large"
                                        className="rounded-md py-2 px-4 border-gray-300 text-sm w-full"
                                        onChange={ ( e ) => setPassword( e.target.value ) }
                                    />
                                    <div
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-400"
                                        onClick={ () => setPasswordVisible( !passwordVisible ) }
                                    >
                                        { passwordVisible ? (
                                            <EyeOutlined />
                                        ) : (
                                            <EyeInvisibleOutlined />
                                        ) }
                                    </div>
                                </div>
                            </Form.Item>

                            { password && (
                                <div className="mb-4">
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                                            <div
                                                className={ `h-full ${ passwordStrength.color }` }
                                                style={ { width: `${ passwordStrength.strength * 20 }%` } }
                                            ></div>
                                        </div>
                                        <span className="text-xs text-gray-600">
                                            { passwordStrength.text }
                                        </span>
                                    </div>
                                    <ul className="text-xs text-gray-500 list-disc pl-5">
                                        <li
                                            className={ password.length >= 8 ? "text-green-500" : "" }
                                        >
                                            At least 8 characters
                                        </li>
                                        <li
                                            className={ /[A-Z]/.test( password ) ? "text-green-500" : "" }
                                        >
                                            At least one uppercase letter
                                        </li>
                                        <li
                                            className={ /[0-9]/.test( password ) ? "text-green-500" : "" }
                                        >
                                            At least one number
                                        </li>
                                        <li
                                            className={
                                                /[^A-Za-z0-9]/.test( password ) ? "text-green-500" : ""
                                            }
                                        >
                                            At least one special character
                                        </li>
                                    </ul>
                                </div>
                            ) }

                            <Form.Item
                                name="confirmPassword"
                                dependencies={ [ "password" ] }
                                rules={ [
                                    { required: true, message: "Please confirm your password!" },
                                    ( { getFieldValue } ) => ( {
                                        validator ( _, value )
                                        {
                                            if ( !value || getFieldValue( "password" ) === value )
                                            {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject(
                                                new Error( "The two passwords do not match!" ),
                                            );
                                        },
                                    } ),
                                ] }
                                className="mb-6"
                            >
                                <div className="relative">
                                    <Input
                                        prefix={ <LockOutlined className="text-gray-400 mr-2" /> }
                                        type={ confirmPasswordVisible ? "text" : "password" }
                                        placeholder="Confirm Password"
                                        autoComplete='new-password'
                                        size="large"
                                        className="rounded-md py-2 px-4 border-gray-300 text-sm w-full"
                                    />
                                    <div
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-400"
                                        onClick={ () =>
                                            setConfirmPasswordVisible( !confirmPasswordVisible )
                                        }
                                    >
                                        { confirmPasswordVisible ? (
                                            <EyeOutlined />
                                        ) : (
                                            <EyeInvisibleOutlined />
                                        ) }
                                    </div>
                                </div>
                            </Form.Item>

                            <Form.Item className="mb-4">
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    size="large"
                                    block
                                    className="!rounded-button bg-blue-600 hover:bg-blue-700 border-none h-12 font-medium whitespace-nowrap cursor-pointer"
                                >
                                    Sign Up
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
                                    <FontAwesomeIcon icon={ faGoogle } className='text-red-500 mr-3 text-lg' />
                                    <span>Sign up with Google</span>
                                </button>
                            </div>

                            <div className="text-center mt-6">
                                <p className="text-gray-600 text-sm">
                                    Already have an account?
                                    <a
                                        href="#"
                                        className="text-blue-600 hover:text-blue-800 ml-1 font-medium"
                                        onClick={ ( e ) =>
                                        {
                                            e.preventDefault();
                                            setActiveTab( "login" );
                                        } }
                                    >
                                        Login
                                    </a>
                                </p>
                            </div>

                            <div className="text-center mt-4">
                                <p className="text-xs text-gray-500">
                                    By signing up, you agree to our
                                    <a
                                        href="#"
                                        className="text-blue-600 hover:text-blue-800 mx-1"
                                    >
                                        Terms of Service
                                    </a>
                                    and
                                    <a
                                        href="#"
                                        className="text-blue-600 hover:text-blue-800 mx-1"
                                    >
                                        Privacy Policy
                                    </a>
                                </p>
                            </div>
                        </Form>
                    </Tabs.TabPane>
                </Tabs>
            </div>
        </div>

    )
}

export default page
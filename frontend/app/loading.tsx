import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'
import React from 'react'

const loading = () =>
{
    return (
        <Spin indicator={ <LoadingOutlined className='w-100' /> } />
    )
}

export default loading
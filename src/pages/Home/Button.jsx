import React from 'react'
import React from 'react';
import { Button, Space } from 'antd';

const Button = () => {
    return (
        <Space className="site-button-ghost-wrapper" wrap>
            <Button type="danger" ghost>
                Primary
            </Button>
            <Button ghost>Default</Button>
            <Button type="dashed" ghost>
                Dashed
            </Button>
            <Button type="danger" danger ghost>
                Danger
            </Button>
        </Space>
    )
}

export default Button
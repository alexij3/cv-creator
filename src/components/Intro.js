import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { FormOutlined } from '@ant-design/icons';

const Intro = () => {
    return (
        <div className="intro-container">
            <p className="about-cv">
            </p>

            <Link to="/steps">
                <Button type="primary" shape="round" size="large" icon={<FormOutlined />}>
                    Create a new CV
                </Button>
            </Link>
            <Link to="/steps?mycv=true">
                <Button type="primary" shape="round" size="large" icon={<FormOutlined />}>
                    View a CV
                </Button>
            </Link>
        </div>
    );
};

export default Intro;

import React from 'react';
import {Input} from 'antd';

const ObjectivesStep = ({objectives}) => {
    const hangleObjectivesChange = ({target}) => {
        objectives.value = target.value;
    };

    return (
        <Input.TextArea rows={4} onChange={hangleObjectivesChange} />
    );
};

export default ObjectivesStep;
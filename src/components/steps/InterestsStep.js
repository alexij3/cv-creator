import React, { useState } from 'react';
import { Input, Tag } from 'antd';

const InterestsStep = ({ interests, setInterests }) => {
    const [value, setValue] = useState('');

    const addInterest = () => {
        if (value.trim() !== '' && !interests.includes(value)) {
            setInterests([...interests, value]);
            setValue('');
        }
    };

    const removeTag = interest => {
        const filteredInterests = interests.filter(s => s !== interest);
        setInterests(filteredInterests);
    }

    return (
        <>
            <Input.Search
                placeholder="Your interests"
                onPressEnter={addInterest}
                enterButton="Add"
                value={value}
                onChange={({ target }) => setValue(target.value)}
                onSearch={addInterest}
            />
            {
                interests.map(interest => <Tag
                    key={interest}
                    closable
                    onClose={() => removeTag(interest)}>
                    {interest}
                </Tag>)
            }
        </>
    );
};

export default InterestsStep;
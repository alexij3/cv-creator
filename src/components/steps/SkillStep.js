import React, { useState } from 'react';
import { Input, Tag } from 'antd';

const SkillStep = ({ skills, setSkills }) => {
    const [value, setValue] = useState('');

    const addSkill = () => {
        if (value.trim() !== '' && !skills.includes(value)) {
            setSkills([...skills, value]);
            setValue('');
        }
    };

    const removeTag = skill => {
        const filteredSkills = skills.filter(s => s !== skill);
        setSkills(filteredSkills);
    }

    return (
        <>
            <Input.Search
                placeholder="Your skills"
                className="search"
                onPressEnter={addSkill}
                enterButton="Add"
                value={value}
                onChange={({ target }) => setValue(target.value)}
                onSearch={addSkill}
            />
            {
                skills.map(skill => <Tag
                    key={skill}
                    closable
                    onClose={() => removeTag(skill)}>
                    {skill}
                </Tag>)
            }
        </>
    );
};

export default SkillStep;
import React, { useState } from 'react';
import { Input, Tag } from 'antd';

const LanguageStep = ({ languages, setLanguages }) => {
    const [value, setValue] = useState('');

    const addLanguage = () => {
        if (value.trim() !== '' && !languages.includes(value)) {
            setLanguages([...languages, value]);
            setValue('');
        }
    };

    const removeTag = language => {
        const filteredSkills = languages.filter(s => s !== language);
        setLanguages(filteredSkills);
    }

    return (
        <>
            <Input.Search
                placeholder="Languages you know"
                onPressEnter={addLanguage}
                enterButton="Add"
                value={value}
                onChange={({ target }) => setValue(target.value)}
                onSearch={addLanguage}
            />
            {
                languages.map(language => <Tag
                    key={language}
                    closable
                    onClose={() => removeTag(language)}>
                    {language}
                </Tag>)
            }
        </>
    );
};

export default LanguageStep;
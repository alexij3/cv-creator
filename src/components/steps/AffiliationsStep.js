import React, { useState } from 'react';
import { Input, Tag } from 'antd';

const AffiliationsStep = ({ affiliations, setAffiliations }) => {
    const [value, setValue] = useState('');

    const addAffiliations = () => {
        if (value.trim() !== '' && !affiliations.includes(value)) {
            setAffiliations([...affiliations, value]);
            setValue('');
        }
    };

    const removeTag = affiliation => {
        const filteredAffiliations = affiliations.filter(s => s !== affiliation);
        setAffiliations(filteredAffiliations);
    }

    return (
        <>
            <Input.Search
                placeholder="Your affiliations"
                onPressEnter={addAffiliations}
                enterButton="Add"
                value={value}
                onChange={({ target }) => setValue(target.value)}
                onSearch={addAffiliations}
            />
            {
                affiliations.map(interest => <Tag
                    key={interest}
                    closable
                    onClose={() => removeTag(interest)}>
                    {interest}
                </Tag>)
            }
        </>
    );
};

export default AffiliationsStep;
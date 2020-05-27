import React, { useState } from 'react';
import { Input, Button } from 'antd';

const EducationStep = ({ education, setEducation }) => {
    const [edu, setEdu] = useState(education);

    const addEducation = () => {
        setEdu(education.concat(''));
    };

    const setEducationValue = (value, educationIndex) => {
        const newEducation = edu.map((education, index) => index === educationIndex ? value : education);
        setEducation(newEducation);
        setEdu(newEducation);
    };

    return (
        <Input.Group>
            {
                edu.map((e, index) => {
                    return <Input
                        placeholder="Describe where you were educated"
                        defaultValue={e}
                        key={index}
                        onChange={({ target }) => setEducationValue(target.value, index)}
                    />;
                })
            }
            <Button onClick={addEducation}>Add education</Button>
        </Input.Group>
    );
};

export default EducationStep;
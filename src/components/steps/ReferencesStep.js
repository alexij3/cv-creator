import React from 'react';
import { Input, Button } from 'antd';

const ReferencesStep = ({ references, setReferences }) => {
    const addReference = () => {
        setReferences([...references, '']);
    };

    const setReferenceValue = (value, refIndex) => {
        const newReferences = references.map((ref, index) => index === refIndex ? value : ref);
        setReferences(newReferences);
    };

    return (
        <Input.Group>
            {
                references.map((ref, index) => {
                    return <Input
                        placeholder="Who can recommend you?"
                        value={ref}
                        key={index}
                        onChange={({ target }) => setReferenceValue(target.value, index)}
                    />;
                })
            }
            <Button onClick={addReference}>Add reference</Button>
        </Input.Group>
    );
};

export default ReferencesStep;
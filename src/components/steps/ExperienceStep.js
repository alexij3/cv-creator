import React, { useState } from 'react';
import { Input, Button } from 'antd';

const ExperienceStep = ({ experience, setExperience }) => {
    const [jobs, setJobs] = useState(experience);

    const addJob = () => {
        setJobs(jobs.concat(''));
    };

    const setJobValue = (value, jobIndex) => {
        const newJobs = jobs.map((job, index) => index === jobIndex ? value : job);
        setJobs(newJobs);
        setExperience(newJobs);
    };

    return (
        <Input.Group>
            {
                jobs.map((job, index) => {
                    return <Input.TextArea
                        placeholder="Describe your work experience"
                        defaultValue={job}
                        key={index}
                        rows={3}
                        onChange={({ target }) => setJobValue(target.value, index)}
                    />;
                })
            }
            <Button onClick={addJob}>Add job</Button>
        </Input.Group>
    );
};

export default ExperienceStep;
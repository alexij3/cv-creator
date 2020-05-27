import React, { useState, useEffect } from 'react';
import { Steps, Button } from 'antd';
import { useLocation } from 'react-router-dom';
import { FileDoneOutlined } from '@ant-design/icons';
import ContactStep from './steps/ContactStep';
import ObjectivesStep from './steps/ObjectivesStep';
import ExperienceStep from './steps/ExperienceStep';
import EducationStep from './steps/EducationStep';
import SkillStep from './steps/SkillStep';
import LanguageStep from './steps/LanguageStep';
import InterestsStep from './steps/InterestsStep';
import AffiliationsStep from './steps/AffiliationsStep';
import ReferencesStep from './steps/ReferencesStep';
import PhotoStep from './steps/PhotoStep';
import CVPreivew from './steps/CVPreivew';

const CVStepper = () => {
    const { Step } = Steps;
    const [currentStep, setCurrentStep] = useState(0);
    const stepsCount = 11;
    const location = useLocation();
    const [cvObject, setCVObject] = useState({
        contact: {},
        objectives: { value: '' },
        experience: [''],
        education: [],
        skills: [],
        languages: [],
        interests: [],
        affiliations: [],
        references: [''],
        photo: null
    });

    useEffect(() => {
        if (location.search) {
            setCurrentStep(10);
            setCVObject({
                "contact":{
                    "name":"Oleksii Buzilov",
                    "phone":"+38012345678",
                    "email":"obuz@gmail.com"
                },
                "objectives":{
                    "value":"A motivated full-stack developer with good soft skills striving for self-improvement . "
                },
                "experience":[
                    "17/12/2018 - now \nSoftServe, Software Engineer"
                ],
                "education":[
                    "CHNU, Software Engineering (2016-2020)"
                ],
                "skills":[
                    "Java",
                    "Progress OpenEdge",
                    "AngularJS",
                    "JS",
                    "HTML",
                    "CSS"
                ],
                "languages":[
                    "Russian",
                    "Ukranian (native)",
                    "English (Upper-Intermediate)"
                ],
                "interests":[
                    "Game Development",
                    "Music",
                    "Voice Acting",
                    "3D modelling"
                ],
                "affiliations":[

                ],
                "references":[
                    "Vasya Pupkin"
                ],
                "photo":"me.jpg"
            });
        }
    }, []);

    const nextStep = () => {
        setCurrentStep(current => current + 1 !== stepsCount ? current + 1 : current);
    };

    const previousStep = () => {
        setCurrentStep(current => current === 0 ? current : current - 1);
    };

    const setExperience = experience => {
        setCVObject({ ...cvObject, experience });
    };

    const setEducation = education => {
        setCVObject({ ...cvObject, education });
    };

    const setSkills = skills => {
        setCVObject({ ...cvObject, skills });
    }

    const setLanguages = languages => {
        setCVObject({ ...cvObject, languages });
    }

    const setinterests = interests => {
        setCVObject({ ...cvObject, interests });
    }

    const setAffiliations = affiliations => {
        setCVObject({ ...cvObject, affiliations });
    }

    const setReferences = references => {
        setCVObject({ ...cvObject, references });
    }

    const setPhoto = photo => {
        setCVObject({ ...cvObject, photo });
    }

    const getCurrentStepCompoent = () => {
        switch (currentStep) {
            case 0:
                return <ContactStep contact={cvObject.contact} />
            case 1:
                return <ObjectivesStep objectives={cvObject.objectives} />
            case 2:
                return <ExperienceStep experience={cvObject.experience} setExperience={setExperience} />
            case 3:
                return <EducationStep education={cvObject.education} setEducation={setEducation} />
            case 4:
                return <SkillStep skills={cvObject.skills} setSkills={setSkills} />
            case 5:
                return <LanguageStep languages={cvObject.languages} setLanguages={setLanguages} />
            case 6:
                return <InterestsStep interests={cvObject.interests} setInterests={setinterests} />
            case 7:
                return <AffiliationsStep affiliations={cvObject.affiliations} setAffiliations={setAffiliations} />
            case 8:
                return <ReferencesStep references={cvObject.references} setReferences={setReferences} />
            case 9:
                return <PhotoStep setPhoto={setPhoto} />
            case 10:
                return <CVPreivew cvObject={cvObject} />
            default:
                return <h2>There are no such step</h2>;
        }
    };

    return (
        <div className="stepper-container">
            <Steps current={currentStep} direction="vertical" size="small">
                <Step key="contactInformation" title="Contact Information" description="A short piece of info about how to contact you" />
                <Step key="objectives" title="Objectives" description="What are you trying to find or achieve in the nearest future" />
                <Step key="workExperience" title="Work experience" description="Description of the most relevant working experience"/>
                <Step key="education" title="Education" description="Where you were educated"/>
                <Step key="skills" title="Skills" description="The list of the most relevant skills"/>
                <Step key="Languages" title="Languages" description="Which languages do you speak and how good"/>
                <Step key="interests" title="Interests" description="Short description of your interests"/>
                <Step key="affiliations" title="Affiliations" description="Professional memberships"/>
                <Step key="references" title="References" description="Any recommendations"/>
                <Step key="photo" title="Photo" description="A photo of awesome you"/>
                <Step key="result" title="Result" icon={<FileDoneOutlined style={{color: "white"}}/>} />
            </Steps>
            <div className={`content-container  ${currentStep === stepsCount - 1 ? 'last-step' : ''}`}>
                {getCurrentStepCompoent()}
                <div className="button-container">
                    {
                        currentStep !== stepsCount - 1 &&
                        <Button type="primary" size="middle" shape="round" onClick={nextStep}>
                            {currentStep === stepsCount - 2 ? 'Done' : 'Next step'}
                        </Button>
                    }
                    <Button type="primary" size="middle" shape="round" onClick={previousStep}>
                        Previous Step
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CVStepper;

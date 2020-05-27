import React, {useEffect} from 'react';

const CVPreivew = ({ cvObject }) => {
    return (
        <div className="preivew">
            <div className="left-side">
                <img src={cvObject.photo} alt="" />
                <div className="info-block">
                    <h3>Contact</h3>
                    <span>Phone: {cvObject.contact.phone}</span>
                    <br />
                    <span>Email: {cvObject.contact.email}</span>
                </div>

                <div className="info-block">
                    <h3>Languages</h3>
                    <ul>
                        {
                            cvObject.languages.map(lang => (<li key={lang}>{lang}</li>))
                        }
                    </ul>
                </div>

                <div className="info-block">
                    <h3>Education</h3>
                    <ul>
                        {
                            cvObject.education.map(edu => (<li key={edu}>{edu}</li>))
                        }
                    </ul>
                </div>

                <div className="info-block">
                    <h3>Skills:</h3>
                    <ul>
                        {
                            cvObject.skills.map(skill => (<li key={skill}>{skill}</li>))
                        }
                    </ul>
                </div>
            </div>
            <div className="right-side">
                <h1>{cvObject.contact.name}</h1>
                <div className="info-block">
                    <h3>Objectives:</h3>
                    <div>{cvObject.objectives.value}</div>
                </div>

                <div className="info-block">
                    <h3>Work experience:</h3>
                    {
                        cvObject.experience.map(exp => (
                            <div key={exp}>{exp}</div>
                        ))
                    }
                </div>

                <div className="info-block">
                    <h3>Interests:</h3>
                    {
                        cvObject.interests.map(interest => (
                            <div key={interest}>{interest}</div>
                        ))
                    }
                </div>

                <div className="info-block">
                    <h3>Affiliations:</h3>
                    <ul>
                        {
                            cvObject.affiliations.map(affil => (<li key={affil}>{affil}</li>))
                        }
                    </ul>
                </div>

                <div className="info-block">
                    <h3>References:</h3>
                    {
                        cvObject.references.map(ref => (
                            <div key={ref}>{ref}</div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default CVPreivew;

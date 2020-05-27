import React, { useRef } from 'react';
import { Input } from 'antd';

const PhotoStep = ({ setPhoto }) => {
    const imageRef = useRef();

    const processPhoto = ({ target }) => {
        if (target.files) {
            const photo = URL.createObjectURL(target.files[0]);
            setPhoto(photo);
            imageRef.current.src = photo;
        }
    };

    return (
        <>
            <Input
                type="file"
                onChange={processPhoto}
            />
            <img width="300" alt="" ref={imageRef} />
        </>
    );
};

export default PhotoStep;
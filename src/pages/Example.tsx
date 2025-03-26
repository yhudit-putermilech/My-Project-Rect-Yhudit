import React from 'react';
import re from'../images/5.png';
import re1 from'../images/4.png';
const ImageGallery: React.FC = () => {
    const images = [
        { src: 're', alt: 'תמונה 1' },
        { src: 're1', alt: 'תמונה 2' },
        { src: 'path/to/image3.jpg', alt: 'תמונה 3' },
        { src: 'path/to/image4.jpg', alt: 'תמונה 4' },
    ];

    return (
        <div style={galleryStyle}>
            {images.map((image, index) => (
                <div key={index} style={imageContainerStyle}>
                    <img src={image.src} alt={image.alt} style={galleryImageStyle} />
                </div>
            ))}
        </div>
    );
};

const galleryStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
};

const imageContainerStyle: React.CSSProperties = {
    width: 'calc(50% - 10px)',
    marginBottom: '10px',
    overflow: 'hidden',
};

const galleryImageStyle: React.CSSProperties = {
    width: '100%',
    transition: 'transform 0.3s ease',
};

export default ImageGallery;

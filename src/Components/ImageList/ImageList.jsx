import React from 'react';

const ImageList = ({ images }) => {
    return (
        <div className='image-list grid grid-cols-3 gap-4'>
            {images && images.map((image) => (
                <div key={image.id} className="relative">
                    <img 
                        src={image.urls.regular} 
                        alt={image.description} 
                        className="w-full h-full object-cover transition duration-300 ease-in-out transform hover:scale-105"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-sm opacity-0 hover:opacity-100 transition-opacity duration-300">{image.description}</div>
                </div>
            ))}
        </div>
    );
};

export default ImageList;

"use client";

import React, { useEffect, useState } from 'react';
import ImageCard from './ImageCard';
import ImageSkeleton from './Skeleton/ImageSkeleton';

interface Image {
    id: string;
    urls: {
        regular: string;
    };
    alt_description: string;
}

const ImageGallery: React.FC = () => {
    const [images, setImages] = useState<Image[]>([]);

    useEffect(() => {
        const fetchImages = () => {
            fetch(`https://api.unsplash.com/photos/random?client_id=${process.env.NEXT_PUBLIC_ACCESS_KEY}&count=12`)
                .then(response => response.json())
                .then((data: Image[]) => setImages(data))
                .catch(error => console.error('Error fetching images:', error));
        };
        fetchImages();
    }, []);

    if (images.length === 0) {
        return <ImageSkeleton />;
    }

    return (
        <section className="px-8 md:px-20 py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {images.map((image, i) => (
                    <ImageCard src={image?.urls?.regular} alt={image?.alt_description} key={i} />
                ))}
            </div>
        </section>
    );
};

export default ImageGallery;

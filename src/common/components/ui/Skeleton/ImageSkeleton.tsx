import React from 'react';

const ImageSkeleton = () => {

    return (
        <section className="grid grid-cols-2 gap-4 md:grid-cols-4 animate-pulse md:px-20 px-8 py-20">
            {Array.from({ length: 10 }).map((_, index) => (
                <div key={index} className="h-[250px] max-w-full rounded-lg bg-gray-300" />
            ))}
        </section>
    );
};

export default ImageSkeleton;

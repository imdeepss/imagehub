import React from 'react'
import ImageCard from './ImageCard'

const ImageGalleryBackup = () => {
    const images = [
        'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg',
        'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg',
        'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg',
        'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg',
        'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg',
        'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg',
        'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg',
        'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg',
        'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg',
        'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg',
        'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg',
        'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg',
    ];
    return (
        <section className='px-8 md:px-20 py-10'>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {images.map((image, index) => (
                    <div className="grid gap-4" key={index}>
                        <ImageCard src={image} alt="test" />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ImageGalleryBackup
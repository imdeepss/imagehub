import Image from 'next/image';
import React from 'react'

type ImageType = {
    src: string;
    alt: string;
}
const ImageCard = ({ src, alt }: ImageType) => {
    return (
        <div className=''>
            <div className='relative'>
                <Image width={500} height={500} className="h-auto max-w-full rounded-lg" src={src} alt={alt} />
            </div>
        </div>
    )
}

export default ImageCard
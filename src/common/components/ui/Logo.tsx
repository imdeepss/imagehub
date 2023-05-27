import Image from 'next/image'
import React from 'react'
import LogoImage from "@/public/ImageHubLogo.png"

const Logo = () => {
    return (
        <Image src={LogoImage} width={500} height={500} alt='Image Hub' className='object-contain h-[60px] md:w-[200px] w-full' />
    )
}

export default React.memo(Logo)
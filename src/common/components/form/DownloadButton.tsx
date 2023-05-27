import React from 'react'
import { DownloadIcon } from '../icons'

const DownloadButton = () => {
    return (
        <button type='button' className='absolute bottom-2 right-2 md:bottom-5 md:right-5 bg-grey md:px-3 md:py-2 rounded-md shadow-inner p-2'>
            <DownloadIcon />
        </button>
    )
}

export default DownloadButton
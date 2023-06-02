import React from 'react'
import { ImageGallery, ImageGalleryBackup } from "@/common/components/ui";
import { Analytics } from '@vercel/analytics/react';

const Home = () => {
  return (
    <>
      <Analytics />
      <ImageGalleryBackup />
    </>
  )
}

export default Home
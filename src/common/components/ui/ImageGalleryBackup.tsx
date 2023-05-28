"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import ImageSkeleton from "./Skeleton/ImageSkeleton";

interface Image {
  id: string;
  urls: {
    regular: string;
  };
  alt_description: string;
}

const ImageGallery = () => {
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    const fetchImages = () => {
      fetch(
        `https://api.unsplash.com/photos/random?client_id=${process.env.NEXT_PUBLIC_ACCESS_KEY}&count=20`
      )
        .then((response) => response.json())
        .then((data: Image[]) => setImages(data))
        .catch((error) => console.error("Error fetching images:", error));
    };
    fetchImages();
  }, []);

  if (images.length === 0) {
    return <ImageSkeleton />;
  }

  const columns = 4;
  const columnData = Array.from({ length: columns }, (_, i) =>
    images.slice(
      i * (images.length / columns),
      (i + 1) * (images.length / columns)
    )
  );

  return (
    <section className="px-8 py-10 md:px-20">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {columnData.map((column, columnIndex) => (
          <div className="grid gap-4" key={columnIndex}>
            {column.map((image, imageIndex) => (
              <div key={imageIndex}>
                <Image
                  className="h-auto max-w-full rounded-lg bg-grey"
                  src={image?.urls?.regular}
                  alt={image?.alt_description}
                  width={500}
                  height={500}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageGallery;

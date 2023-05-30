import { getImagesUnsplashAPI } from "@/common/hooks";
import Image from "next/image";

export const revalidate = 60; // revalidate every hour
type SearchInputType = {
  search: string;
};
const ImageGallery = async (): Promise<JSX.Element> => {
  const searchInput: SearchInputType = { search: "" };
  const imageDetails = await getImagesUnsplashAPI(searchInput);

  if (!imageDetails) {
    return <></>
  }

  const columns = 4;
  const columnData = Array.from({ length: columns }, (_, i) =>
    imageDetails.slice(
      i * (imageDetails.length / columns),
      (i + 1) * (imageDetails.length / columns)
    )
  );


  return (
    <section className="px-8 py-10 md:px-20">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {columnData.map((column, columnIndex) => (
          <div className="flex flex-wrap-reverse flex-col gap-4" key={columnIndex}>
            {column.map((image, imageIndex) => (
              <Image
                key={imageIndex}
                className="h-auto max-w-full rounded-lg bg-grey"
                src={image?.urls?.regular}
                alt={image?.alt_description || "images"}
                width={500}
                height={500}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageGallery;

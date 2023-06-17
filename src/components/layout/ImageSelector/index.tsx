import { useState } from "react";
import { ImageSelectorContainer } from "./styles";

import Image from "next/image";

interface ImageSelectorProps {
  images: string[];
  mainImage: string;
}

export function ImageSelector({ images, mainImage }: ImageSelectorProps) {
  const [sideImages, setSideImages] = useState(images);
  const [mainImageView, setMainImageView] = useState(mainImage);

  function handleImageClick(image: string) {
    setSideImages((oldImages) => {
      const images = oldImages.filter((_image) => _image !== image);
      return [mainImageView, ...images];
    });

    setMainImageView(sideImages.find((_image) => _image === image) ?? "");
  }

  return (
    <ImageSelectorContainer>
      <div className="images-to-select">
        {sideImages.map((image, i) => (
          <button
            key={i}
            onClick={() => handleImageClick(image)}
            data-active={image === mainImageView}
          >
            <Image src={image} alt="" width={200} height={150} />
          </button>
        ))}
      </div>
      <div className="main-image">
        <Image
          src={mainImageView}
          loading="lazy"
          alt=""
          width={400}
          height={200}
        />
      </div>
    </ImageSelectorContainer>
  );
}

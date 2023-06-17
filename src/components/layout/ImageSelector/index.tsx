import { useState } from "react";
import { ImageSelectorContainer } from "./styles";

import Image from "next/image";
import { Loading } from "../Loading";

interface ImageSelectorProps {
  images: string[];
  mainImage: string;
}

export function ImageSelector({ images, mainImage }: ImageSelectorProps) {
  const sideImages = [mainImage, ...images].slice(0, 5);

  const [mainImageView, setMainImageView] = useState(mainImage);
  const [mainImageLoading, setMainImageLoading] = useState(true);

  function handleImageClick(image: string) {
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
        {/* {mainImageLoading ? <Loading /> : null} */}
        <Image
          src={mainImageView}
          onLoadingComplete={(image) => setMainImageLoading(false)}
          alt=""
          width={400}
          height={200}
        />
      </div>
    </ImageSelectorContainer>
  );
}

import { ImageSelectorContainer } from "./styles";

import img1 from "@/assets/mocks2/1.png";
import img2 from "@/assets/mocks2/2.png";
import Image from "next/image";

interface ImageSelectorProps {
  images: string[];
  mainImage: string;
}

export function ImageSelector({ images, mainImage }: ImageSelectorProps) {
  return (
    <ImageSelectorContainer>
      <div className="images-to-select">
        {images.map((image, i) => (
          <Image key={i} src={image} alt="" width={200} height={150} />
        ))}
      </div>
      <img src={mainImage} alt="" className="main-image" />
    </ImageSelectorContainer>
  );
}

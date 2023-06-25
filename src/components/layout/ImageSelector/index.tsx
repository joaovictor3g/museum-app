import { useEffect, useRef, useState } from "react";
import { ImageSelectorContainer } from "./styles";

import Image from "next/image";
import { Expand } from "lucide-react";
import { Modal } from "../Modal";

interface ImageSelectorProps {
  images: string[];
  mainImage: string;
}

export function ImageSelector({ images, mainImage }: ImageSelectorProps) {
  const sideImages = [mainImage, ...images].slice(0, 5);
  const [mainImageView, setMainImageView] = useState(mainImage);
  const [zoomModalOpen, setZoomModalOpen] = useState(false);

  const mainImageRef = useRef<HTMLImageElement>(null);

  function handleSideImageClick(image: string) {
    setMainImageView(sideImages.find((_image) => _image === image) ?? "");
  }

  useEffect(() => {
    setMainImageView(mainImage);
  }, [mainImage]);

  useEffect(() => {
    async function openFullScreen() {
      const element = document.documentElement;
      if (zoomModalOpen) {
        if (element.requestFullscreen) await element.requestFullscreen();
      }
    }

    openFullScreen();
  }, [zoomModalOpen]);

  return (
    <ImageSelectorContainer>
      <div className="images-to-select">
        {sideImages.map((image, i) => (
          <button
            key={i}
            onClick={() => handleSideImageClick(image)}
            data-active={image === mainImageView}
          >
            <Image src={image} alt="" width={200} height={150} />
          </button>
        ))}
      </div>
      <div className="main-image">
        <Image
          src={mainImageView}
          alt=""
          ref={mainImageRef}
          width={400}
          height={200}
          placeholder="blur"
          blurDataURL="/blur.png"
        />

        <button className="zoom-image" onClick={() => setZoomModalOpen(true)}>
          <Expand />
        </button>
      </div>

      <Modal title="" open={zoomModalOpen} onOpenChange={setZoomModalOpen}>
        <Image
          src={mainImageView}
          alt=""
          ref={mainImageRef}
          width={400}
          height={200}
          placeholder="blur"
          blurDataURL="/blur.png"
        />
      </Modal>
    </ImageSelectorContainer>
  );
}

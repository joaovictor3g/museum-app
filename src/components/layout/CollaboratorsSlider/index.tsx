import { ChevronLeft, ChevronRight } from "lucide-react";
import { CollaboratorsSliderContainer } from "./styles";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";

interface CollaboratorsSliderProps {
  slides?: string[];
}

export function CollaboratorsSlider({ slides }: CollaboratorsSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      spacing: 8,
      perView: 2.1,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  if (!slides) {
    return <span>Não foram encontrados contribuintes</span>;
  }

  return (
    <CollaboratorsSliderContainer>
      <div className="top">
        <span>Colaboradores</span>
        <div className="arrows">
          <button
            onClick={() => {
              instanceRef.current?.prev();
            }}
            disabled={currentSlide === 0}
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => {
              instanceRef.current?.next();
            }}
            disabled={currentSlide >= slides.length - 1}
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      <div ref={sliderRef} className="keen-slider">
        {slides.map((slide) => (
          <span key={slide} className="keen-slider__slide">
            {slide}
          </span>
        ))}
      </div>
    </CollaboratorsSliderContainer>
  );
}

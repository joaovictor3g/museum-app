import { ChevronLeft, ChevronRight } from "lucide-react";
import { CollaboratorsSliderContainer } from "./styles";

import { KeenSliderPlugin, useKeenSlider } from "keen-slider/react";
import { useEffect, useState } from "react";

import "keen-slider/keen-slider.min.css";
import { useRouter } from "next/router";
interface CollaboratorsSliderProps {
  slides?: string[];
}

const ResizePlugin: KeenSliderPlugin = (slider) => {
  const observer = new ResizeObserver(function () {
    slider.update();
  });

  slider.on("created", () => {
    observer.observe(slider.container);
  });
  slider.on("destroyed", () => {
    observer.unobserve(slider.container);
  });
};

export function CollaboratorsSlider({ slides }: CollaboratorsSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { asPath } = useRouter();

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView: 1.1,
        spacing: 8,
      },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      breakpoints: {
        "(max-width: 1248px)": {
          slides: {
            perView: 3.1,
            spacing: 8,
          },
        },

        "(max-width: 950px)": {
          slides: {
            perView: 2.1,
            spacing: 8,
          },
        },

        "(max-width: 650px)": {
          slides: {
            perView: 1.1,
            spacing: 8,
          },
        },
      },
    },
    [ResizePlugin]
  );

  useEffect(() => {
    instanceRef.current?.update();
  }, [instanceRef, asPath]);

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
          <div key={slide} className="keen-slider__slide">
            <span className="slide">{slide}</span>
          </div>
        ))}
      </div>
    </CollaboratorsSliderContainer>
  );
}

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

type Slide = {
  id: string;
  description: string;
  title: string;
  type: string;
  image: {
    alternativeText: string;
    name: string;
    url: string;
  };
  __typename: string;
};

export type HeroSectionProps = {
  animation_duration: number;
  display_button: boolean;
  slides: Slide[];
  __typename: string;
};
export function HeroSection(props: HeroSectionProps) {
  const { animation_duration, display_button, slides, __typename } = props;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [parallaxOffset, setParallaxOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      // Optimization: Wrapped in requestAnimationFrame would be better, but keeping simple for now as per original logic,
      // though I will add a small check to avoid running if component unmounted or logic is heavy.
      // Actually, let's just stick to the original logic for now to ensure functionality first.
      setParallaxOffset(scrolled * 0.5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[400px] md:h-[500px] lg:h-[700px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              transform: `translateY(${parallaxOffset}px)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            <Image
              alt={slide.title}
              priority={index === 0}
              className="object-cover w-full h-full"
              src={slide.image.url || "/placeholder.svg"}
              width={1920}
              height={1080}
            />
          </div>
          <div className="absolute inset-0 bg-linear-to-r from-black/70 to-black/30" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl animate-fade-in-up">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight text-balance">
                  {slide.title}
                </h1>
                <p className="text-base md:text-xl text-white/90 mb-6 md:mb-8 text-pretty">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-white transition-all hover:scale-105"
                  >
                    Browse Products
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white/20"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slider Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full p-2 md:p-3 transition-all hover:scale-110 z-10 cursor-pointer"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full p-2 md:p-3 transition-all hover:scale-110 z-10 cursor-pointer"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-accent w-6 md:w-8" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

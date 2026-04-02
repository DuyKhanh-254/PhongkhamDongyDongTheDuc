import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import defaultBanner from "@/assets/hero-clinic.jpg";
import slide2 from "@/assets/anh.jpg";

interface PageBannerProps {
  title?: string;
  backgroundImage?: string;
  breadcrumb?: string;
}

const PageBanner = ({ title, backgroundImage, breadcrumb }: PageBannerProps) => {
  const slides = backgroundImage ? [backgroundImage, slide2] : [defaultBanner, slide2];
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="page-banner relative overflow-hidden h-[250px] md:h-[350px] group">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0,91,25,0.7), rgba(0,91,25,0.7)), url(${slide})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}
      
      {/* Navigation Buttons */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 md:left-8 z-20 p-2 md:p-3 rounded-full bg-black/30 text-white hover:bg-black/60 transition-all opacity-0 group-hover:opacity-100 transform -translate-y-1/2 top-1/2"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 md:right-8 z-20 p-2 md:p-3 rounded-full bg-black/30 text-white hover:bg-black/60 transition-all opacity-0 group-hover:opacity-100 transform -translate-y-1/2 top-1/2"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {(title || breadcrumb) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 pointer-events-none">
          {title && (
            <h1 className="page-banner-title mb-2 text-white font-heading font-extrabold text-3xl md:text-5xl tracking-tight text-center pointer-events-auto">{title}</h1>
          )}
          {breadcrumb && (
            <p className="text-white/90 text-sm md:text-base font-medium pointer-events-auto text-center">{breadcrumb}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default PageBanner;

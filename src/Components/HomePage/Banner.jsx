import {
  ChevronLeft,
  ChevronRight,
  Download,
  Gamepad2,
  Star,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";
import img4 from "../../assets/4.jpg";

const Banner = () => {
  const carouselRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const next = (prev + 1) % 4;
        if (carouselRef.current) {
          const slideWidth = carouselRef.current.offsetWidth;
          carouselRef.current.scrollLeft = next * slideWidth;
        }
        return next;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      img: img1,
      title: "Epic Adventures Await",
      subtitle: "Discover the best games in the universe",
      stats: "4.8/5 Rating",
    },
    {
      img: img2,
      title: "Next-Gen Gaming Experience",
      subtitle: "Immerse yourself in stunning worlds",
      stats: "10M+ Players",
    },
    {
      img: img3,
      title: "Mobile Gaming Revolution",
      subtitle: "Play anywhere, anytime",
      stats: "50+ Games",
    },
    {
      img: img4,
      title: "Join the Gaming Community",
      subtitle: "Connect with fellow gamers worldwide",
      stats: "1M+ Community",
    },
  ];

  return (
    <div className="relative">
      <div
        ref={carouselRef}
        className="carousel w-full h-80 md:h-[400px] lg:h-[500px] overflow-hidden"
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            id={`slide${index + 1}`}
            className="carousel-item relative w-full"
          >
            <img
              src={slide.img}
              className="w-full h-full object-cover"
              alt={`Slide ${index + 1}`}
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-purple-900/60 to-slate-900/80"></div>

            {/* Content overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white max-w-4xl px-4">
                <div className="flex items-center justify-center mb-4">
                  <Gamepad2 className="w-12 h-12 text-purple-400 mr-3" />
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
                    {slide.title}
                  </h1>
                </div>

                <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-6 font-light">
                  {slide.subtitle}
                </p>

                <div className="flex items-center justify-center space-x-8 mb-8">
                  <div className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm rounded-full px-4 py-2">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="text-purple-300 font-semibold">
                      {slide.stats}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm rounded-full px-4 py-2">
                    <Download className="w-5 h-5 text-green-400" />
                    <span className="text-purple-300 font-semibold">
                      Free Download
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => navigate("/games")}
                    className="btn bg-purple-600 hover:bg-purple-700 text-white border-purple-600 px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                  >
                    Explore Games
                  </button>

                  <button
                    onClick={() => navigate("/apps")}
                    className="btn bg-transparent hover:bg-white/10 text-white border-2 border-purple-400 hover:border-purple-300 px-8 py-3 text-lg font-semibold rounded-full backdrop-blur-sm transition-all duration-300"
                  >
                    View Apps
                  </button>
                </div>
              </div>
            </div>

            {/* Navigation arrows */}
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <button
                onClick={() => {
                  const prev = (currentSlide - 1 + 4) % 4;
                  setCurrentSlide(prev);
                  if (carouselRef.current) {
                    const slideWidth = carouselRef.current.offsetWidth;
                    carouselRef.current.scrollLeft = prev * slideWidth;
                  }
                }}
                className="btn btn-circle bg-slate-800/50 backdrop-blur-sm border-purple-400 hover:bg-purple-600 text-white hover:border-purple-300 transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => {
                  const next = (currentSlide + 1) % 4;
                  setCurrentSlide(next);
                  if (carouselRef.current) {
                    const slideWidth = carouselRef.current.offsetWidth;
                    carouselRef.current.scrollLeft = next * slideWidth;
                  }
                }}
                className="btn btn-circle bg-slate-800/50 backdrop-blur-sm border-purple-400 hover:bg-purple-600 text-white hover:border-purple-300 transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Slide indicators */}
      <div className="flex justify-center space-x-2 mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index);
              if (carouselRef.current) {
                const slideWidth = carouselRef.current.offsetWidth;
                carouselRef.current.scrollLeft = index * slideWidth;
              }
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "bg-purple-400 shadow-lg shadow-purple-400/50"
                : "bg-gray-600 hover:bg-purple-400/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;

"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ISlider {
  data: any[];
}

const Slider = ({ data }: ISlider) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Dragging states
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftStartRef = useRef(0);
  const dragDistanceRef = useRef(0);

  const updateScrollState = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    
    // Check if container can scroll in either direction (with 2px tolerance for subpixels)
    setCanScrollPrev(scrollLeft > 2);
    setCanScrollNext(scrollLeft + clientWidth < scrollWidth - 2);

    // Calculate progress percentage
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll > 0) {
      setScrollProgress((scrollLeft / maxScroll) * 100);
    } else {
      setScrollProgress(0);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    updateScrollState();
    
    window.addEventListener("resize", updateScrollState);
    return () => {
      window.removeEventListener("resize", updateScrollState);
    };
  }, [data]);

  const scroll = (direction: "prev" | "next") => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Scroll by 80% of the visible container width for a smooth, readable flow
    const scrollAmount = container.clientWidth * 0.8;
    container.scrollBy({
      left: direction === "prev" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  // Drag-to-scroll event handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    isDraggingRef.current = true;
    startXRef.current = e.pageX - container.offsetLeft;
    scrollLeftStartRef.current = container.scrollLeft;
    dragDistanceRef.current = 0;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current) return;
    
    const container = scrollContainerRef.current;
    if (!container) return;

    // Prevent default browser dragging behaviors
    e.preventDefault();
    
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startXRef.current) * 1.5; // Scroll speed scaling factor
    container.scrollLeft = scrollLeftStartRef.current - walk;
    dragDistanceRef.current = Math.abs(x - startXRef.current);
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    isDraggingRef.current = false;
  };

  const handleMouseLeave = () => {
    isDraggingRef.current = false;
  };

  // Intercept click event if user actually dragged, preventing child links from firing
  const handleClickCapture = (e: React.MouseEvent) => {
    if (dragDistanceRef.current > 8) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <div className="relative group/slider w-full">
      {/* Scroll Container */}
      <div
        ref={scrollContainerRef}
        onScroll={updateScrollState}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onClickCapture={handleClickCapture}
        className="flex gap-6 overflow-x-auto py-4 px-1 scroll-smooth select-none cursor-grab active:cursor-grabbing snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {data.map((item, index) => (
          <div key={index} className="snap-start shrink-0">
            {item}
          </div>
        ))}
      </div>

      {/* Left Chevron Button */}
      <button
        onClick={() => scroll("prev")}
        disabled={!canScrollPrev}
        className="absolute left-4 top-[45%] -translate-y-1/2 z-30 size-12 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-primary hover:text-black hover:border-primary active:scale-90 transition-all duration-300 disabled:opacity-0 disabled:pointer-events-none shadow-xl cursor-pointer"
        aria-label="Scroll left"
      >
        <ChevronLeft className="size-6" />
      </button>

      {/* Right Chevron Button */}
      <button
        onClick={() => scroll("next")}
        disabled={!canScrollNext}
        className="absolute right-4 top-[45%] -translate-y-1/2 z-30 size-12 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-primary hover:text-black hover:border-primary active:scale-90 transition-all duration-300 disabled:opacity-0 disabled:pointer-events-none shadow-xl cursor-pointer"
        aria-label="Scroll right"
      >
        <ChevronRight className="size-6" />
      </button>

      {/* Premium Progress Bar */}
      <div className="mt-8 flex justify-center items-center">
        <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
          <div
            className="h-full bg-primary absolute left-0 top-0 rounded-full transition-all duration-75 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;

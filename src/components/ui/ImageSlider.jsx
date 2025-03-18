import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  })
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export default function ImageSlider({ images, interval = 5000, className = "", imageClassName = "" }) {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const imageIndex = Math.abs(page % images.length);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      paginate(1);
    }, interval);

    return () => clearInterval(timer);
  }, [isAutoPlaying, interval, page]);

  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          src={images[imageIndex]}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          className={`absolute w-full h-full object-cover ${imageClassName}`}
          alt={`Slide ${imageIndex + 1}`}
        />
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setPage([index, index > imageIndex ? 1 : -1])}
            className={`w-2 h-2 rounded-full transition-all ${
              index === imageIndex 
                ? "bg-white w-4" 
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Arrow Navigation */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-10"
        onClick={() => paginate(-1)}
        aria-label="Previous slide"
      >
        ←
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-10"
        onClick={() => paginate(1)}
        aria-label="Next slide"
      >
        →
      </button>
    </div>
  );
}

import { useEffect, useState } from "react";
import { CircleChevronRight, CircleChevronLeft } from "lucide-react";

const IMAGES = [
  {
    id: 1,
    image: "https://plus.unsplash.com/premium_photo-1661889099855-b44dc39e88c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "pic1",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1578403881636-6f4a77a6f9cc?q=80&w=1939&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "pic2",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1516979371633-d578f00fcd6e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "pic3",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1429305254053-2a1bfe816f36?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "pic4",
  },
];

const MainCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    let timeout;

    if (autoPlay) {
      timeout = setTimeout(() => {
        setCurrent((current) => (current === IMAGES.length - 1 ? 0 : current + 1));
      }, 3000);
    }

    return () => clearTimeout(timeout);
  }, [current, autoPlay]);

  return (
    <div className="">
      <div
        className="carousel"
        onMouseEnter={() => {
          setAutoPlay(false);
        //   clearTimeout(timeout);
        }}
        onMouseLeave={() => setAutoPlay(true)}
      >
        <div className="carousel-wrapper">
          {IMAGES.map((i, idx) => {
            return (
              <div
                key={i.id}
                className={
                  idx == current
                    ? "carousel-card carousel-card-active"
                    : "carousel-card"
                }
              >
                <img src={i.image} alt={i.title} />
              </div>
            );
          })}
          <div className="carousel-arrow-left">
            <CircleChevronLeft
              onClick={() =>
                setCurrent(current === 0 ? IMAGES.length - 1 : current - 1)
              }
            />
          </div>
          <div className="carousel-arrow-right">
            <CircleChevronRight
              onClick={() =>
                setCurrent(current === IMAGES.length - 1 ? 0 : current + 1)
              }
            />
          </div>

          <div className="carousel-pagination">
            {IMAGES.map((i, idx) => {
              return (
                <div
                  key={i.id}
                  className={
                    idx == current
                      ? "pagination-dot pagination-dot-active"
                      : "pagination-dot"
                  }
                  onClick={() => setCurrent(idx)}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCarousel;

import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { Cards } from "./cards/Cards";
import { useState, useEffect, useRef } from "react";

export function CarrouselScroll() {
  const scrollLeft = () => {
    const contentElement = document.getElementById("content");
    if (contentElement) {
      contentElement.scrollLeft -= 1590;
    }
  };

  const scrollRight = () => {
    const contentElement = document.getElementById("content");
    if (contentElement) {
      contentElement.scrollLeft += 1590;
    }
  };

  const carousel = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    carousel.current?.scrollWidth, carousel.current?.offsetWidth;
    setWidth(9510 - 1560);
  }, []);

  return (
    <motion.div
      whileTap={{ cursor: "grabbing" }}
      className="relative select-none group px-[30px] 
        overflow-hidden"
    >
      <motion.div
        id="content"
        className="overflow-x-auto  scrollbar-hide snap-x flex flex-row gap-[30px] "
      >
        <motion.div
          ref={carousel}
          dragConstraints={{ right: 0, left: -width }}
          drag={"x"}
        >
          <Cards />
        </motion.div>
      </motion.div>

      <button
        onClick={scrollLeft}
        className="absolute hidden group-hover:block top-[56%] -translate-x-0 
            translate-y-[-50%] left-8 cursor-pointer pt-[190px] pb-[196px] px-[6px] rounded-l-[20px] "
      >
        <CaretLeft size={36} color="white" />
      </button>
      <button
        onClick={scrollRight}
        className="absolute hidden group-hover:block top-[56%] -translate-x-0 
            translate-y-[-50%] right-8 cursor-pointer pt-[190px] pb-[196px] px-[6px] rounded-r-[20px] "
      >
        <CaretRight size={36} color="white" />
      </button>
    </motion.div>
  );
}

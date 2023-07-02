import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { Cards } from "./cards/Cards";
import { useState, useEffect, useRef } from "react";
import { SaibaMais } from "./SaibaMais";

export function Mentorias() {
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
    <div className="bg-BlueDown bg-cover w-full h-[1600px]  pt-[40px]">
      <div className="w-full h-[1080]  text-white pt-[100px] px-7">
        <h1 className="flex justify-center text-7xl">Mentorias</h1>
        <p className="text-2xl pt-[50px] pb-[35px]">
          Lorem{" "}
          <a
            className="text-blue-950 underline"
            href="https://cutt.ly/owrxSZi0"
          >
            {" "}
            Contratar sua mentoria{" "}
          </a>
          ipsum dolor sit amet consectetur adipisicing elit. Odio delectus,
          molestias provident laudantium maiores placeat sed atque perferendis
          architecto minus dolorem et est pariatur, cupiditate sunt error?
          Praesentium at nisi eos. Laudantium itaque in id ratione officia odit
          ipsa accusantium iusto eum delectus iste ipsum voluptatibus,
          asperiores ea non excepturi blanditiis repellat, rem totam soluta
          animi assumenda minus. Facilis nobis quia sit inventore sunt maiores,
          vero eveniet dignissimos rem iusto?
        </p>
      </div>

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

      <div className="flex flex-row px-7 pt-[50px] justify-between h-[1080]">
        <div className="w-[760px] h-[427px]">
          <h1 className="text-white text-5xl font-bold">Mais informações!</h1>
          <p className="text-white text-2xl pt-[20px] leading-[38px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            doloribus natus molestiae provident optio fugit, quasi quo tempora
            repellendus in, ipsa quae libero temporibus tempore similique
            excepturi cum corrupti soluta rem, explicabo accusamus magni quos?
            Similique officia reprehenderit fuga minus rem? Quo, dolore. Laborum
            incidunt, sed, minima molestiae modi autem suscipit optio quisquam
            itaque praesentium voluptatum reiciendis excepturi molestias tempore
            error non nam corrupti. Vero, enim. Repellendus, iste suscipit,
            veritatis, dolorem sint ipsum rerum omnis fuga maxime nisi nobis
            beatae?
          </p>
        </div>

        <div>
          <iframe
            className="h-[427px] w-[760px] rounded-lg border-white border-[2px]"
            src="https://www.youtube.com/embed/eDu824v2YFI"
            title="YouTube video"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="px-7 pt-[10px] gap-[20px] flex flex-row">
        <button className="bg-colorNature hover:bg-colorNatureHover text-white text-[20px] font-bold py-3 px-5 rounded-3xl">
          AGENDE SUA MENTORIA
        </button>
        <SaibaMais />
      </div>
    </div>
  );
}

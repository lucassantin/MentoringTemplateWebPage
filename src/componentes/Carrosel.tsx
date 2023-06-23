import { CaretLeft, CaretRight } from "@phosphor-icons/react"
import { motion } from "framer-motion"
import { Cards } from "./cards/Cards"
import { useState, useEffect, useRef } from "react"


export function Carrosel() {
const scrollLeft = () => {
    const contentElement = document.getElementById("content");
    if (contentElement) {
        contentElement.scrollLeft -= 1590;
    }
}

const scrollRight = () => {
    const contentElement = document.getElementById("content");
    if (contentElement) {
        contentElement.scrollLeft += 1590;
    }
}

const carousel = useRef<HTMLDivElement | null>(null);
const [width, setWidth] = useState(0)

useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth);
    setWidth( 9510 - 1560)
}, [])

return (
    <motion.div whileTap={{cursor: "grabbing"}} className='relative select-none bg-colorNature px-[30px] max-w-[1620px] overflow-hidden pt-[60px] '>
        <div className="absolute right-0 top-0 px-10 ">
            <button onClick={scrollLeft} className="p-2  rounded-l-full bg-white">
            <CaretLeft size={32} />
            </button>
            <button onClick={scrollRight} className="p-2  rounded-r-full bg-white">
            <CaretRight size={32} />
            </button>
        </div>
            
        <motion.div   id="content" className="overflow-x-auto  scrollbar-hide snap-x flex flex-row gap-[30px] ">
            <motion.div ref={carousel} dragConstraints={{ right: 0, left: -width}} drag={"x"}>
                <Cards />
            </motion.div>
        </motion.div>
    </motion.div>
)
}
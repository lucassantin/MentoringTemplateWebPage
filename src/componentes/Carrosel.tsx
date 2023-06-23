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
      <div className="bg-BlueDown bg-cover w-full h-[1200px] pt-[55px]"> 
        <div className="w-full h-[1080]  text-white pt-[100px] px-7">
            <h1 className="flex justify-center text-7xl">Mentorias</h1>
            <p className="text-2xl pt-[50px] pb-[35px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio delectus, molestias provident laudantium maiores placeat sed atque perferendis architecto minus dolorem et est pariatur, cupiditate sunt error? Praesentium at nisi eos. Laudantium itaque in id ratione officia odit ipsa accusantium iusto eum delectus iste ipsum voluptatibus, asperiores ea non excepturi blanditiis repellat, rem totam soluta animi assumenda minus. Facilis nobis quia sit inventore sunt maiores, vero eveniet dignissimos rem iusto?</p>
        </div>

        <motion.div whileTap={{cursor: "grabbing"}} className='relative select-none group px-[30px] 
        overflow-hidden py-[60px] '>
                
            <motion.div   id="content" className="overflow-x-auto  scrollbar-hide snap-x flex flex-row gap-[30px] ">
                <motion.div ref={carousel} dragConstraints={{ right: 0, left: -width}} drag={"x"}>
                    <Cards />
                </motion.div>
            </motion.div>


            <button onClick={scrollLeft} className="absolute hidden group-hover:block top-[56%] -translate-x-0 
            translate-y-[-50%] left-8 cursor-pointer pt-[190px] pb-[196px] px-[6px] rounded-l-[20px] ">
            <CaretLeft size={36} color="white" />
            </button>
            <button onClick={scrollRight} className="absolute hidden group-hover:block top-[56%] -translate-x-0 
            translate-y-[-50%] right-8 cursor-pointer pt-[190px] pb-[196px] px-[6px] rounded-r-[20px] ">
            <CaretRight size={36} color="white" />
            </button>

        </motion.div>
     </div>    
)
}
import { Card1 } from "./Card1"
import { Card2 } from "./Card2"
import { Card3 } from "./Card3"
import { Card4 } from "./Card4"
import { Card5 } from "./Card5"
import { Card6 } from "./Card6"


export function Cards() {
    return (
        <div className="flex flex-row gap-[30px] ">
            <div  className="snap-start">
                    <Card1 />
                </div>

                <div  className="snap-start">
                    <Card2 />
                </div>

                <div className="snap-start">
                    <Card3 />
                </div>

                <div className="snap-start">
                    <Card4 />
                </div>

                <div className="snap-start">
                    <Card5 />
                </div>

                <div className="snap-start">
                    <Card6 />
                </div>
            </div>
    )
}
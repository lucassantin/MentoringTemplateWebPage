import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverFlow, Pagination, Navigation } from 'swiper';
import { Card } from './Card';

export function Carrosel() {
    return (
        <div className='bg-colorNature px-7 pt-[50px]'>
            <Card />
        </div>
    )
}
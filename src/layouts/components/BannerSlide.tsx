"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Slide {
    id: number;
    image: string;
    url: string;
}

const slideData: Slide[] = [
    {
        id: 1,
        image: "images/banner.jpeg",
        url: "https://www.eteverslearning.com/Camp-program/?idx=539&utm_source=boottent&utm_medium=referral"
    },
    {
        id: 2,
        image: "images/banner.jpeg",
        url: "https://www.eteverslearning.com/Camp-program/?idx=539&utm_source=boottent&utm_medium=referral"
    },
    {
        id: 3,
        image: "images/banner.jpeg",
        url: "https://www.eteverslearning.com/Camp-program/?idx=539&utm_source=boottent&utm_medium=referral"
    }
];

export default function BannerSlider() {
    SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay]);
    return (
        <div className="flex justify-center my-8">
            <Swiper
                loop={true}
                spaceBetween={30}
                slidesPerView={1}
                navigation={true}
                pagination={{ clickable: true }}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                className="w-full max-w-6xl"
            >
                {slideData.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <a href={slide.url} className="flex justify-center">
                            <img src={slide.image} alt={`Slide ${slide.id}`} className="object-contain rounded-lg shadow-md w-full" />
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
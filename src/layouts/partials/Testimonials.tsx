import { markdownify } from "@/lib/utils/textConverter";
import Image from "next/image";
import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { SwiperSlide } from "swiper/react";
import TestimonialSlider from "../components/TestimonialSlider";

export type Testimonial = {
  author: string;
  avatar: string;
  profession: string;
  content: string;
};

type Props = {
  data: {
    subtitle: string;
    title: string;
    description?: string;
    left_thumbnail: string;
    right_thumbnail: string;
    testimonials: Array<Testimonial>;
  };
};

function Testimonials({ data }: Props) {
  return (
    <section className="section testimonials pt-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <p
                dangerouslySetInnerHTML={markdownify(data.subtitle)}
                className="mb-4 text-[0.9rem] uppercase"
              />
              <h2
                dangerouslySetInnerHTML={markdownify(data.title)}
                className="title"
              />
              <p
                dangerouslySetInnerHTML={markdownify(data.description!)}
                className="text-[.9rem] text-text"
              />
            </div>
          </div>
        </div>
        <div className="row items-center justify-center">
          <div
            className="hidden md:col-3 xl:col-4 lg:block"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            <Image
              src={data.left_thumbnail}
              height={553}
              width={445}
              className="max-w-full"
              alt={data.title}
            />
          </div>
          <div
            className="sm:col-10 md:col-8 lg:col-5 xl:col-4"
            data-aos="fade-up"
          >
            <div className="relative z-30 overflow-hidden">
              <TestimonialSlider slides={data.testimonials} />
              <svg
                className="absolute left-1/2 top-0 -z-10 h-full w-auto -translate-x-1/2 text-primary sm:left-0 sm:h-auto sm:w-full sm:translate-x-0"
                viewBox="0 0 462 458"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M36.9901 53.2939C8.66553 90.8729-.680565 197.569.0380893 247.72 3.02596 456.228 136.937 460.573 283.124 457.125 406.681 454.211 459.969 401.82 461.426 261.777 462.591 149.742 432.9 78.8779 413.134 60.3019 326.242-21.359 89.5954-16.4987 36.9901 53.2939z"
                  fill="currentcolor"
                ></path>
              </svg>
            </div>
          </div>
          <div
            className="hidden md:col-3 xl:col-4 lg:block"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <Image
              src={data.right_thumbnail}
              height={553}
              width={445}
              className="max-w-full"
              alt={data.title}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

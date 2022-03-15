import data from "./data"
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css';
import {AiFillStar} from "react-icons/ai";


/**
 * @description ✏️ Reviews Component
 * @returns {JSX.Element}
 * @constructor
 */
const Reviews = () =>
    <>
        <section
            className="bg-[#FAF8F0] pl-2 pr-2 pt-[50px] pb-[50px] lg:pt-[100px] lg:pb-[150px]"
        >
            <div className="max-w-[600px] m-auto w-full text-center mb-[20px] md:mb-[32px]">
                <h2 className="title-2 mb-[14px]">{data.headline}</h2>
                <p>{data.lead}</p>
            </div>

            <Swiper
                spaceBetween={10}
                slidesPerView={2}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {data.slides.map((slide, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="bg-white p-[20px] md:p-[32px]">
                            <div className="flex gap-0.5 mb-[10px]">
                                {Array(slide.rating).fill(<AiFillStar size={18}/>)}
                            </div>
                            <h3 className="mb-[11px] text-[18px] leading-[24px]">{slide.title}</h3>
                            <p className="mb-[19px]">{slide.text}</p>
                            <p className="pl-[10px] border-l-2 border-l-[#E08631]">{slide.author}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
        <img className="m-auto w-full" src="/images/reaviews/image.jpg" alt={data.headline}/>
    </>


export default Reviews
    
import React, { useState, useEffect } from 'react'
import Slider2 from './Slider2/Slider2'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./SliderList2.css";


function SliderList2() {
    const [swipers, setSwipers] = useState([])

    useEffect(() => {
        fetch('http://localhost:8080/admin/sliders')
            .then(res => res.json())
            .then(function (data) {
                setSwipers(data.data)
            })
    }, [])
    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            slidesPerGroup={3}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>
                {
                    swipers.map(swiper => {
                        return (<Slider2 key={swiper._id} slider={swiper} />)
                    })
                }
            </SwiperSlide>
        </Swiper>
    )
}

export default SliderList2
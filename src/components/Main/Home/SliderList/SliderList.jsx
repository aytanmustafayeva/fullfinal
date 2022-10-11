import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Slider from './Slider/Slider'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./SliderList.css";


function SliderList() {
    const [swipers, setSwipers] = useState([])


    useEffect(() => {
        fetch('http://localhost:8080/admin/sliders')
            .then(res => res.json())
            .then(function (data) {
                setSwipers(data.data)
                console.log("sakla")
            })
    }, [])
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    {
                        swipers.map(swiper => {
                            return (<Slider key={swiper._id} slider={swiper} />)
                        })
                    }
                </SwiperSlide>
            </Swiper>
        </>

    )
}

export default SliderList
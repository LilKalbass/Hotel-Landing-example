'use client'

import {Swiper, SwiperSlide} from "swiper/react"
import {Autoplay, Pagination} from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

import {Button} from "@/components/ui/button";
import Image from "next/image";

import {motion} from "framer-motion";
import {fadeIn} from "@/components/variants";

const testimonialData = [
    {
      img: '/testimonials/img-1.png',
      message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Accusantium animi autem consectetur deserunt eius et fugit',
      personName: 'Den Baran`uga',
      location: 'Singapore'
    },
    {
        img: '/testimonials/img-2.png',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Accusantium animi autem consectetur deserunt eius et fugit',
        personName: 'Sin du Trash',
        location: 'Singapore'
    }
]

const Testimonial = () => {
    return (
        <motion.section
            className = 'bg-soft_green xl:h-[880px]'
            variants = {fadeIn('up', 0.2)}
            initial = 'hidden'
            whileInView = {'show'}
            viewport = {{once: false, amount: 0}}
        >
            <motion.div
                className = 'container mx-auto'
                variants = {fadeIn('up', 0.4)}
                initial = 'hidden'
                whileInView = {'show'}
                viewport = {{once: false, amount: 0}}
            >
                <Swiper modules = {[Pagination]} pagination = {{clickable: true}} className = 'xl:h-[680px] overflow-hidden'>
                    {testimonialData.map((slide, index) => {
                        return (
                            <SwiperSlide key = {index}>
                                <div className = 'grid grid-cols-1 xl:grid-cols-2 py-12 xl:py-24'>
                                    <Image src={slide.img} alt = 'slide_img' width = {460} height = {460} quality = {100} className = 'hidden xl:flex'/>
                                    <div className = 'flex-1 text-white p-12 bg-white/20 rounded-3xl'>
                                        <p className = 'text-lg leading-9 mb-8'>{slide.message}</p>
                                        <p className = 'text-xl font-bold'>{slide.personName}</p>
                                        <p>{slide.location}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </motion.div>
        </motion.section>
    )
}
export default Testimonial

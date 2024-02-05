'use client'

import {Swiper, SwiperSlide} from "swiper/react"
import {Autoplay} from "swiper/modules"
import "swiper/css"

import {Button} from "@/components/ui/button";
import Image from "next/image";

import {motion} from "framer-motion";
import {fadeIn} from "@/components/variants";

const recommendationData = [
    {
      name: 'Shanghai Hotel',
      image: '/recommendation/hotel-1.png',
      location: 'Shanghai, China',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Accusantium animi autem consectetur deserunt eius et fugit',
      price: 40,
      testimonial: {
          message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          personName: 'Vasya Shakal'
      }
    },
    {
        name: 'Peaks Lodge',
        image: '/recommendation/hotel-2.png',
        location: 'Aspen, USA',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Accusantium animi autem consectetur deserunt eius et fugit',
        price: 120,
        testimonial: {
            message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            personName: 'Tartiglia Genshinskii'
        }
    },
    {
        name: 'Tropical Oasis Resort',
        image: '/recommendation/hotel-3.png',
        location: 'Bali, Indonesia',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Accusantium animi autem consectetur deserunt eius et fugit',
        price: 80,
        testimonial: {
            message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            personName: 'Tupac Shakur'
        }
    },
]

const Recommendation = () => {
    return (
        <motion.section
            className = 'pb-12 xl:pt-[160px] xl:pb-[110px] bg-soft_green-secondary relative'
            variants={fadeIn('up', 0.2)}
            initial = 'hidden'
            whileInView = {'show'}
            viewport = {{once: false, amount: 0}}
        >
            <motion.div
                variants={fadeIn('up', 0.4)}
                initial = 'hidden'
                whileInView = {'show'}
                viewport = {{once: false, amount: 0}}
            >
                <Swiper modules = {[Autoplay]} autoplay={{delay: 4000, disableOnInteraction: true}} loop speed = {2000}>
                    {recommendationData.map((hotel, index) => {
                        return (
                            <SwiperSlide key = {index}>
                                <div className = 'flex flex-col xl:flex-row xl:pl-[136px] gap-y-12 xl:gap-y-0'>
                                    <div className = 'max-w-[340px] xl:pt-8 order-2 xl:order-1 text-center mx-auto xl:text-left xl:mx-0'>
                                        <h2 className = 'h2 mb-4'>{hotel.name}</h2>
                                        <p className = 'text-soft_green text-sm mb-6'>{hotel.location}</p>
                                        <p className = 'mb-24'>{hotel.desc}</p>
                                        <div className = 'flex items-center gap-x-12'>
                                            <Button variant = 'accent'>Book now</Button>
                                            <div className = 'text-black'>
                                                <span className = 'font-bold text-2xl'>{hotel.price}$</span>
                                                <span className = 'text-sm'>/Night</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className = 'order-1 xl:order-2 flex flex-1 justify-center xl:justify-end relative h-[634px]'>
                                        <div>
                                            <Image src = {hotel.image} alt = 'hotel_img' width = {904} height = {530} quality = {100}
                                                   className = 'xl:rounded-tl-[20px] xl:rounded-bl-[20px]'
                                            />
                                            <div className = 'bg-soft_green p-4 text-white text-center xl:text-left xl:max-w-[468px] xl:min-h-[220px] xl:absolute
                                                              xl:bottom-0 xl:translate-x-1/2 xl:rounded-xl xl:px-10'>
                                                <p className = 'mb-3 max-w-md mx-auto xl:max-w-none xl:mx-0 xl:mb-6'>{hotel.testimonial.message}</p>
                                                <p className = 'text-xl font-bold'>{hotel.testimonial.personName}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </motion.div>
            <Image src = '/recommendation/pattern.svg' alt = 'pattern_img' width = {240} height = {240} className = 'hidden xl:flex absolute left-[136px] -bottom-[120px]'/>
        </motion.section>
    )
}
export default Recommendation

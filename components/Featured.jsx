'use client'

import Image from "next/image";
import {motion} from "framer-motion";
import {fadeIn} from "@/components/variants";

const Featured = () => {
    return (
        <motion.section
            className = 'bg-soft_green-secondary xl:h-[240px] max-w-[1300px] ml-auto xl:-top-[120px] relative rounded-tl-[30px] rounded-bl-[30px] px-20 py-16'
            variants={fadeIn('right', 0.2)}
            initial = 'hidden'
            whileInView = {'show'}
            viewport = {{once: false, amount: 0.4}}
        >
            <div className = 'flex flex-col xl:flex-row items-center h-full gap-x-8 text-center xl:text-left'>
                <Image src = '/featured/icon.svg' alt = 'featured_img' width = {74} height = {84} className = 'xl:mr-12'/>
                <h2 className = 'h2 flex-1 text-soft_green leading-relaxed'>Book an awesome room in less than minute</h2>
                <p className = 'flex-1 text-soft_green leading-loose'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    A aliquam aperiam assumenda consectetur doloremque eos est eveniet explicabo inventore iure, magni odio possimus praesentium,
                    quasi quibusdam quis tempore vero voluptates.
                </p>
            </div>
        </motion.section>
    )
}
export default Featured

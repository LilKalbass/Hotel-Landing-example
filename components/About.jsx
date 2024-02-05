'use client'

import {useInView} from "react-intersection-observer";
import {useMediaQuery} from "react-responsive"
import {motion} from "framer-motion";
import {fadeIn} from "@/components/variants";

import Image from "next/image"
import {Button} from "@/components/ui/button";
import Stats from "@/components/Stats";

const About = () => {
    const isMobile = useMediaQuery({
        query: '(max-width: 768px)'
    })
    const [ref, inView] = useInView({
        threshold: !isMobile ? 0.5 : null
    })
    return (
        <section className = 'py-12 xl:pt-0 xl:pb-24' ref = {ref}>
            <div className = 'container mx-auto'>
                <div className = 'flex flex-col xl:flex-row'>
                    <motion.div
                        className = 'flex-1 relative'
                        variants={fadeIn('right', 0.2)}
                        initial = 'hidden'
                        whileInView = {'show'}
                        viewport = {{once: false, amount: 0.4}}
                    >
                        <Image src = '/about/img2.png' alt = 'about_img' width = {560} height = {720}/>
                    </motion.div>
                    <motion.div
                        className = 'xl:max-w-[470px]'
                        variants={fadeIn('left', 0.4)}
                        initial = 'hidden'
                        whileInView = {'show'}
                        viewport = {{once: false, amount: 0.4}}
                    >
                        <h2 className = 'h2 mb-9'>About 'Hotely'</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusantium animi autem consectetur deserunt eius et fugit laudantium nihil obcaecati odio odit porro praesentium quaerat,
                            quo quos recusandae sunt suscipit voluptatum.Assumenda autem dolor et eum exercitationem illo ipsam magnam
                        </p>
                        <div className = 'my-5 xl:my-10 min-h-[35px]'>
                            {inView && <Stats/>}
                        </div>
                        <p className = 'mb-10'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusantium animi autem consectetur deserunt eius et fugit laudantium nihil obcaecati odio odit porro praesentium quaerat,
                            quo quos recusandae sunt suscipit voluptatum.Assumenda autem dolor et eum exercitationem illo ipsam magnam
                        </p>
                        <Button variant = 'accent'>Explore more</Button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
export default About

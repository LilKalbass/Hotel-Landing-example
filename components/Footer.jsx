'use client'

import Image from "next/image";
import Link from "next/link";

import {motion} from "framer-motion";
import {fadeIn} from "@/components/variants";

import Socials from "@/components/Socials";

const Footer = () => {
    return (
        <footer className = 'bg-soft_green-secondary relative pt-12 xl:pt-0'>
            <div className = 'container mx-auto'>
                <motion.div
                    variants = {fadeIn('up', 0.4)}
                    initial = 'hidden'
                    whileInView = {'show'}
                    viewport = {{once: false, amount: 0}}
                >
                    <div className = 'flex flex-col xl:flex-row bg-white p-8 rounded-3xl min-h-[400px] xl:p-20 xl:-translate-y-36 xl:gap-x-12'>
                        <div className = 'xl:w-[470px] mb-6 xl:mb-0'>
                            <Link href = '/'>
                                <Image src = '/footer/logo.svg' alt = 'logo_img' width = {80} height = {36} className = 'mb-2'/>
                            </Link>
                            <p className = 'text-lg leading-9'>
                                <span>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, consequuntur cum cupiditate, eaque enim esse excepturi inventore laudantium magnam non officiis omnis.
                                </span>
                            </p>
                        </div>
                        <div className = 'flex xl:gap-x-16 xl:ml-32'>
                            <div className = 'flex-1'>
                                <h4 className = 'h4 mb-6'>Navigation</h4>
                                <ul className = 'flex flex-col gap-y-6 text-lg'>
                                    <li>
                                        <Link href = '/'>Home</Link>
                                    </li>
                                    <li>
                                        <Link href = '/'>Find Hotel</Link>
                                    </li>
                                    <li>
                                        <Link href = '/'>About us</Link>
                                    </li>
                                    <li>
                                        <Link href = '/'>Contact us</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className = 'flex-1'>
                                <h4 className = 'h4 mb-6'>Contact us</h4>
                                <ul className = 'flex flex-col gap-y-6 text-lg'>
                                    <li>
                                        +380339174015
                                    </li>
                                    <li>
                                        info@hotyly.com
                                    </li>
                                    <li>
                                        hotely.com
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <div className = 'py-12 xl:-mt-32 flex flex-col xl:flex-row xl:justify-between'>
                    <p className = 'text-black font-semibold text-center mb-4 xl:mb-0'>Copyright &copy; 2023. All right reserved.</p>
                    <Socials containerStyles = 'flex gap-x-4 mx-auto text-black xl:mx-0'/>
                </div>
            </div>
        </footer>
    )
}
export default Footer
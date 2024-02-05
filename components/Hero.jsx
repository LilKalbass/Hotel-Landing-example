import React from 'react'
import SearchBox from "@/components/SearchBox";

const Hero = () => {
    return (
        <section className = 'pt-24 pb-12 xl:py-0 xl:h-[1086px] bg-hero2 xl:bg-hero bg-cover bg-center bg-no-repeat flex justify-center items-center'>
            <div className = 'container mx-auto flex items-center justify-center xl:justify-start'>
                <SearchBox/>
            </div>
        </section>
    )
}
export default Hero

'use client'

import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Button} from "@/components/ui/button";
import {Checkbox} from "@/components/ui/checkbox";
import {MapPin} from "lucide-react";

import {motion} from "framer-motion"
import {fadeIn} from "@/components/variants";
import DatePicker from "@/components/DatePicker";
import GuestSelect from "@/components/GuestSelect";

const SearchBox = () => {
    return (
        <motion.div
            className = 'w-full max-w-[500px] bg-white max-h-max flex flex-col border border-outline rounded-2xl p-8'
            variants = {fadeIn('up', 0.2)}
            initial = 'hidden'
            whileInView = {'show'}
            viewport = {{once: false, amount: 0}}
        >
            <div className = 'mb-[20px]'>
                <Label htmlFor = 'destination'>Where are u going?</Label>
                <div className = 'relative flex items-center mb-[20px]'>
                    <Input id = 'destination' placeholder = 'try "Taipei"'/>
                    <MapPin size = {24} className = 'absolute right-6 text-black'/>
                </div>
                <div className = 'flex flex-col xl:flex-row gap-x-[30px] gap-y-5 xl:gap-y-0'>
                    <div className = 'flex flex-1 flex-col'>
                        <Label>Check in</Label>
                        <DatePicker/>
                    </div>
                    <div className = 'flex flex-1 flex-col'>
                        <Label>Check out</Label>
                        <DatePicker/>
                    </div>
                </div>
            </div>
            <div className = 'flex flex-col'>
                <div className = 'flex flex-col flex-1 mb-[20px]'>
                    <Label>Guests</Label>
                    <GuestSelect/>
                </div>
                <div className = 'flex items-center gap-x-3 mb-[20px]'>
                    <Checkbox id = 'terms'/>
                    <Label htmlFor = 'terms' className = 'font-semibold mb-0'>Pay when checkin`in?</Label>
                </div>
                <Button size = 'lg' variant = 'accent'>Search for Hotels</Button>
            </div>
        </motion.div>
    )
}
export default SearchBox

'use client'
import React, {useState} from "react";
import {Button} from "@/components/ui/button";
import {Calendar} from "@/components/ui/calendar";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Calendar as CalendarIcon} from "lucide-react"
import {format} from "date-fns";
import {cn} from "@/lib/utils"

const DatePicker = () => {
    const [date, setDate] = useState(null)
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant = {'default'}
                    className = {cn('w-full justify-between text-left font-medium', !date && 'text-black')}
                >
                    {date ? format(date, 'd MMM') : <span>Pick a date</span>}
                    <CalendarIcon className = 'mr-2 h-5 w-5 text-black'/>
                </Button>
            </PopoverTrigger>
            <PopoverContent className = 'w-auto p-0'>
                <Calendar
                    mode = 'single'
                    selected = {date}
                    onSelect = {(newDate) => setDate(newDate)}
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    )
}
export default DatePicker

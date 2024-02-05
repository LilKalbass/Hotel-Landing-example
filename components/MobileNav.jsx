'use client'
import Image from "next/image";
import Link from "next/link";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import {Menu} from "lucide-react";
import Nav from "@/components/Nav";
import Socials from "@/components/Socials";

const MobileNav = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <Menu size = {40} className = 'text-white'/>
            </SheetTrigger>
            <SheetContent side = 'right'>
                <div className = 'flex flex-col justify-between items-start h-full p-12'>
                    <Link href = '/' className = 'mb-6'>
                        <Image
                            src = '/footer/logo.svg'
                            width = {90}
                            height = {50}
                            alt= 'mobileNavLogo_img'
                            priority
                        />
                    </Link>
                    <Nav
                        containerStyles = 'text-black'
                        listStyles = 'flex flex-col gap-y-6 text-xl cursor-pointer'
                    />
                    <div>
                        <Socials containerStyles = 'flex gap-x-4 text-black'/>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}
export default MobileNav
import React from "react";
import Link from "next/link"

export default function Navbar(props) {

    return(
        <nav className="w-full relative z-40"> 
            <div
            className="
                px-4
                md:px-16
                py-9
                flex
                flex-row
                items-center
                transition
                duration-500
                bg-opacity-90
                drop-shadow-lg" >
                    <Link href="/"> <img className="h-12 lg:h-16" src="/other_images/daryl_no_background.png"  /> </Link>

                    <div className="
                        flex flex-row ml-auto lg:pr-16 gap-7 items-center"> 
                        <Link className="text-slate-950 text-xl font-bold" href="/methodology"> 
                            Methodology
                        </Link>

                    </div>               
            </div>
        </nav>
    )
}
import React from "react"
import Navbar  from "@/components/Navbar"
import Hero from "@/components/Hero"
import Methodology_Content from "@/components/Methodology_Content"


export default function Methodology() {

  return (
    <div> 
        <Navbar />
        <Hero title= "Methodology" include_description = {false} />
        <Methodology_Content />
    </div>
  )
}

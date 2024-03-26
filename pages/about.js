import React from "react"
import Navbar  from "@/components/Navbar"
import Hero from "@/components/Hero"
import About_Content from "@/components/About_Content"


export default function About() {

  return (
    <div> 
        <Navbar />
        <Hero title= "About" include_description = {false} />
        <About_Content />
    </div>
  )
}

"use client";
import React from "react";
import { WavyBackground } from "../components/ui/wavy-background";
import { AnimatedTooltip } from "../components/ui/animated-tooltip";


function MeetOurInstructor() {

    const instructors = [
        {
          id: 1,
          name: 'Elena Briggs',
          designation: 'Vocal Coach',
          image:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        },
        {
          id: 2,
          name: 'Marcus Reid',
          designation: 'Guitar Instructor',
          image:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80',
        },
        {
          id: 3,
          name: 'Julia Zhang',
          designation: 'Piano Teacher',
          image:
            'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        },
        {
          id: 4,
          name: 'Andre Gomez',
          designation: 'Drumming Expert',
          image:
            'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        },
      ];

  return (

    <div className="relative w-full flex flex-col justify-center">

        <WavyBackground className="flex flex-col gap-7 items-center">

            <h2 className="text-4xl md:text-7xl font-bold text-center text-white">

                Meet Our Instructors

            </h2>

            <p className="text-white text-xl">

                Discover the talented professionals who will guide your musical journey

            </p>

            <div className="flex justify-center">

                <AnimatedTooltip items={instructors}/>

            </div>

        </WavyBackground>

    </div>

  )

}

export default MeetOurInstructor
"use client";
 
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";

function TestimonialSection() {

    const testimonials = [
        {
          quote:
            'Joining the music school transformed my understanding of music and helped me to truly discover my own sound. The instructors are world-class!',
          name: 'Alex Johnson',
          title: 'Guitar Student',
        },
        {
          quote:
            "The community and support at this school are unmatched. I've grown not just as a pianist, but also as a performer, thanks to their comprehensive approach.",
          name: 'Samantha Lee',
          title: 'Piano Student',
        },
        {
          quote:
            "This school offered me the tools and confidence to take my singing to the next level. I'm endlessly grateful for the personalized coaching.",
          name: 'Michael Chen',
          title: 'Vocal Student',
        },
        {
          quote:
            'As a violinist, finding the right mentor can be challenging, but this school matched me with a teacher who truly understands my goals and challenges.',
          name: 'Emily Taylor',
          title: 'Violin Student',
        },
        {
          quote:
            'The production courses here opened my eyes to the intricacies of music production. Highly recommend for any aspiring producers!',
          name: 'Chris Morales',
          title: 'Music Production Student',
        },
      ];

  return (

    <div className="flex flex-col w-full h-[35rem] justify-center items-center gap-14 dark:bg-dot-white/[0.2]">
        <h2 className="text-white font-semibold text-4xl">Hear our Harmony: Voices of success</h2>
        <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
        />
    </div>

  )

}

export default TestimonialSection
"use client";
import React from "react";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";
import Image from "next/image";

function WhyChoose() {

    const content = [
        {
          title: "Interactive Learning Platform",
          description:
            "Immerse yourself in an interactive learning platform designed to make music education fun and engaging. Explore interactive lessons, quizzes, and practice exercises that cater to your learning style and pace.",
          content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--green-500),var(--teal-500))] flex items-center justify-center text-white">
              <Image
                src="https://cdn.pixabay.com/photo/2015/05/08/12/47/gramophone-758108_640.jpg"
                width={400}
                height={560}
                className="h-full w-full object-cover"
                alt="Interactive Learning Platform"
              />
            </div>
          ),
        },
        {
          title: "Personalized Learning Experience",
          description:
            "Receive personalized attention and guidance from our experienced instructors. Our adaptive learning algorithms tailor lesson plans to your individual needs, ensuring that you make steady progress and achieve your musical objectives.",
          content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--yellow-500),var(--amber-500))] flex items-center justify-center text-white">
              <Image
                src="https://cdn.pixabay.com/photo/2016/11/23/00/58/record-player-1851576_640.jpg"
                width={400}
                height={560}
                className="h-full w-full object-cover"
                alt="Personalized Learning Experience"
              />
            </div>
          ),
        },
        {
          title: "Flexible Scheduling Options",
          description:
            "Enjoy the flexibility of scheduling music lessons at your convenience. With flexible scheduling options, you can book lessons that fit your busy lifestyle, allowing you to pursue your passion for music without disrupting your routine.",
          content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--red-500),var(--pink-500))] flex items-center justify-center text-white">
              <Image
                src="https://cdn.pixabay.com/photo/2018/03/12/22/15/music-notes-3221097_640.jpg"
                width={400}
                height={560}
                className="h-full w-full object-cover"
                alt="Flexible Scheduling Options"
              />
            </div>
          ),
        },
        {
          title: "High-Quality Instructional Materials",
          description:
            "Access high-quality instructional materials curated by music experts. From instructional videos and sheet music to audio samples and practice tracks, our platform provides the resources you need to master your instrument and elevate your musical skills.",
          content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--indigo-500),var(--purple-500))] flex items-center justify-center text-white">
              <Image
                src="https://cdn.pixabay.com/photo/2016/03/28/09/36/music-1285165_640.jpg"
                width={400}
                height={560}
                className="h-full w-full object-cover"
                alt="High-Quality Instructional Materials"
              />
            </div>
          ),
        },
        {
          title: "Active Community Support",
          description:
            "Join a thriving community of music enthusiasts and learners. Connect with fellow students, share your progress, and receive feedback and support from our active community of instructors and peers.",
          content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--blue-500))] flex items-center justify-center text-white">
              <Image
                src="https://cdn.pixabay.com/photo/2018/07/01/20/01/music-3510326_640.jpg"
                width={400}
                height={560}
                className="h-full w-full object-cover"
                alt="Active Community Support"
              />
            </div>
          ),
        }
      ];      

  return (

    <div className="mt-9">
        <h2 className="flex w-full justify-center pb-12 text-4xl font-bold text-slate-100">Why Choose Us</h2>
      <StickyScroll content={content} />
    </div>

  )
}

export default WhyChoose
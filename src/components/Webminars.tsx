"use client"
import React from "react";
import { BackgroundGradient } from "../components/ui/background-gradient";
// import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../components/ui/moving-border";


function Webminars() {

    const featuredWebinars = [
        {
          title: 'Understanding Music Theory',
          description:
            'Dive deep into the fundamentals of music theory and enhance your musical skills.',
          slug: 'understanding-music-theory',
          isFeatured: true,
          url: "https://cdn.pixabay.com/photo/2022/10/03/12/03/microphone-7495739_640.jpg",
          alt: "webinar",
        },
        {
          title: 'The Art of Songwriting',
          description:
            'Learn the craft of songwriting from experienced musicians and songwriters.',
          slug: 'the-art-of-songwriting',
          isFeatured: true,
          url: "https://cdn.pixabay.com/photo/2016/11/22/19/15/hand-1850120_640.jpg",
          alt: "webinar",
        },
        {
          title: 'Mastering Your Instrument',
          description:
            'Advanced techniques to master your musical instrument of choice.',
          slug: 'mastering-your-instrument',
          isFeatured: true,
          url: "https://cdn.pixabay.com/photo/2023/01/29/00/16/drums-7751985_640.jpg",
          alt: "webinar",
        },
        {
          title: 'Music Production Essentials',
          description:
            'Get started with music production with this comprehensive overview.',
          slug: 'music-production-essentials',
          isFeatured: true,
          url: "https://cdn.pixabay.com/photo/2022/07/10/01/47/grades-7312021_640.jpg",
          alt: "webinar",
        },
        // Added two more webinars
        {
          title: 'Live Performance Techniques',
          description:
            'Enhance your live performance skills with expert tips and strategies.',
          slug: 'live-performance-techniques',
          isFeatured: true,
          url: "https://cdn.pixabay.com/photo/2015/04/13/13/37/audio-720589_640.jpg",
          alt: "webinar",
        },
        {
          title: 'Digital Music Marketing',
          description:
            'Learn how to promote your music effectively in the digital age.',
          slug: 'digital-music-marketing',
          isFeatured: true,
          url: "https://cdn.pixabay.com/photo/2017/03/09/20/53/microphone-2130806_640.jpg",
          alt: "webinar",
        },
      ];

  return (

    <div className="flex flex-col gap-4 justify-center items-center mt-28 mb-14">

        <h2 className="font-bold md:text-4xl text-2xl text-teal-600 max-w-full text-center mx-auto">FEATURED WEBINARS</h2>

        <p className="font-normal md:text-2xl text-lg text-neutral-300 max-w-[40rem] text-center mx-auto mt-3">Enhance Your Musical Journey</p>

        <div className="grid grid-cols-3 gap-5 mt-14">

            {
                featuredWebinars.map((webinar => (
                    <div key={webinar.slug}>
                        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                            <Image
                            src={webinar.url}
                            alt={webinar.alt}
                            height="150"
                            width="300"
                            className="object-cover"
                            />
                            <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                            {webinar.title}
                            </p>
                    
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">
                            {webinar.description}
                            </p>

                            <Link href={"/courses"}>

                                <button className="text-base sm:text-sm underline text-black mt-4 mb-2 dark:text-neutral-200">
                                    View Webinar
                                </button>

                            </Link>

                        </BackgroundGradient>
                    </div>
                )))
            }

        </div>

        <div className="mt-20">
            <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-gray-800 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                >
                Explore courses
            </Button>
        </div>
      
    </div>

  )
}

export default Webminars
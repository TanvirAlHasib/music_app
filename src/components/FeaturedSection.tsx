"use client"
import React from 'react'
import { HoverEffect } from "../components/ui/card-hover-effect";
import { Button } from "../components/ui/moving-border";
import Link from 'next/link';
import projects from "../data/music_courses.json"

// custom data type creation for course data

export interface courseDataType{

    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
    image: string,

}

function FeaturedSection() {

    // getting featured true courses by filter
    const featuredCourses = projects.courses.filter((course:courseDataType) => course.isFeatured)

  return (
    <div className='flex w-full justify-center flex-col md:gap-4 gap-1 md:-mt-[6rem] -mt-[7rem] md:py-[5rem] py-9 bg-gray-950'>

        <h1 className='font-bold md:text-4xl text-2xl text-teal-600 max-w-full text-center mx-auto'>FEATURED COURSES</h1>

        <p className='font-normal md:text-2xl text-lg text-neutral-300 max-w-[40rem] text-center mx-auto mt-3'>Learn with the best</p>

        <div className="max-w-7xl mx-auto px-8">
            <HoverEffect items={featuredCourses} />
        </div>

        <div className="flex w-full justify-center">

            <Link href={"/courses"}>
                <Button
                    borderRadius="1.75rem"
                    className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                >
                    View All Courses
                </Button>
            </Link>

        </div>

    </div>
  )
}

export default FeaturedSection
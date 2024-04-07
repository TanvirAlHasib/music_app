/* eslint-disable @next/next/no-img-element */
'use client'

import Link from 'next/link'
import React from 'react'
import { Button } from "@/components/ui/moving-border";

function page() {
    
  return (
    <div>
        <div className="flex h-screen flex-col bg-black/[0.96] bg-grid-white/[0.038]">
            <img
                src="https://cdn.pixabay.com/photo/2016/11/22/19/15/hand-1850120_640.jpg"
                alt=""
                className="h-[20rem] w-full object-cover"
            />

            <div className="flex flex-1 items-center justify-center">
                <div className="mx-auto max-w-xl px-4 py-8 text-center flex flex-col gap-4">
                <h1 className="text-2xl font-bold tracking-tight text-gray-300 sm:text-4xl">
                    Message sent successfully
                </h1>

                <p className="mt-4 text-gray-400">
                Master the art of the music
                </p>

                <Link href={"/"} className='mt-4'>
                    <Button
                        borderRadius="1.75rem"
                        className="bg-neutral-900 text-white border-slate-800"
                        type="submit"
                        >
                        Go Back Home
                    </Button>
                </Link>

                </div>
            </div>
        </div>
    </div>
  )
}

export default page
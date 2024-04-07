/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { cn } from "../utils/cn";
import { Spotlight } from "../components/ui/Spotlight";
import HeroButton from "./HeroButton";


export function Hero() {
    return (
      <div className="md:h-[39.5rem] h-[37rem] w-full flex md:items-center md:justify-cente antialiased bg-grid-white/[0.02] relative overflow-hidden">

        <Spotlight
          className="-top-10 -left-5 md:left-[27rem] md:-top-[10rem]"
          fill="white"
        />

        <div className="flex flex-col gap-4 md:gap-8 justify-center w-full">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Master the art of the music
          </h1>

          <p className=" font-normal text-lg text-neutral-300 max-w-[40rem] text-center mx-auto">
          Dive into our comprehensive music courses and transform your musical journey today. Whether you're a beginner or looking to refine your skills, join us to unlock your true potential.
          </p>

          <div className="flex w-full justify-center">

            <HeroButton/>

          </div>

        </div>
      </div>
    );
  }
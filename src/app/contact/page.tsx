/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { FormEvent, useState } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/moving-border";
// import Link from "next/link";
// import { useRouter } from "next/router";

function page() {

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  // const router = useRouter

  // a call back function and FormEvent<HTMLFormElement> is the data type of event
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Submitted:', { email, message });
    window.location.href = "/ContactSendConfirmation";
  };

  return (
    <div className=" relative flex flex-col gap-6 w-full min-h-screen justify-center items-center bg-gray-100 dark:bg-gray-900">

      <h1 className="text-white font-bold font-sans text-center text-7xl z-10">Contact Us</h1>

      <p className="text-gray-400 font-normal text-lg max-w-lg text-center z-10">
        We&apos;re here to help with any questions about our courses, programs, or events. Reach out and let us know how we can assist you in your musical journey.
      </p>

      <form method="get" className="flex flex-col justify-center z-10" onSubmit={handleSubmit}>
        <input 
          type="email" 
          name="email" 
          id="email"
          placeholder="Your email address"
          onChange={(e) => setEmail(e.target.value)}
          required
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4 bg-neutral-950 placeholder:text-neutral-700 p-5 text-white"
        />

        <textarea 
        name="message" 
        id="message" 
        cols={70} 
        rows={8}
        placeholder="Your message"
        required
        onChange={(e) => setMessage(e.target.value)}
        className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4 bg-neutral-950 placeholder:text-neutral-700 p-5 text-white"
        ></textarea>

        {/* <button type="submit" className="mt-14 text-white">Send Message</button> */}

        <div className="mt-8 text-center">
          <Button
              borderRadius="1.75rem"
              className="bg-neutral-950 text-white border-slate-800"
              type="submit"
            >
              Send Message
          </Button>
        </div>

      </form>

      <BackgroundBeams/>

    </div>
  )
}

export default page
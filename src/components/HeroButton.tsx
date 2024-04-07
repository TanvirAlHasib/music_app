"use client";
import React from "react";
import { Button } from "../components/ui/moving-border";
import Link from "next/link";

function HeroButton() {
  return (
    <div>
        <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
        >
        <Link href={"/courses"}>
          Explore courses
        </Link>
        </Button>
    </div>
  )
}

export default HeroButton
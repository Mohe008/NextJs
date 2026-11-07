import Link from 'next/link'
import React from 'react'
import { cn } from "@/lib/utils";
import { Spotlight } from "./ui/Spotlight";
import { Button } from './ui/moving-border';

function HeroSection() {
  return (
    <div
      className="h-auto md:h-160 w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0"
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
        )}
      />
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="blue"
      />
      <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0 flex flex-col items-center justify-center">
        <h1 className="bg-opacity-50 bg-linear-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
          Master the art of music
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-center text-base font-normal text-neutral-300 md:text-lg">
          Dive into our comprehensive music courses and transform your musical journey today. Whether you're a beginner or looking to refine your skills, join us to unlock your true potential.
        </p>
        <div className="mt-4">
          <Link href="/courses">
            <Button className="cursor-pointer">
              Explore Courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
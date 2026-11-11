"use client"

import React from 'react'
import { HoverEffect } from './ui/card-hover-effect';
import Link from 'next/link';
import { Button } from './ui/moving-border';

function CardHoverSection() {
  return (
    <div className='2xl:max-w-8xl flex flex-col items-center p-16 bg-blue-900/15'>
      <div className='flex flex-col items-center'>
        <h2 className='text-xl sm:text-2xl text-[#0BB7AD] font-bold text-center'>Card Hover Section</h2>
        <p className='py-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-center'>Enhance Your Designing Journey</p>
      </div>
      <div >
        <HoverEffect items={
          cardHoverElement.map((card) => ({
            title: card.title,
            description: card.description,
            link: `/${card.slug}`
          }))
        }
        />
      </div>
      <div>
        <Link href="/courses">
          <Button>
            View All Cards
          </Button>
        </Link>
      </div>
    </div>
  )
}


const cardHoverElement = [
    {
      title: 'Understanding Music Theory',
      description:
        'Dive deep into the fundamentals of music theory and enhance your musical skills.',
      slug: 'understanding-music-theory',
      isFeatured: true,
    },
    {
      title: 'The Art of Songwriting',
      description:
        'Learn the craft of songwriting from experienced musicians and songwriters.',
      slug: 'the-art-of-songwriting',
      isFeatured: true,
    },
    {
      title: 'Mastering Your Instrument',
      description:
        'Advanced techniques to master your musical instrument of choice.',
      slug: 'mastering-your-instrument',
      isFeatured: true,
    },
    {
      title: 'Music Production Essentials',
      description:
        'Get started with music production with this comprehensive overview.',
      slug: 'music-production-essentials',
      isFeatured: true,
    },
    // Added two more webinars
    {
      title: 'Live Performance Techniques',
      description:
        'Enhance your live performance skills with expert tips and strategies.',
      slug: 'live-performance-techniques',
      isFeatured: true,
    },
    {
      title: 'Digital Music Marketing',
      description:
        'Learn how to promote your music effectively in the digital age.',
      slug: 'digital-music-marketing',
      isFeatured: true,
    },
  ];

export default CardHoverSection
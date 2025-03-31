'use client'

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import Link from 'next/link';
import Image from "next/image";

const Work = ({workItems}) => {

    const workRef = useRef(null);

    useGSAP(() => {
        if (workRef.current) {
        gsap.fromTo(
            workRef.current,
            { transform: 'translateX(100%)', opacity: 0 }, // Start from the right, invisible
            { transform: 'translateX(0%)', opacity: 1, duration: 1.8, ease: 'power3.out', delay: 0.6 } // Slide to the left, visible
        );
        }
    }, { scope: workRef.current });

    return (
        <section className='overflow-hidden'>
            <div ref={workRef} className="overflow-x-auto whitespace-nowrap scroll-smooth py-4 px-8 custom-scrollbar">
                {workItems.map((item) => (
                    <Link href={`/work/${item.id}`} key={item.id} className="inline-block mr-4 bg-white/50 hover:bg-white rounded-2xl shadow-md hover:shadow-xl w-[481px] h-[307px] lg:w-[627px] lg:h-[405px]">
                        <Image
                            src={item.imageUrl}
                            alt={item.altText}
                            title={item.altText}
                            width={627}
                            height={405}
                            className="h-full object-cover rounded-2xl p-2"
                            priority
                        />
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default Work

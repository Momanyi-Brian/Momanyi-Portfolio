'use client'

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Approach = ({ processes }) => {
    
    const titleRef = useRef(null);
    const itemsRef = useRef(null);
    
    useEffect(() => {
        const ctx = gsap.context(() => {
            // Title Animation
            gsap.fromTo(
                titleRef.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: 'power3.out',
                    scrollTrigger: {
                        trigger: titleRef.current,
                        start: 'bottom-=33% bottom', // Trigger when 1/3 of the element is visible
                    },
                }
            );

            // Items Animation (staggered)
            gsap.utils.toArray('.gsapItems').forEach((item, index) => {
                gsap.fromTo(
                item,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: index * 0.2, // Add delay based on index
                    scrollTrigger: {
                        trigger: item,
                        start: 'bottom-=33% bottom',
                    },
                }
                );
            });

            // add gsap animation
        }, itemsRef);

        return () => ctx.revert();
    }, [processes]);

    return (
        <section ref={itemsRef} className='max-w-7xl mx-auto space-y-2 p-4'>
            <div ref={titleRef} className='flex flex-row items-center space-x-5'>
                <svg className='w-6 h-w-6' fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M160 80c0-26.5 21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 352c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-352zM0 272c0-26.5 21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 160c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48L0 272zM368 96l32 0c26.5 0 48 21.5 48 48l0 288c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48z"/>
                </svg>
                
                <h6 className='tracking-tighter leading-14 lg:leading-20 font-semibold'>Easy Step Process</h6>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 bg-white rounded-2xl p-2'>
                {processes.slice(0, 4).map((process) => (
                    <div key={ process.id } className='gsapItems col-span-1 bg-alto-200 hover:bg-alto-300 duration-200 rounded-lg py-4 px-6'>
                        <div className='text-xs font-medium bg-white inline-block py-1 px-3 rounded-full mb-4'>{ process.id } Step</div>

                        <p className='font-bold tracking-tight'>{ process.title }</p>

                        <span className='text-balance tracking-tight'>{ process.description }</span>
                    </div>
                ))}

                {processes.slice(-1).map((process) => (
                    <div key={ process.id } className='gsapItems col-span-1 md:col-span-2 bg-alto-900 hover:bg-alto-950 text-white duration-200 rounded-lg py-4 px-6'>
                        <div className='text-xs font-medium bg-white text-dark inline-block py-1 px-3 rounded-full mb-4'>{ process.id } Step</div>

                        <p className='font-bold tracking-tight'>{ process.title }</p>

                        <span className='text-balance tracking-tight'>{ process.description }</span>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Approach

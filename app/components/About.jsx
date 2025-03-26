'use client'

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import author from '../../public/images/author.webp'

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const authorStyle = {
        backgroundImage: `url(${author.src})`
    };

    const titleRef = useRef(null);
    const itemsRef = useRef(null);
    const aboutRef = useRef(null);
    
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

            // about animation
            gsap.fromTo(
                aboutRef.current,
                { opacity: 0, y: 50, filter: 'blur(10px)' },
                { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1, ease: 'power3.out',
                    scrollTrigger: {
                        trigger: aboutRef.current,
                        start: 'top 85%', // Trigger when 1/3 of the element is visible
                    },
                }
            );

            // add gsap animation
        }, itemsRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={itemsRef} className='max-w-7xl mx-auto space-y-2 p-4'>
            <div ref={titleRef} className='flex flex-row items-center space-x-5'>
                <svg className='w-6 h-w-6' fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/>
                </svg>
                
                <h6 className='tracking-tighter leading-14 lg:leading-20 font-semibold'>About</h6>
            </div>

            <div ref={aboutRef} className='grid grid-cols-1 md:grid-cols-3 gap-2'>
                <div className='relative h-[28rem] col-span-1 flex justify-center bg-contain bg-no-repeat bg-center' style={authorStyle}>
                    <div className='absolute bottom-0 w-full h-full bg-gradient-to-t from-cream via-transparent to-transparent'></div>
                </div>
                
                <div className='col-span-2 flex items-center'>
                    <span className='tracking-tight text-lg text-balance'>
                        Momanyi Brian, dedicated Frontend Developer based in Kenya. <br /><br /> With a foundation built on a longstanding passion for aesthetic excellence, 
                        my focus has evolved into specialized digital design. Over the past 2 years, I have collaborated with startups and established ventures, 
                        consistently delivering impactful results and driving significant conversions. <br /><br />
                        My attention to detail is integral to my design process, ensuring a refined end-user experience and fostering natural, organic engagement. 
                        I believe that direct collaboration with clients is essential for cultivating creative solutions and delivering exceptional user experiences.
                    </span>
                </div>
            </div>
        </section>
    )
}

export default About

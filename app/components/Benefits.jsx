'use client'

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Benefits = ({benefits, services, technologies}) => {
    
    const titleRef = useRef(null);
    const itemsRef = useRef(null);
    const textRef = useRef(null);
    const ulListRef = useRef(null);

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

            // Text Animation (opacity)
            if (textRef.current) {
                gsap.set(textRef.current, { opacity: 0.1 }); // Initial opacity

                ScrollTrigger.create({
                    trigger: textRef.current,
                    start: 'bottom bottom',
                    end: 'bottom center',
                    scrub: 1, // Smooth animation based on scroll
                    onUpdate: (self) => {
                        const progress = self.progress;
                        gsap.to(textRef.current, {
                        opacity: Math.min(0.1 + progress, 1), // Increase opacity based on progress
                        });
                    },
                });
            }

            // Numbers pulse slightly as they come into view
            gsap.utils.toArray('.number-count').forEach((element) => {
                gsap.fromTo(element, { scale: 1 }, {
                    scale: 1.2,
                    duration: 0.8,
                    yoyo: true,
                    repeat: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 80%',
                    }
                });
            });

            // Text Shuffle Animation
            gsap.utils.toArray('ul li h5').forEach((element) => {
                const originalText = element.textContent;
                const alphabet = '~!@#$%abcdef';
        
                gsap.set(element, { opacity: 0 }); // Initial opacity 0
        
                ScrollTrigger.create({
                  trigger: element,
                  start: 'top 90%',
                  onEnter: () => {
                    let iterations = 0;
                    const interval = setInterval(() => {
                        if (iterations < 15) { // Adjust number of iterations
                            let shuffledText = '';
                            for (let i = 0; i < originalText.length; i++) {
                                if (originalText[i] === ' ') {
                                    shuffledText += ' ';
                                } else {
                                    shuffledText += alphabet[Math.floor(Math.random() * alphabet.length)];
                                }
                            }
                            element.textContent = shuffledText;
                            iterations++;
                        } else {
                            clearInterval(interval);
                            element.textContent = originalText;
            
                            // Animate opacity to 1
                            gsap.to(element, { opacity: 1, duration: 0.5 });
                        }
                        }, 50); // Adjust interval speed
            
                        // Animate initial opacity to 1
                        gsap.to(element, { opacity: 1, duration: 0.5 });
                    },
                    once: true, // Run only once
                });
            });

            // ul list Animation
            gsap.fromTo(
                ulListRef.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: 'power3.out',
                    scrollTrigger: {
                        trigger: ulListRef.current,
                        start: 'bottom-=33% bottom', // Trigger when 1/3 of the element is visible
                    },
                }
            );

            // Other animations can be added here...
        }, itemsRef);

        return () => ctx.revert();
    }, [benefits]);

    return (
        <section ref={itemsRef} className='max-w-7xl mx-auto space-y-2 p-4'>
            <div ref={titleRef} className='flex flex-row items-center space-x-5'>
                <svg className='w-6 h-w-6' fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM216 232l0 102.1 31-31c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-72 72c-9.4 9.4-24.6 9.4-33.9 0l-72-72c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l31 31L168 232c0-13.3 10.7-24 24-24s24 10.7 24 24z"/>
                </svg>

                <h6 className='tracking-tighter leading-14 lg:leading-20 font-semibold'>What You Get</h6>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                {benefits.map((item) => (
                    <div key={ item.id } className='gsapItems space-y-2'>
                        <h6 className='font-semibold tracking-tight'>{ item.title }</h6>

                        <span className='text-balance tracking-tight text-alto-700'>{ item.description }</span>
                    </div>
                ))}
            </div>

            <div className='py-4'>
                <div ref={textRef} className='max-w-4xl'>
                    <h5 className='uppercase font-medium tracking-tighter leading-9 lg:leading-10 text-balance'>Elegantly Crafted, Effective Web Designs Tailored to Your Business Needs Without Breaking Your Pocket</h5>
                </div>

                <div className='flex flex-row justify-between md:justify-evenly mt-4 md:mt-8'>
                    <div className='flex flex-col'>
                        <h2 className='leading-16 font-semibold number-count'>10+</h2>
                        <span className='text-sm font-medium'>Completed Projects</span>
                    </div>

                    <div className='flex flex-col'>
                        <h2 className='leading-16 font-semibold number-count'>84%</h2>
                        <span className='text-sm font-medium'>Conversion Rate Improvement</span>
                    </div>

                    <div className='flex flex-col'>
                        <h2 className='leading-16 font-semibold number-count'>2+</h2>
                        <span className='text-sm font-medium'>Years Experience</span>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 py-4'>
                <div>
                    <ul className='text-3xl font-medium tracking-tight space-y-2'>
                        {services.map((service) => (
                            <li key={ service.id }><h5>{ service.title }</h5></li>
                        ))}
                    </ul>
                </div>

                <div ref={ulListRef} className='grad-to-br text-cream rounded-2xl p-6'>
                    <span className='text-3xl font-semibold'>Technologies</span>
                    <ul className='text-xl font-medium tracking-tight space-y-2 list-disc list-outside ml-8 pt-4'>
                        {technologies.map((technology) => (
                            <li key={ technology.id }><p>{ technology.title }</p></li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Benefits

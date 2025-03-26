'use client'

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Faq = ({ faqs }) => {
    
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
                { y: 50, opacity: 0, filter: 'blur(10px)' },
                { y: 0, opacity: 1, filter: 'blur(0px)', duration: 1, ease: 'power3.out', delay: index * 0.2, // Add delay based on index
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
    }, [faqs]);

    return (
        <section ref={itemsRef} className='max-w-7xl mx-auto space-y-2 p-4'>
            <div ref={titleRef} className='flex flex-row items-center space-x-5'>
                <svg className='w-6 h-w-6' fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/>
                </svg>
                
                <h6 className='tracking-tighter leading-14 lg:leading-20 font-semibold'>FAQ</h6>
            </div>

            <div className="max-w-4xl mx-auto space-y-3">
                {/* FAQ */}
                <details className="gsapItems group rounded-lg bg-white p-6 [&_summary::-webkit-details-marker]:hidden" >
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                        <p className="font-medium">How long does it take to build a Website?</p>

                        <span className="relative size-5 shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 size-5 opacity-100 group-open:opacity-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 size-5 opacity-0 group-open:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                        </span>
                    </summary>

                    <span className="mt-4 leading-relaxed text-alto-800">
                        The time it takes to build a website can vary depending on its complexity and specific requirements. As a general guideline, I typically allocate: <br /><br />
                        
                        Basic Website: Approximately 1 to 2 weeks for completion. <br />
                        Intermediate Website: Typically takes 3 to 4 weeks to finalize. <br />
                        Premium Website: Allow 5 to 6 weeks for development and refinement. <br /><br />
                        
                        These timeframes are estimates and may be subject to adjustments based on factors such as the scope of the project, client feedback, and any additional features or customizations requested. Rest assured, I strive to deliver high-quality websites within reasonable timeframes while ensuring attention to detail and client satisfaction.
                    </span>
                </details>

                {/* FAQ */}
                {faqs.map((questions) => (
                    <details key={questions.id} className="gsapItems group rounded-lg bg-white p-6 [&_summary::-webkit-details-marker]:hidden">
                        <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                        <p className="font-medium">{ questions.question }</p>

                        <span className="relative size-5 shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 size-5 opacity-100 group-open:opacity-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 size-5 opacity-0 group-open:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                        </span>
                        </summary>

                        <span className="mt-4 leading-relaxed text-alto-800">
                            { questions.answer }
                        </span>
                    </details>
                ))}
            </div>
        </section>
    )
}

export default Faq

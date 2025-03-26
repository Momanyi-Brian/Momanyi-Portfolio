import { workItems } from '../../lib/portfolioData';

import Image from 'next/image';

import Footer from '@/app/components/Footer';

export default async function WorkDetails({ params }) { //async function

    const { id } = await params; // Get the id from the URL parameters
    const workItem = workItems.find((item) => item.id === parseInt(id)); // Find the work item

    if (!workItem) {
        return <div>Work item not found.</div>; // Handle case where item is not found
    }

    return (
        <>
            <section className='max-w-7xl mx-auto p-4'>
                <div className='flex flex-row items-center space-x-5'>
                    <svg className='w-6 h-w-6' fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM216 232l0 102.1 31-31c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-72 72c-9.4 9.4-24.6 9.4-33.9 0l-72-72c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l31 31L168 232c0-13.3 10.7-24 24-24s24 10.7 24 24z"/>
                    </svg>

                    <h6 className='tracking-tighter leading-14 lg:leading-20 font-semibold'>{ workItem.altText }</h6>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2 bg-white rounded-2xl p-2'>
                    <div className='gsapItems col-span-1 md:col-span-2 lg:col-span-3 rounded-lg py-40 md:py-4 px-6 relative overflow-hidden'>
                        <Image
                            src={workItem.imageUrl}
                            alt="Work Background"
                            width={627}
                            height={405}
                            className="absolute inset-0 w-full h-full object-cover"
                            priority
                        />
                    </div>

                    <div className='gsapItems col-span-1 md:col-span-1 lg:col-span-2 bg-alto-200 rounded-2xl'>
                        <div className='grad-to-br text-cream rounded-2xl p-6'>
                            <span className='text-2xl font-semibold'>Technologies</span>
                            <ul className='text-md tracking-tight space-y-2 list-disc list-outside ml-8 pt-4'>
                                {workItem.technology.map((item) => (
                                    <li key={ item.id }><span>{ item.title }</span></li>
                                ))}
                            </ul>
                        </div>

                        <div className='flex flex-col justify-center items-center p-6'>
                            <span className='text-xl font-semibold'>Live Preview</span>
                            <a href={workItem.linkUrl} target='_blank' className="text-black bg-white border border-white hover:bg-alto-100 duration-300 focus:outline-none focus:ring-2 focus:ring-white font-semibold rounded-full text-md px-5 py-2.5 text-center me-2 mb-2 flex justify-center items-center space-x-2 w-full sm:max-w-sm mt-4 shadow-md">
                                <svg className='w-5 h-w-5' fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                    <path d="M64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l176 0-10.7 32L160 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-69.3 0L336 416l176 0c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0zM512 64l0 224L64 288 64 64l448 0z"/>
                                </svg>

                                <span>Demo</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className='bg-white rounded-2xl p-4 mt-4'>
                    <div className='flex flex-row items-center space-x-5'>
                        <svg className='w-6 h-w-6' fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M160 80c0-26.5 21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 352c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-352zM0 272c0-26.5 21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 160c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48L0 272zM368 96l32 0c26.5 0 48 21.5 48 48l0 288c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48z"/>
                        </svg>
                        
                        <h6 className='tracking-tighter leading-14 lg:leading-20 font-semibold'>Features</h6>
                    </div>

                    <ul className='tracking-tight space-y-2 list-disc list-outside ml-8'>
                        {workItem.features.map((item) => (
                            <li key={ item.id }><p>{ item.description }</p></li>
                        ))}
                    </ul>
                </div>
            </section>

            < Footer />
        </>
    )
}

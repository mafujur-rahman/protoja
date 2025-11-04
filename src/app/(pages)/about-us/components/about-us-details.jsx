import AnimatedButton from '@/components/gsap/animated-button';
import RequestAdemoButton from '@/components/gsap/request-a-demo-button';
import React from 'react';

const AboutUsDetails = () => {
    return (
        <div>
            <h1 className='text-[#FFF2D3] font-medium text-[18px]' >Designing with Purpose, Delivering for the Future </h1>
            <p className='font-medium py-10 md:text-5xl text-3xl lg:text-8xl text-[#FAFAFA] '>Design That Drives <br /> Impact Life </p>
            <div className='flex sm:flex-row flex-col items-center gap-4'>
                <RequestAdemoButton/>
                <AnimatedButton href={'/contact'} label={"schedule a call"} />
            </div>
        </div>
    );
};

export default AboutUsDetails;
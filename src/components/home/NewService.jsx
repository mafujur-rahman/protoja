'use client'
import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { MdArrowOutward } from 'react-icons/md';

const servicesData = [
    {
        id: 1,
        title: 'Product Strategy & Roadmap',
        image: '/assets/img/service/service.jpg',
        features: ['Market Analysis', 'Feature Prioritization', 'Growth Planning', 'Long-term Strategy'],
    },
    {
        id: 2,
        title: 'UX/UI Design',
        image: '/assets/img/service/service.jpg',
        features: ['Wireframing', 'Prototyping', 'User Testing', 'Visual Design'],
    },
    {
        id: 3,
        title: 'Custom Software Development',
        image: '/assets/img/service/service.jpg',
        features: ['Frontend Engineering', 'Backend Development', 'QA & Testing', 'Deployment & CI/CD'],
    },
    {
        id: 4,
        title: 'Product Analytics',
        image: '/assets/img/service/service.jpg',
        features: ['Data Tracking', 'KPI Monitoring', 'A/B Testing', 'User Insights'],
    },
    {
        id: 5,
        title: 'Consulting Services',
        image: '/assets/img/service/service.jpg',
        features: ['Strategy Planning', 'Process Optimization', 'Market Research', 'Technology Consulting'],
    },
];

const ServiceItem = ({ service, index, activeId, setActiveId }) => {
    const containerRef = useRef(null);
    const imageRef = useRef(null);
    const listRef = useRef(null);
    const iconRef = useRef(null);
    const isActive = activeId === service.id;

    const handleMouseEnter = () => setActiveId(service.id);
    const handleMouseLeave = () => setActiveId(null);

    useEffect(() => {
        if (!containerRef.current || !imageRef.current || !listRef.current || !iconRef.current) return;

        if (isActive) {
            gsap.to(containerRef.current, { backgroundColor: '#000000', duration: 0.3 });
            gsap.to(iconRef.current, {
                opacity: 0, duration: 0.3, onComplete: () => {
                    gsap.set(listRef.current, { display: 'flex' });
                    gsap.fromTo(listRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5, ease: 'power3.out' });

                    gsap.set(imageRef.current, { display: 'flex' });
                    gsap.fromTo(imageRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' });
                }
            });
        } else {
            gsap.to(containerRef.current, { backgroundColor: '#1e1e1e', duration: 0.3 });
            gsap.to(imageRef.current, { y: 30, opacity: 0, duration: 0.3, onComplete: () => gsap.set(imageRef.current, { display: 'none' }) });
            gsap.to(listRef.current, { opacity: 0, duration: 0.3, onComplete: () => gsap.set(listRef.current, { display: 'none' }) });
            gsap.to(iconRef.current, { opacity: 1, duration: 0.3 });
        }
    }, [isActive]);

    return (
        <div
            ref={containerRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="flex items-center max-w-8xl mx-auto py-5 gap-6 mb-3 px-8 rounded-2xl bg-[#1e1e1e] relative"
            style={{ height: '150px' }}
        >
            <div className="flex items-center gap-4 w-[35%]">
                <span className={`text-xl font-bold transition-colors duration-300 ${isActive ? 'text-orange-500' : 'text-gray-500'}`}>{index}.</span>
                <h4 className={`text-2xl font-semibold transition-colors duration-300 truncate ${isActive ? 'text-orange-500' : 'text-gray-400'}`}>{service.title}</h4>
            </div>

            <div ref={imageRef} className="w-[30%] flex justify-center items-center" style={{ opacity: 0, display: 'none' }}>
                <div className="w-[280px] h-[120px] rounded-lg flex items-center justify-center shadow-xl overflow-hidden">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                </div>
            </div>

            <ul
                ref={listRef}
                className="absolute right-16 top-0 h-full flex flex-col justify-center space-y-3 text-sm text-gray-200"
                style={{ opacity: 0, display: 'none' }}
            >
                {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                        <span className="text-orange-500 text-2xl leading-none mr-2 mt-[-3px] font-bold">&bull;</span>
                        {feature}
                    </li>
                ))}
            </ul>

            <div
                ref={iconRef}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-orange-500 p-3 rounded-full text-white text-3xl flex items-center justify-center transition-opacity duration-300"
            >
                <MdArrowOutward />
            </div>
        </div>
    );
};

const NewServices = () => {
    const [activeId, setActiveId] = useState(null);

    return (
        <section className="bg-[#272727] text-white min-h-screen py-20">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 pb-12">
                    <div>
                        <h3 className="text-white text-xl font-semibold tracking-wider uppercase mb-3">Services</h3>
                        <p className="text-gray-400 text-lg max-w-sm">{servicesData[0].features.join(', ')}</p>
                    </div>
                    <div className="flex items-end justify-start md:justify-end">
                        <h2 className="text-5xl lg:text-6xl font-bold leading-tight text-white">Our award winning digital services</h2>
                    </div>
                </div>

                <div className="space-y-0">
                    {servicesData.map((service, index) => (
                        <ServiceItem key={service.id} service={service} index={index + 1} activeId={activeId} setActiveId={setActiveId} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewServices;

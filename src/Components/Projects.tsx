import React, { useEffect, useRef, useState } from 'react';
import FadeInTop from '../animations/FadeInTop.tsx';
import RevealFromLeft from '../animations/RevealFromLeft.tsx';
import RevealFromRight from '../animations/RevealFromRight.tsx';

interface CarouselItem {
    name: string;
    description: string;
    image: string;
    link: string;
}

interface Props {
    items: CarouselItem[];
    meta: { name: string; content_ref: any };
    px_per_frame: number;
    item_width: number;
}

export const Projects: React.FC<Props> = ({ items, meta, px_per_frame = 1, item_width = 300 }) => {
    const [carouselItems, setCarouselItems] = useState(items);
    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [canScroll, setCanScroll] = useState(true);
    const containerRef = useRef(null);
    const sectionRef = useRef(null);
    const offsetRef = useRef(0);

    const ITEM_WIDTH = item_width + 24; // include margin-right (mr-6 → 24px)
    const SPEED = px_per_frame;

    // Check if animation is needed
    useEffect(() => {
        const updateScrollState = () => {
            const visibleWidth = sectionRef.current?.offsetWidth ?? 0;
            const contentWidth = items.length * ITEM_WIDTH;
            setCanScroll(contentWidth > visibleWidth);
        };

        updateScrollState();
        window.addEventListener("resize", updateScrollState);
        return () => window.removeEventListener("resize", updateScrollState);
    }, [items.length, ITEM_WIDTH]);

    useEffect(() => {
        if (!canScroll) return;
        let animationFrame: number;

        const animate = () => {
            if (!isHovered && isVisible && containerRef.current) {
                offsetRef.current += SPEED;

                if (offsetRef.current >= ITEM_WIDTH) {
                    offsetRef.current -= ITEM_WIDTH;
                    setCarouselItems((prev) => {
                        const [first, ...rest] = prev;
                        return [...rest, first];
                    });
                }

                containerRef.current.style.transform = `translateX(-${offsetRef.current}px)`;
            }

            animationFrame = requestAnimationFrame(animate);
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [isHovered, isVisible]);

    return (
        <section ref={(el) => { meta.content_ref.current = el; sectionRef.current = el; }} id={meta.name} className='max-w-[100vw] odd:dark:bg-[#333] odd:bg-[#CCC] dark:bg-transparent bg-transparent z-10 m-0 overflow-hidden mx-24' >
            <div className="flex align-middle items-center justify-center flex-col md:px-12 md:py-10 h-full">
                <div className='w-full h-max'>
                    <RevealFromLeft>
                        <h1 className='dark:text-white text-black text-5xl font-mono md:mt-16 mt-3'>Projects</h1>
                    </RevealFromLeft>
                    <div className='flex-grow-[1] bg-cyan-400 h-[1px]'></div>
                </div>
                <div className='w-full h-max py-10'>
                    <RevealFromLeft>
                        <p className='dark:text-white text-black text-md font-mono'>Projects that I have worked on</p>
                    </RevealFromLeft>
                    <RevealFromLeft>
                        <p className='dark:text-white text-black text-md font-mono'>Feel free to check out the screenshot by <span className='text-cyan-400'>clicking on image</span>. And don't forget to check out <span className='text-cyan-400'>GitHub repositories</span>.</p>
                    </RevealFromLeft>
                </div>
                <div ref={containerRef} className="flex  w-max py-10" style={{ transform: `translateX(0px)`, }}>
                    {carouselItems.map((item, i) => (
                        <FadeInTop _delay={1.25} _duration={1}>
                            <div key={i} className="flex-shrink-0 w-[300px] h-[600px] mr-6 focus overflow-hidden flex justify-start items-start flex-col" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                                <img src={"project_img/" + item.image} alt={item.name} className="w-full h-40 object-cover rounded cursor-pointer" onClick={() => { window.open("project_img/" + item.image, "_blank") }} />
                                <h3 className="text-cyan-400 text-3xl font-mono ">{item.name}</h3>
                                <div className="flex-1">
                                    <p className="dark:text-white text-black text-md font-mono overflow-hidden text-clip text-wrap">{item.description}</p>
                                </div>
                                <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-cyan-400 text-md font-mono">{item.link}</a>
                            </div>
                        </FadeInTop>
                    ))}
                </div>
                <div className='w-full m-6'>
                    <RevealFromRight>
                        <p className='dark:text-white text-black text-md font-mono pt-2'>Some of these projects are really old thus code quality and UI quality are significantly lower.</p>
                        <p className='dark:text-white text-black text-md font-mono pt-2'>But hey, <span className="text-cyan-400">thats the process of learning :3</span></p>
                    </RevealFromRight>
                </div>
            </div>
        </section>
    );
};

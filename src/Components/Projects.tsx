import React, { useEffect, useRef, useState } from 'react';
import FadeInTop from '../animations/FadeInTop.tsx';
import RevealFromLeft from '../animations/RevealFromLeft.tsx';
import RevealFromRight from '../animations/RevealFromRight.tsx';
import { useInView } from 'framer-motion';

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
    const [isHovered, setIsHovered] = useState(false);
    const [canScroll, setCanScroll] = useState(true);
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { margin: "-100px" });
    const sectionRef = useRef<HTMLElement>(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const initialTranslate = useRef(0);
    const currentTranslate = useRef(0);
    const animationFrameRef = useRef<number>(0);


    const ITEM_WIDTH = item_width + 24;
    const SPEED = px_per_frame;

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const onMouseDown = (e: MouseEvent) => {
            isDragging.current = true;
            startX.current = e.pageX - container.offsetLeft;
            initialTranslate.current = currentTranslate.current;
            cancelAnimationFrame(animationFrameRef.current!);
        };

        const onMouseMove = (e: MouseEvent) => {
            if (!isDragging.current) return;
            const x = e.pageX - container.offsetLeft;
            const walk = x - startX.current;
            currentTranslate.current = initialTranslate.current + walk;
            requestAnimationFrame(animate);
        };

        const onMouseUp = () => {
            if (!isDragging.current) return;
            isDragging.current = false;
            container.style.transition = 'transform 0.2s ease-out';
        };
        const onMouseLeave = () => {
            if (!isDragging.current) return;
            isDragging.current = false;
            container.style.transition = 'transform 0.2s ease-out';
        };

        container.addEventListener("mousedown", onMouseDown);
        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseup", onMouseUp);
        window.addEventListener("mouseleave", onMouseLeave);

        return () => {
            container.removeEventListener("mousedown", onMouseDown);
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseup", onMouseUp);
            window.addEventListener("mouseleave", onMouseLeave);
        };
        // stfu
        // eslint-disable-next-line 
    }, []);


    // Scroll Effect
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

    const animate = () => {
        if (!isHovered && containerRef.current) {
            if (!isDragging.current) {
                currentTranslate.current -= SPEED;
            }


            if (Math.abs(currentTranslate.current) > items.length * ITEM_WIDTH) {
                currentTranslate.current = 0;
            }

            const container = containerRef.current;
            if (!container.parentElement) return;
            const parent_rect = container.parentElement.getBoundingClientRect();

            const firstChild = container.children[0];
            const lastChild = container.children[container.children.length - 1];
            const firstChild_end = firstChild.getBoundingClientRect().right;
            const lastChild_start = lastChild.getBoundingClientRect().left;

            container.style.transition = 'none';

            if (firstChild_end <= 0 && (firstChild && lastChild)) {
                container.appendChild(firstChild);
                currentTranslate.current += ITEM_WIDTH;
                if (isDragging.current) {
                    startX.current -= ITEM_WIDTH;
                }
            } else if (lastChild_start >= parent_rect.width && (firstChild && lastChild) && isDragging.current) {
                container.insertBefore(lastChild, firstChild);
                currentTranslate.current -= ITEM_WIDTH;
                if (isDragging.current) {
                    startX.current += ITEM_WIDTH;
                }
            }

            container.style.transform = `translateX(${currentTranslate.current}px)`;
            if (!isDragging.current) {
                animationFrameRef.current = requestAnimationFrame(animate);
            }
        };
    };

    // Animation Effect
    useEffect(() => {
        if (!canScroll) return;
        if (isInView) {
            animationFrameRef.current = requestAnimationFrame(animate);
        } else {
            cancelAnimationFrame(animationFrameRef.current)
        }
        return () => cancelAnimationFrame(animationFrameRef.current);
        // stfu
        // eslint-disable-next-line 
    }, [isHovered, isInView, canScroll]);





    return (
        <section ref={(el) => { meta.content_ref.current = el; sectionRef.current = el; }} id={meta.name} className='max-w-[100vw] odd:dark:bg-[#333] odd:bg-[#CCC] dark:bg-transparent bg-transparent z-10 m-0 overflow-hidden md:px-24 pl-[4rem] pr-[1rem]' >
            <div className="flex align-middle items-center justify-start flex-col md:px-12 md:py-10 h-full">
                <div className='w-full h-max'>
                    <RevealFromLeft>
                        <h1 className='dark:text-white text-black text-5xl font-mono md:my-16 my-3'>Projects</h1>
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
                <div ref={containerRef} className="flex w-max py-10 " style={{ transform: `translateX(0px)`, }} >
                    {items.map((item, i) => (
                        <div id={item.name} key={item.name} >
                            <FadeInTop _delay={0.5} _duration={0.5} _once={false}>
                                <div className="flex-shrink-0 w-[300px] h-[600px] mr-6 focus overflow-hidden flex justify-start items-start flex-col" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => { setIsHovered(false); }}>
                                    <img src={"project_img/" + item.image} alt={item.name} className="w-full h-40 object-cover rounded cursor-pointer" onClick={() => { window.open("project_img/" + item.image, "_blank") }} />
                                    <h3 className="text-cyan-400 text-3xl font-mono ">{item.name}</h3>
                                    <div className="flex-1">
                                        <p className="dark:text-white text-black text-md font-mono overflow-hidden text-clip text-wrap">{item.description}</p>
                                    </div>
                                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-cyan-400 text-md font-mono">{item.link}</a>
                                </div>
                            </FadeInTop>
                        </div>
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

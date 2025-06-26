import { createContext, MouseEvent, useEffect, useRef } from "react";

export const themeContext = createContext<string | null>(null);


export const ContextHook = ({ children, navRefs }) => {
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const progressRef = useRef<HTMLDivElement | null>(null);


    useEffect(() => {
        const handleScroll = (event) => {
            if (!progressRef.current) return;
            progressRef.current.style.width = `${event.target.scrollTop / (event.target.scrollHeight - event.target.clientHeight) * 100}%`;
        };
        const scroll = scrollRef.current;

        if (scroll) {
            scroll.addEventListener('scroll', handleScroll);
        }
        return () => {
            if (scroll) {
                scroll.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);


    function handleScrollClick(event: MouseEvent<HTMLDivElement>) {
        const scrollBar = event.currentTarget; // this is the fixed bar at the top
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return
        const clickX = event.clientX;
        const { left, width } = scrollBar.getBoundingClientRect();
        const clickRatio = (clickX - left) / width;
        const scrollTop = clickRatio * (scrollContainer.scrollHeight - scrollContainer.clientHeight);
        scrollContainer.scrollTo({
            top: scrollTop,
            behavior: "smooth"
        });
    }



    return (
        <themeContext.Provider value={null}>
            <div className=" top-0 left-0 right-0 w-full ">
                <div className='dark:bg-[#333] bg-[#CCC]  z-[150] m-0 h-[4vh] flex flex-row  w-full fixed   ' onClick={(e) => { handleScrollClick(e); }} >
                    <div ref={progressRef} className='dark:bg-cyan-400 bg-[#CCC] h-full z-[100]'></div>
                </div>

            </div>
            <div id='content' className='z-[100] w-full  m-0 h-screen overflow-y-scroll pt-[4vh] absolute max-w-[100vw]' ref={scrollRef}>
                <div className="z-[100] m-0  w-12 flex dark:bg-[#333] bg-[#CCC]  flex-col h-[100%] justify-evenly overflow-auto fixed top-[4vh] items-center " >
                    {
                        navRefs.map((section: { name: string, content_ref: any, nav_ref: any }, index: number) => (
                            <div key={index} id={`${section.name}_nav`} onClick={() => section.content_ref.current?.scrollIntoView({ behavior: 'smooth' })} className=" cursor-pointer w-min p-2 h-min flex items-center border-[1px] border-transparent justify-center transform -rotate-90 origin-center border-solid hover:border-cyan-400">
                                <p className="dark:text-white text-black selection:none ">{section.name}</p>
                            </div>
                        ))
                    }
                </div>
                {children}
            </div>

        </themeContext.Provider >
    );
}


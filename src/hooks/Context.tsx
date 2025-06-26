import { createContext, useEffect, useReducer, useRef, useState } from "react";

export const themeContext = createContext("dark");


export const ContextHook = ({ children, navRefs }) => {
    const [theme, setTheme] = useState("dark");
    const [isHovered, setIsHovered] = useReducer((state, update) => {
        if (update.type === 'mouseenter' && !state) return true;
        if (update.type === 'mouseleave' && state) return false;
        return state;
    }, false);
    const scrollRef = useRef(null);
    const progressRef = useRef(null);


    useEffect(() => {
        const handleScroll = (event) => {
            if (!progressRef.current) return
            progressRef.current.style.width = `${event.target.scrollTop / (event.target.scrollHeight - event.target.clientHeight) * 100}%`;
        };

        if (scrollRef.current) {
            scrollRef.current.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (scrollRef.current) {
                scrollRef.current.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    function _handleThemeChange(e) {
        e.preventDefault();
        e.stopPropagation();
        setTheme(theme === "dark" ? "light" : "dark");
        // document.documentElement.classList.toggle("dark");
        const body = document.querySelector("body");
        if (body) body.classList.toggle("dark");
    }

    function handleScrollClick(event) {
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
        <themeContext.Provider value={{ theme }}>
            <div className=" top-0 left-0 right-0 w-full ">
                <div className='dark:bg-[#333] bg-[#CCC]  z-[150] m-0 h-[4vh] flex flex-row  w-full fixed   ' onClick={(e) => { handleScrollClick(e); }} onMouseEnter={(e) => setIsHovered(e)} >
                    <div ref={progressRef} className='dark:bg-cyan-400 bg-[#CCC] h-full z-[100]'></div>
                    {/* <p className="absolute dark:text-white text-black text-center selection:none shadow-md left-1/2 h-[4vh] top-0" onClick={(e) => _handleThemeChange(e)}>{theme}</p> */}
                </div>

            </div>
            <div id='content' className='z-[100] w-full  m-0 h-screen overflow-y-scroll pt-[4vh] absolute max-w-[100vw]' ref={scrollRef}>
                <div className="z-[100] m-0  w-12 flex dark:bg-[#333] bg-[#CCC]  flex-col h-[100%] justify-evenly overflow-auto fixed top-[4vh] items-center " onMouseLeave={(e) => setIsHovered(e)}>
                    {
                        navRefs.map((section: { name: string, content_ref: any, nav_ref: any }, index: number) => (
                            <div key={index} id={`${section.name}_nav`} onClick={() => section.content_ref.current?.scrollIntoView({ behavior: 'smooth' })} className=" cursor-pointer w-min p-2 h-min flex items-center border-[1px] border-transparent justify-center transform -rotate-90 origin-center border-solid hover:border-cyan-400">
                                <p className="dark:text-white text-black selection:none ">{section.name}</p>
                            </div>
                        ))
                    }
                </div>
                {children}
                {/* <div className="ml-[4vh] z-10 w-full">
                </div> */}
            </div>

        </themeContext.Provider >
    );
}


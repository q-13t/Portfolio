import FadeInTop from "../animations/FadeInTop.tsx";
import RevealFromLeft from "../animations/RevealFromLeft.tsx";
import RevealFromRight from "../animations/RevealFromRight.tsx";
import RevealFromTop from "../animations/RevealFromTop.tsx";
import FadeInLeft from "../animations/FadeInLeft.tsx";

const About = ({ meta }) => {
    const stack = [
        "Java", "ReactJS", "Tauri", "Flutter", "Android", "Linux", "Windows", "TailwindCSS", "NestJS", "Spring", "Rust", "MySQL", "PostgreSQL", "Figma", "Git", "Docker",
    ];
    return (
        <section ref={meta.content_ref} id={meta.name} className='odd:dark:bg-[#333] odd:bg-[#CCC] dark:bg-transparent bg-transparent z-10 m-0 overflow-auto px-24'>
            <div className="flex align-middle items-center justify-center flex-col md:px-12 md:py-10 h-full">
                <div className='w-full h-max'>
                    <RevealFromLeft>
                        <h1 className='dark:text-white text-black text-5xl font-mono md:mt-16 mt-3'>About</h1>
                    </RevealFromLeft>
                    <div className='flex-grow-[1] bg-cyan-400 h-[1px]'></div>
                </div>

                <div className="flex flex-col md:flex-row align-middle items-center justify-center pt-12 w-full gap-12">
                    <div className="flex-1 flex flex-col justify-start items-start">
                        <FadeInLeft>
                            <h2 className='dark:text-white text-black text-md font-mono'>
                                Hello! I am <span className="text-cyan-400">Volodymyr Davybida</span> a passionate full stack developer that is not afraid of tackling never seen before problems. I have build numerous personal project, each aimed on learning new tech or tools.
                            </h2>
                            <h2 className='dark:text-white text-black text-md font-mono pt-2'>
                                My main focus is <span className="text-cyan-400">solving problems that I have not encountered before</span>. And implementing solutions that not only fit the case, but also perform at top notch.
                            </h2>
                            <h2 className='dark:text-white text-black text-md font-mono pt-2'>
                                As for personality: I am willing to <span className="text-cyan-400">suggest solution</span> that I think fits the case better. As well as <span className="text-cyan-400">listen to any suggestions</span> myself.
                            </h2>
                        </FadeInLeft>
                    </div>

                    <div className="hidden h-full lg:flex lg:flex-1  lg:flex-col lg:justify-center lg:items-center ">
                        <RevealFromTop>
                            <img src="/Portfolio/profile_2.png" onClick={() => { window.open("/Portfolio/profile_2.png", "_blank") }} alt="Volodymyr Davybida" className="focus w-full h-full object-fill border rounded-xl border-transparent" />
                        </RevealFromTop>
                    </div>
                    <div className="flex-1 flex flex-col justify-start items-start">
                        <div className="flex align-middle items-start flex-row w-full py-6">
                            <RevealFromRight>
                                <h2 className='dark:text-white text-black text-md font-mono'>Tech Stack</h2>
                                <div className='flex-grow-[1] bg-cyan-400 h-[1px]'></div>
                            </RevealFromRight>
                        </div>
                        <div className="flex flex-wrap content-start justify-start items-center">
                            {stack.map((item, index) => {
                                return (
                                    <span key={item} className='dark:text-white text-black text-md font-mono border border-black dark:border-white rounded-lg mx-4 my-2 p-2'>
                                        <FadeInTop _delay={index * 0.1}>
                                            <span>{item}</span>
                                        </FadeInTop>
                                    </span>
                                )
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default About;
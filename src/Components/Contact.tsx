import FadeInLeft from "../animations/FadeInLeft.tsx";
import FadeInTop from "../animations/FadeInTop.tsx";
import RevealFromLeft from "../animations/RevealFromLeft.tsx";

const Contact = ({ meta, }) => {
    return (
        <section ref={meta.content_ref} id={meta.name} className='odd:dark:bg-[#333] odd:bg-[#CCC] dark:bg-transparent bg-transparent z-10 m-0 overflow-auto md:px-24 pl-[4rem] pr-[1rem]'>
            <div className="flex align-middle items-center justify-start flex-col md:px-12 md:py-10 ">
                <div className='w-full h-max'>
                    <RevealFromLeft>
                        <h1 className='dark:text-white text-black text-5xl font-mono md:my-5 my-3'>Contact</h1>
                    </RevealFromLeft>
                    <div className='flex-grow-[1] bg-cyan-400 h-[1px]'></div>
                </div>
                <div className='w-full h-max py-10'>
                    <FadeInLeft>
                        <p className='dark:text-white text-black text-md font-mono'>Since you've made it so far how about a <span className='text-cyan-400'>quick message</span>?</p>
                    </FadeInLeft>
                </div>
                <div className='w-full md:grid md:grid-cols-2 md:grid-rows-2 md:p-10 md:gap-16'>
                    <FadeInTop _delay={0.25}>
                        <a href="https://github.com/q-13t" target="_blank" rel="noopener noreferrer">
                            <div className='focus h-full w-full flex flex-row items-center justify-between truncate'>
                                <img src="github-mark.svg" alt="GitHub" className="w-12 h-12 m-2" />
                                <p className='text-cyan-400 mr-2 truncate'>https://github.com/q-13t</p>
                            </div>
                        </a>
                    </FadeInTop>
                    <FadeInTop _delay={0.25}>
                        <a href="https://www.linkedin.com/in/vdavybida/" target="_blank" rel="noopener noreferrer"  >
                            <div className='focus h-full w-full flex flex-row items-center justify-between  truncate'>
                                <img src="linkedin-svgrepo-com.svg" alt="Linkedin" className="w-12 h-12 m-2" />
                                <p className='text-cyan-400 mr-2 truncate'>https://www.linkedin.com/in/vdavybida/</p>
                            </div>
                        </a>

                    </FadeInTop>
                    <FadeInTop _delay={0.5}>
                        <div className='focus h-full w-full flex flex-row items-center justify-between  truncate cursor-pointer' onClick={() => { navigator.clipboard.writeText("(+380) 95 400 2717"); window.alert("Copied to clipboard") }}>
                            <img src="phone-outgoing-alt-svgrepo-com.svg" alt="Phone" className="w-12 h-12 m-2" />
                            <p className='text-cyan-400 mr-2 truncate'>(+380) 95 400 2717</p>
                        </div>

                    </FadeInTop>
                    <FadeInTop _delay={0.5}>
                        <div className='focus h-full w-full flex flex-row items-center justify-between  truncate cursor-pointer' onClick={() => { navigator.clipboard.writeText("@q_13t"); window.alert("Copied to clipboard") }}>
                            <img src="telegram-svgrepo-com.svg" alt="Phone" className="w-12 h-12 m-2" />
                            <p className='text-cyan-400 mr-2 truncate'>@q_13t</p>
                        </div>
                    </FadeInTop>

                    {/* <a href="https://x.com/VDavybida" target="_blank" rel="noopener noreferrer " >
                        <div className='focus h-full w-full flex flex-row items-center justify-between  truncate'>
                            <img src="twitter-svgrepo-com.svg" alt="Linkedin" className="w-12 h-12 m-2" />
                            <p className='text-cyan-400 mr-2 truncate'>https://x.com/VDavybida</p>
                        </div>
                    </a> */}
                </div>
            </div>
        </section >
    );
}

export default Contact;
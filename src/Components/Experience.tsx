import FadeInTop from "../animations/FadeInTop.tsx";
import RevealFromRight from "../animations/RevealFromRight.tsx";

const Experience = ({ meta, elements }) => {
    // { company: "", role: "", duration: "", description: "", technologies: [] },
    return (
        <section ref={meta.content_ref} id={meta.name} className='h-auto md:h-[100vh] min-h-[100vh] odd:dark:bg-[#333] odd:bg-[#CCC] dark:bg-transparent bg-transparent z-10 m-0 overflow-auto md:px-24 pl-[4rem] pr-[1rem]'>
            <div className="flex align-middle items-center justify-start flex-col md:px-12 md:py-10 ">
                <div className='w-full h-max'>
                    <FadeInTop>
                        <h1 className='dark:text-white text-black text-5xl font-mono md:my-16 my-3'>Experience</h1>
                    </FadeInTop>
                    <div className='flex-grow-[1] bg-cyan-400 h-[1px]'></div>
                </div>
                <div className='w-full  flex align-start items-start justify-start flex-col'>
                    {elements.map((item, index) => {
                        return (
                            <div key={index} className='dark:text-white text-black text-md font-mono border-x-1 border-y-0 border border-black dark:border-cyan-400 mx-4 my-2 p-2 w-full'>
                                <FadeInTop _delay={index * 0.1}>
                                    <div className='flex align-middle items-center justify-between'>
                                        <div className='flex flex-col'>
                                            <h1 className='text-2xl font-mono'>{item.company}</h1>
                                            <h2 className='text-cyan-400 text-xl font-mono'>{item.role}</h2>
                                        </div>
                                        <p>{item.duration}</p>
                                    </div>
                                    <div className='flex-grow-[1] bg-cyan-400 h-[1px]'></div>
                                    <p className='pb-4 font-mono' >{item.description}</p>
                                    <div className='md:flex md:flex-row md:align-middle md:items-center md:justify-start'>
                                        {
                                            item.technologies.map((tech, index) => {
                                                return (
                                                    <p key={tech} className='text-cyan-400 border font-mono border-black dark:border-white rounded-lg mx-4 my-2 p-2'>{tech} </p>
                                                );
                                            })
                                        }
                                    </div>
                                </FadeInTop>
                            </div>
                        )
                    })}
                </div>
                <div className='w-full m-6'>
                    <RevealFromRight>
                        <p className='dark:text-white text-black text-md font-mono pt-2'>Maybe help me expand this list <span className='text-cyan-400'>;3</span></p>
                    </RevealFromRight>
                </div>
            </div>
        </section>
    );
}

export default Experience;
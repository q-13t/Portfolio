import RevealFromLeft from "../animations/RevealFromLeft.tsx";
import RevealFromRight from "../animations/RevealFromRight.tsx";
import RevealFromTop from "../animations/RevealFromTop.tsx";

const Achievements = ({ meta, elements }) => {
    return (
        <section ref={meta.content_ref} id={meta.name} className='odd:dark:bg-[#333] odd:bg-[#CCC] dark:bg-transparent bg-transparent z-10 m-0 h-max px-24'>
            <div className="flex align-middle items-center justify-start flex-col md:px-12 md:py-10 ">
                <div className='w-full h-max'>
                    <RevealFromTop>
                        <h1 className='dark:text-white text-black text-5xl font-mono md:mt-16 mt-3'>Licenses & certifications</h1>
                    </RevealFromTop>
                    <div className='flex-grow-[1] bg-cyan-400 h-[1px]'></div>
                </div>
                <div className='w-full  flex align-start items-start justify-start flex-col'>
                    {elements.map((item: { title: string, granted_by: string, date: string, link: string }, index: number) => {
                        return (
                            <div key={index} className='dark:text-white text-black text-md font-mono border-x-1 border-y-0 border border-black dark:border-cyan-400 md:mx-4 my-2 p-2 w-full '>
                                {index % 2 === 0 ? <RevealFromLeft _delay={index * 0.1}>
                                    <div className='flex align-middle items-center justify-between pb-6 truncate'>
                                        <div className='flex flex-col truncate'>
                                            <h1 className=' text-cyan-400 text-2xl font-mono'>{item.title}</h1>
                                            <h2 className=' text-xl font-mono'>{item.granted_by}</h2>
                                        </div>
                                        <p>{item.date}</p>
                                    </div>
                                    <div className=" pt-3 w-full truncate" >
                                        <a href={item.link} target="_blank" rel="noreferrer" className="text-cyan-400 font-mono truncate">{item.link}</a>
                                    </div>
                                </RevealFromLeft> : <RevealFromRight _delay={index * 0.1}>
                                    <div className='flex align-middle items-center flex-col md:flex-row md:justify-between pb-6 '>
                                        <div className='flex flex-col'>
                                            <h1 className=' text-cyan-400 text-2xl font-mono'>{item.title}</h1>
                                            <h2 className=' text-xl font-mono'>{item.granted_by}</h2>
                                        </div>
                                        <p>{item.date}</p>
                                    </div>
                                    <div className=" pt-3 w-full truncate" >
                                        <a href={item.link} target="_blank" rel="noreferrer" className="text-cyan-400 font-mono truncate">{item.link}</a>
                                    </div>
                                </RevealFromRight>
                                }
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}

export default Achievements;
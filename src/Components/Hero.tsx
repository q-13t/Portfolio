import FadeInTop from "../animations/FadeInTop.tsx";
import RevealFromLeft from "../animations/RevealFromLeft.tsx";

const Hero = ({ meta, contact_ref }) => {
    return (
        <section ref={meta.content_ref} id={meta.name} className='h-[100vh] odd:dark:bg-[#333] odd:bg-[#CCC] dark:bg-transparent bg-transparent z-10 m-0 overflow-auto px-24'>
            <div className="h-full w-full flex flex-col align-middle items-start justify-center md:px-12 py-10">
                <FadeInTop >
                    <h1 className='dark:text-white text-black text-5xl font-mono mt-16 md:mt-0'>Greetings 👋</h1>
                </FadeInTop>
                <RevealFromLeft _delay={0.5}>
                    <FadeInTop _delay={0.75}>
                        <h2 className='pt-8 dark:text-white text-black text-3xl font-mono'>I'm <span className='text-cyan-400 text-3xl font-mono'> Volodymyr Davybida </span> A <span className='text-cyan-300 text-3xl font-mono'> Full Stack </span> developer</h2>
                    </FadeInTop>
                </RevealFromLeft>
                <FadeInTop _delay={1}>
                    <p className='pt-12 dark:text-white text-black text-md font-mono'>I'm a Full Stack developer with a passion for creating innovative and user-friendly applications. I have build numerous projects and am always eager to learn and grow.</p>
                </FadeInTop>
                <div className="flex align-middle items-center justify-center flex-col text-center w-full pt-12 ">
                    <FadeInTop _delay={1.25}>
                        <p className=' text-cyan-400 text-3xl font-mono cursor typewriter-animation '>If you can imagine something it can be coded up!</p>
                    </FadeInTop>
                </div>
                <div className="flex align-middle items-center justify-center flex-col pt-12 w-full">
                    <RevealFromLeft>
                        <button className=' dark:text-white text-black text-md font-mono border-2 border-solid dark:border-white rounded-lg px-4 py-2 text-center' onClick={() => contact_ref.current.scrollIntoView({ behavior: 'smooth' })}>Contact</button>
                    </RevealFromLeft>
                </div>

            </div>
        </section>
    );
}

export default Hero;
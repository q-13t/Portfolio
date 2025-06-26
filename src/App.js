import { ContextHook } from './hooks/Context.tsx';
import { useRef, useEffect } from "react";
import About from './Components/About.tsx';
import Hero from './Components/Hero.tsx';
import { Projects } from './Components/Projects.tsx';
import Experience from './Components/Experience.tsx';
import Achievements from './Components/Achievements.tsx';
import Contact from './Components/Contact.tsx';

function App() {
    const navRefs = [
        { content_ref: useRef(), nav_ref: useRef(), name: "Hero" },
        { content_ref: useRef(), nav_ref: useRef(), name: "About" },
        { content_ref: useRef(), nav_ref: useRef(), name: "Projects" },
        { content_ref: useRef(), nav_ref: useRef(), name: "Experience" },
        { content_ref: useRef(), nav_ref: useRef(), name: "Achievements" },
        { content_ref: useRef(), nav_ref: useRef(), name: "Contact" },
    ];

    const projects = [
        { image: 'Vinil-Re.png', link: 'https://github.com/q-13t/Vinil-re', name: 'Vinil-re', description: 'This is a desktop based music player that lets you listen to .mp3 files, sort the composition, search, create own playlists and has build in audio visualizer.', },
        { image: 'Apatite.png', link: 'https://github.com/q-13t/Apatite', name: 'Apatite', description: 'This is a mobile chat application that allows users to freely chat with each other and in groups.', },
        { image: 'Anthracite.png', link: 'https://github.com/q-13t/Anthracite', name: 'Anthracite', description: 'This is a client only (browser only) 3D editing and previewing application that supports drag and drop of 3D models. It also has build in markdown editor to make notes, and save them into separate files.', },
        { image: 'Rust---Server.png', link: 'https://github.com/q-13t/Rust---Server', name: 'Rust---Server', description: 'A standalone implementation of http server in plain rust. It was aimed to create a framework like project to be used in further projects.', },
        { image: 'Oval.jpg', link: 'https://github.com/q-13t/Oval', name: 'Oval', description: 'A mobile application that lets users take pictures that will be processed on backend using home build AI for clarification.', },
        { image: 'RiverI.png', link: 'https://github.com/q-13t/RiverI', name: 'RiverI', description: 'A desktop application that lets users create own color schemes using multiple toggles and switches with live preview of template in real time.', },
        { image: 'Kirje.jpg', link: 'https://github.com/q-13t/KirjeMobileApp', name: 'Kirje', description: 'This is an old desktop and mobile chat service that lets users create a group chat using QR code.', },
        { image: 'Convo.png', link: 'https://github.com/q-13t/Convo', name: 'Convo', description: 'Convo is a desktop calculator application that lets users use plain calculator without connectivity to the internet, and uses server side calculation to allow users to convert from one unit to another.', },
        { image: 'Sky.jpg', link: 'https://github.com/q-13t/Sky', name: 'Sky', description: 'A mobile weather forecast application that lets users select city using search menu and geolocation to get weather forecast.', },
        { image: 'KeyKlicker.png', link: 'https://github.com/q-13t/KeyClicker', name: 'KeyClicker', description: 'A desktop application that allows users to create own macros with ease using keyboard shortcuts. It runs in daemon thread for maximum performance.', },
        { image: 'Lee.jpg', link: 'https://github.com/q-13t/LeeApp', name: 'LeeApp', description: 'This is a mobile application that lets users input own mazes as well as generate random mazes to solve using backtracking algorithm.', },
    ];

    const experience = [
        { company: "SoftJourn", role: "Android Trainee", duration: "1 month (07.2022 - 08.2022)", description: "Created a Lee application, was responsible for: design, android frontend implementation, Java Spring Boot backend implementation, algorithm implementation, app connectivity, testing.", technologies: ["Java", "Spring Boot", "Android", "Android Studio", "GitHub"] },
        { company: "IT Step University", role: "Front End Developer", duration: "1 year (2024 - 2025)", description: "Created some pages of the website, was responsible for: cryptographic operations, backend communication, frontend implementation, page state management, data flow management, authentication, registration, functional implementation and testing.", technologies: ["ReactJS", "node-forge", "axios", "Figma", "GitHub"] },
    ];

    const achievements = [
        { title: "Google Cybersecurity Certificate", date: "11.2023", granted_by: "Coursera", link: "https://www.coursera.org/account/accomplishments/professional-cert/TF2CWNXKRQAR", file: "" },
        { title: "Google Cybersecurity Badge", date: "11.2023", granted_by: "Coursera", link: "https://www.credly.com/badges/57b5bba8-0866-431a-9ad4-dfb3f1e08e4a/linked_in_profile" },
        { title: "CCNA: Introduction to Networks", date: "12.2024", granted_by: "Cisco Networking Academy", link: "https://www.credly.com/badges/b669b061-3b94-4bda-a83f-6e304f7093d8/linked_in_profile" },
        { title: "IT Future Fest 2025 ", date: "04.2025", granted_by: "Lviv Cluster", link: "https://www.linkedin.com/in/vdavybida/details/certifications/1745778287625/single-media-viewer/?profileId=ACoAAC49mrcBsbp5FFlr4DHZVUhZJFogbMQN0z4" },
        { title: "Junior Cybersecurity Analyst Career Path", date: "05.2025", granted_by: "Cisco Networking Academy", link: "https://www.credly.com/badges/d7c2201d-7d1c-49b1-ad76-520e2f35a78c/linked_in_profile" },
    ];



    useEffect(() => {
        const interceptor = new IntersectionObserver((elements) => {
            const nav_el = document.getElementById(elements[0].target.id + "_nav");
            nav_el.classList.toggle("viewing", elements[0].isIntersecting);
        }, { threshold: 0.4 });

        navRefs.forEach(element => {
            interceptor.observe(element.content_ref.current);
        });

        return () => {
            navRefs.forEach(element => {
                interceptor.unobserve(element.content_ref.current);
            });
        };
        //stfu
        //eslint-disable-next-line
    }, []);

    return (
        <>
            <ContextHook navRefs={navRefs} >
                <Hero meta={navRefs[0]} contact_ref={navRefs[5].content_ref} />
                <About meta={navRefs[1]} />
                <Projects meta={navRefs[2]} items={projects} />
                <Experience meta={navRefs[3]} elements={experience} />
                <Achievements meta={navRefs[4]} elements={achievements} />
                <Contact meta={navRefs[5]} />
            </ContextHook>
            {/* <div className="bg"></div> */}
        </>
    );
}

export default App;

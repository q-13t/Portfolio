import { motion, useAnimation, useInView } from "framer-motion";
import { div } from "framer-motion/client";
import { useRef, useEffect } from "react";

const RevealFromLeft = ({ children, _delay = 0.25, _duration = 0.50 }) => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            console.log("isInView");
            mainControls.start("end");
        }
    }, [isInView, mainControls]);

    return (
        <div ref={ref} className='relative h-full w-full'>

            {children}
            < motion.div
                variants={{
                    start: { top: 0 },
                    end: { top: "100%" },
                }}
                initial="start"
                animate={mainControls}
                transition={{ duration: _duration, delay: _delay }}
                style={
                    {
                        position: "absolute",
                        top: 4,
                        bottom: 4,
                        left: 0,
                        right: 0,
                        background: "rgba(34, 221, 238, 1)",
                        zIndex: 100
                    }
                }
            >
            </motion.div>
        </div>
    );
}

export default RevealFromLeft;
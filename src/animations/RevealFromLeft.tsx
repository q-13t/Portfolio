import { motion, useAnimation, useInView } from "framer-motion";
import { div } from "framer-motion/client";
import { useRef, useEffect } from "react";

const RevealFromLeft = ({ children, _delay = 0.25, _duration = 0.50 }) => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("end");
        }
    }, [isInView, mainControls]);

    return (
        <span ref={ref} className='relative '>
            {children}
            < motion.div
                variants={{
                    start: { left: 0 },
                    end: { left: "100%" },
                }}
                initial="start"
                animate={mainControls}
                transition={{ duration: _duration, delay: _delay }}
                style={
                    {
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        overflow: "hidden",
                        background: "rgba(34, 221, 238, 1)",
                        zIndex: 100
                    }
                }
            >
            </motion.div>
        </span>
    );
}

export default RevealFromLeft;
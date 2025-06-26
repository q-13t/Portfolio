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
        <span ref={ref} className='relative '>

            {children}
            < motion.div
                variants={{
                    start: { right: 0 },
                    end: { right: "100%" },
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
                        // backgroundColor: "#CCC",
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
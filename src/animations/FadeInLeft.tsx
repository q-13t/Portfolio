import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react";

const FadeInLeft = ({ children, _delay = 0.25, _duration = 0.50 }) => {
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
        <motion.div ref={ref}
            variants={{
                start: { opacity: 0, x: -20 },
                end: { opacity: 1, x: 0 },
            }}
            initial="start"
            animate={mainControls}
            transition={{ duration: _duration, delay: _delay }}
        >
            {children}
        </motion.div>
    );
}

export default FadeInLeft;
import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react";

const FadeInTop = ({ children, _delay = 0.25, _duration = 0.50, _once = true }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: _once });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("end");
        } else {
            mainControls.start("start");
        }
    }, [isInView, mainControls]);

    return (
        <motion.div ref={ref}
            variants={{
                start: { opacity: 0, y: -20 },
                end: { opacity: 1, y: 0 },
            }}
            initial="start"
            animate={mainControls}
            transition={{ duration: _duration, delay: _delay }}
        >
            {children}
        </motion.div>
    );
}

export default FadeInTop;
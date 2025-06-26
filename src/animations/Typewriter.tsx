import { useEffect, useRef, useState } from 'react';

interface TypewriterProps {
    text: string;
    speed?: number;
}

export const Typewriter: React.FC<TypewriterProps> = ({ text, speed = 50 }) => {
    const [displayedText, setDisplayedText] = useState('');
    const indexRef = useRef(0);
    const intervalRef = useRef(0);

    useEffect(() => {
        setDisplayedText('');
        indexRef.current = 0;

        intervalRef.current = setInterval(() => {
            setDisplayedText((prev) => {
                const nextChar = text.charAt(indexRef.current);
                indexRef.current++;
                if (indexRef.current >= text.length) {
                    if (intervalRef.current) clearInterval(intervalRef.current);
                }

                return prev + nextChar;
            });
        }, speed);

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [text, speed]);;

    return (
        <p className="text-cyan-400 text-3xl font-mono text-wrap max-w-[90vw] text-center whitespace-pre-wrap">
            {displayedText}
            <span className="animate-blink">|</span>
        </p>
    );
};

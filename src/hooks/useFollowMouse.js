import { useMotionValue, useSpring } from "framer-motion";
import { customCursorSpringConfig } from "../libs/motion/motion.variants";
import { useEffect } from "react";

export function useFollowMouse () {

    const cursorX = useMotionValue(-100)
    const cursorY = useMotionValue(-100)

    const cursorXSpring = useSpring(cursorX, customCursorSpringConfig)
    const cursorYSpring = useSpring(cursorY, customCursorSpringConfig)
    
    useEffect(() => {
        const followMouse = e => {
            cursorX.set(e.clientX - 10)
            cursorY.set(e.clientY - 100)

        }
        window.addEventListener('mousemove', followMouse)

        return () => {
            window.removeEventListener('mousemove', followMouse)
        }
    }, [])

    return {
        cursorXSpring,
        cursorYSpring
    }
}
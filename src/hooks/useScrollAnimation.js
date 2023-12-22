import { useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export const useScrollAnimation = () => {
    const targetRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: targetRef
    })
    
    return {
        targetRef,
        scrollYProgress
    }

}
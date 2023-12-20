import { useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export const useSetAnimation = (x, prop) => {
    const targetRef = useRef(null)

    const { scrollYProgress } = useScroll()

    const bottom = useTransform(scrollYProgress,x,prop)
    const opacity = useTransform(scrollYProgress, x, prop)
    const scale = useTransform(scrollYProgress, x,prop)
    const position = useTransform(scrollYProgress, pos =>
        targetRef.current && pos <= targetRef.current.offsetTop ? 'sticky' : 'relative'
        
    )
    return {
        targetRef,
        bottom,
        opacity,
        scale,
        position
    }
}
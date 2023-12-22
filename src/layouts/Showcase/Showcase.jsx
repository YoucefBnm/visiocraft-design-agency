import { motion, useTransform } from "framer-motion"
import { carouselImages } from "../../constants"
import { CarouselItem } from "../../components"
import { useScrollAnimation } from "../../hooks/useScrollAnimation"

import './Showcase.scss'

const Showcase = () => {
    
    const { targetRef, scrollYProgress } = useScrollAnimation()

    const x = useTransform(scrollYProgress, [0, 1], [-250, 100])
    const xReverse = useTransform(scrollYProgress, [0, 1], [100, -250])

  return (
    <section id='showcase' ref={targetRef} className="showcase pos--relative">
        <div className="showcase__container flex flex--col gap--1">
            <motion.div style={{ x }} className="showcase__row flex gap--1">
                {
                    carouselImages.map((item,index) => (
                        index < 3 && (<CarouselItem key={item.id} x={x} item={item} />)
                    ))
                }
            </motion.div>
            <motion.div style={{ x: xReverse }} className="showcase__row flex gap--1">
                {
                    carouselImages.map((item,index) => (
                        index >= 3 && (<CarouselItem key={item.id} x={xReverse} item={item} />)
                    ))
                }
            </motion.div>
        </div>

    </section>
  )
}

export default Showcase
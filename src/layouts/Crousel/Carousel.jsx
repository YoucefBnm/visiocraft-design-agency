import { motion, useScroll, useTransform } from "framer-motion"
import { carouselImages } from "../../constants"
import './Carousel.scss'
import { useRef } from "react"
import { CarouselItem } from "../../components"


const Carousel = () => {
    
    const targetRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: targetRef
    })
    const x = useTransform(scrollYProgress, [0, 1], [-100, 100])
    const xReverse = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section id='showcase' ref={targetRef} className="carousel pos--relative">
        <div className="carousel__container flex flex--col gap--1">
            <motion.div style={{ x }} className="carousel__row flex gap--1">
                {
                    carouselImages.map((item,index) => (
                        index < 3 && (<CarouselItem key={item.id} x={x} item={item} />)
                    ))
                }
            </motion.div>
            <motion.div style={{ x: xReverse }} className="carousel__row flex gap--1">
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

export default Carousel
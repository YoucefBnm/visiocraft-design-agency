import { motion, useTransform } from "framer-motion";
import { heroGalleryImages } from "../../constants";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "./Gallery.scss";

const GalleryCol = ({ images, progress, order }) => {
  const y1 = useTransform(progress, [0, 1], ["0%", "-10%"]);
  const y2 = useTransform(progress, [0, 1], ["0%", "20%"]);

  const isPair = order % 2 === 0;
  const y = isPair ? y2 : y1;
  return (
    <motion.div style={{ y }} className="gallery__col">
      <motion.div
        className="gallery__col--images"
        style={isPair ? { top: "-20%" } : { top: 0 }}
      >
        {images.map((imageUrl, index) => (
          <figure key={index} className="gallery__col--fig">
            <img
              loading="lazy"
              width={1024}
              height={640}
              decoding="async"
              alt="portfolio project"
              src={imageUrl}
            />
          </figure>
        ))}
      </motion.div>
    </motion.div>
  );
};

const Gallery = () => {
  const { actifeet, bizadvisor, visiocraft } = heroGalleryImages;
  const { targetRef, scrollYProgress } = useScrollAnimation();

  const scale = useTransform(scrollYProgress, [0, 0.8], [1.2, 1]);
  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["inset(0px 48px)", "inset(0px 0px)"]
  );

  return (
    <div ref={targetRef} className="gallery">
      <div className="gallery__container">
        <motion.div style={{ clipPath }} className="gallery__wrap">
          <motion.div style={{ scale }} className="gallery__items">
            <GalleryCol
              images={actifeet}
              order={1}
              progress={scrollYProgress}
            />
            <GalleryCol
              images={bizadvisor}
              order={2}
              progress={scrollYProgress}
            />
            <GalleryCol
              images={visiocraft}
              order={3}
              progress={scrollYProgress}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;

import { useWindowSize } from "@uidotdev/usehooks";
import "./Cta.scss";
import { motion, useTransform } from "framer-motion";
import { ctaImages } from "../../constants";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { memo } from "react";

const CtaImage = memo(function CtaImage({ imageUrl, progress, range, order }) {
  const { width, height } = useWindowSize();

  // 48 => 24 xpadding
  // 16 => 3images => 2gap*16
  const cellWidth = width > 900 ? (width - 48 - 32) / 3 : (width - 48 - 16) / 2;
  const cellHeight = cellWidth * 0.6243;

  // const posXCenter = (width - cellWidth) / 2;
  const posXCenter = (width - cellWidth) / 2 - 24;
  const posYCenter = height / 2 - cellHeight;

  const x1 = useTransform(progress, range, [0, posXCenter]);
  const x2 = useTransform(progress, range, [cellWidth + 16, posXCenter]);
  const x4 = useTransform(progress, range, [cellWidth * 2 + 32, posXCenter]);
  // const x = order === 0 ? x1 : order === 3 ? x4 : x2;
  const xLg = order === 0 ? x1 : order === 3 ? x4 : x2;
  const xSm = order === 0 ? x1 : order === 3 ? x2 : 0;
  const x = width > 900 ? xLg : xSm;

  const y1 = useTransform(progress, range, [0, posYCenter]);
  const y3 = useTransform(progress, range, [cellHeight + 16, posYCenter]);

  const y = order <= 1 ? y1 : y3;

  const scale = useTransform(progress, [0.6, 0.9], [1, 1.2]);

  return (
    <motion.div
      className="cta__col"
      style={{
        width: cellWidth,
        height: cellHeight,
        x,
        y,
        scale,
      }}
    >
      <img
        loading="lazy"
        width={1024}
        height={640}
        decoding="async"
        alt="project image"
        src={imageUrl}
      />
    </motion.div>
  );
});

function renderCtaImage(item, index, progress) {
  const start = index / ctaImages.length;
  const end = start + 1 / ctaImages.length;

  return (
    <CtaImage
      key={item.id}
      imageUrl={item.imageUrl}
      progress={progress}
      range={[start, end]}
      order={index}
    />
  );
}
const Cta = () => {
  const { targetRef, scrollYProgress } = useScrollAnimation();
  return (
    <section className="cta" id="cta">
      <div ref={targetRef} className="cta__container">
        <div className="cta__wrap">
          <div className="cta__gallery">
            {ctaImages.map((item, index) =>
              renderCtaImage(item, index, scrollYProgress)
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;

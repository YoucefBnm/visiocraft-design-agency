import { useWindowSize } from "@uidotdev/usehooks";
import "./Cta.scss";
import { motion, useTransform } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { memo } from "react";
import { galleryImages } from "../../constants/data";
import { useIsTouchdevice } from "../../hooks/useIsTouchDevice";

const CtaImage = memo(function CtaImage({ imageUrl, progress, range, order }) {
  const { width, height } = useWindowSize();
  const IsMobile = useIsTouchdevice() || width < 900;

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
  const x = !IsMobile ? (width > 900 ? xLg : xSm) : 0;

  const y1 = useTransform(progress, range, [0, posYCenter]);
  const y3 = useTransform(progress, range, [cellHeight + 16, posYCenter]);

  const y = !IsMobile ? (order <= 1 ? y1 : y3) : 0;

  const animateScale = useTransform(progress, [0.6, 0.8], [1, 1.2]);
  const scale = IsMobile ? 1 : animateScale;

  return (
    <motion.div
      className="cta__col"
      style={{
        width: cellWidth,
        height: IsMobile ? "auto" : cellHeight,
        x,
        y,
        scale,
        gridArea: !IsMobile ? "1 / 1 / 1 / 1" : "auto",
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

function renderCtaImage(arrayLength, item, index, progress) {
  const start = index / arrayLength;
  const end = start + 1 / arrayLength;

  return (
    <CtaImage
      key={index}
      imageUrl={item}
      progress={progress}
      range={[start, end]}
      order={index}
    />
  );
}
const Cta = () => {
  const { scrollRef, scrollYProgress } = useScrollAnimation();
  const { col2 } = galleryImages;
  const { width } = useWindowSize();
  const IsMobile = useIsTouchdevice() || width < 900;

  return (
    <section className="cta" id="cta">
      <div
        style={{ height: IsMobile ? "auto" : "250vh" }}
        ref={scrollRef}
        className="cta__container"
      >
        <div className="cta__wrap">
          <div className="cta__gallery">
            {col2.map((item, index) =>
              renderCtaImage(col2.length, item, index, scrollYProgress)
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;

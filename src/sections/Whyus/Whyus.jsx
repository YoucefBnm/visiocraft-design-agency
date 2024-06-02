import { motion, useTransform } from "framer-motion";
import "./Whyus.scss";
import { whyusContent } from "../../constants";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const WhyusText = ({
  title,
  paragraph,
  progress,
  range,
  order,
  arrayLength,
}) => {
  const rangeMiddle = [
    range[0],
    range[0] + (range[1] - range[0]) / 2,
    // range[0] + (range[1] - range[0]) / 1.5,
    range[1],
  ];
  const yFirst = useTransform(progress, range, ["0%", "-120%"]);
  const yLast = useTransform(progress, range, ["-120%", "0%"]);
  const yMiddle = useTransform(progress, rangeMiddle, ["-120%", "0%", "-120%"]);

  const opacityFirst = useTransform(progress, range, [1, 0]);
  const opacityLast = useTransform(progress, range, [0, 1]);
  const opacityMiddle = useTransform(progress, rangeMiddle, [0, 1, 0]);

  const y = order === 0 ? yFirst : order === arrayLength - 1 ? yLast : yMiddle;
  const opacity =
    order === 0
      ? opacityFirst
      : order === arrayLength - 1
      ? opacityLast
      : opacityMiddle;

  const splitTitle = title.split(" ");

  return (
    <div className="whyus__text">
      <div className="whyus__headings">
        <div className="whyus__title">
          <motion.h2 style={{ y }} className="display display--2">
            {splitTitle[0]}
          </motion.h2>
        </div>
        <div className="whyus__title">
          <motion.h2 style={{ y }} className="display display--2">
            {splitTitle[1]}
          </motion.h2>
        </div>
      </div>

      <div className="whyus__desc">
        <motion.p transition={{ ease: "linear" }} style={{ opacity }}>
          {paragraph}
        </motion.p>
      </div>
    </div>
  );
};

const WhyusImage = ({
  imageUrl,
  title,
  progress,
  range,
  order,
  arrayLength,
}) => {
  const rangeMiddle = [
    range[0],
    range[0] + (range[1] - range[0]) / 2,
    // range[0] + (range[1] - range[0]) / 1.5,
    range[1],
  ];

  const clipPathHidden = "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)";
  const clipPathVisible = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
  const clipPathFirst = useTransform(progress, range, [
    clipPathVisible,
    clipPathHidden,
  ]);
  const clipPathLast = useTransform(progress, range, [
    clipPathHidden,
    clipPathVisible,
  ]);
  const clipPathMiddle = useTransform(progress, rangeMiddle, [
    clipPathHidden,
    clipPathVisible,
    clipPathHidden,
  ]);

  const clipPath =
    order === 0
      ? clipPathFirst
      : order === arrayLength - 1
      ? clipPathLast
      : clipPathMiddle;

  return (
    <motion.div className="whyus__image" style={{ clipPath }}>
      <picture>
        <img
          alt={title}
          loading="lazy"
          width={800}
          height={1000}
          decoding="async"
          src={imageUrl}
        />
      </picture>
    </motion.div>
  );
};

const Whyus = () => {
  const { targetRef, scrollYProgress } = useScrollAnimation();

  return (
    <section className="whyus" id="whyus">
      <div ref={targetRef} className="whyus__container">
        <div className="whyus__wrap">
          <div className="whyus__col-md">
            {whyusContent.map((item, index) => {
              const start = index / whyusContent.length;
              const end = start + 1 / whyusContent.length;

              const { id, title, description } = item;
              return (
                <WhyusText
                  key={id}
                  title={title}
                  paragraph={description}
                  progress={scrollYProgress}
                  range={[start, end]}
                  order={index}
                  arrayLength={whyusContent.length}
                />
              );
            })}
          </div>

          <div className="whyus__col-xl">
            {whyusContent.map((item, index) => {
              const start = index / whyusContent.length;
              const end = start + 1 / whyusContent.length;
              const { id, title, imageUrl } = item;
              return (
                <WhyusImage
                  key={id}
                  title={title}
                  imageUrl={imageUrl}
                  progress={scrollYProgress}
                  range={[start, end]}
                  order={index}
                  arrayLength={whyusContent.length}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whyus;

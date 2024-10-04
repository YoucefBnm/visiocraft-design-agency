import { motion, useTransform } from "framer-motion";
import "./Features.scss";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { featuresContent } from "../../constants/data";

const FeaturesText = ({
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
    <div className="features__text">
      <div className="features__headings">
        <div className="features__title">
          <motion.h2 style={{ y }} className="display display--2">
            {splitTitle[0]}
          </motion.h2>
        </div>
        <div className="features__title">
          <motion.h2 style={{ y }} className="display display--2">
            {splitTitle[1]}
          </motion.h2>
        </div>
      </div>

      <div className="features__desc">
        <motion.p transition={{ ease: "linear" }} style={{ opacity }}>
          {paragraph}
        </motion.p>
      </div>
    </div>
  );
};

const FeaturesImage = ({
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
    <motion.div className="features__image" style={{ clipPath }}>
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

const Features = () => {
  const { scrollRef, scrollYProgress } = useScrollAnimation();

  return (
    <section className="features" id="Features">
      <div ref={scrollRef} className="features__container">
        <div className="features__wrap">
          <div className="features__col-md">
            {featuresContent.map((item, index) => {
              const start = index / featuresContent.length;
              const end = start + 1 / featuresContent.length;

              const { id, title, description } = item;
              return (
                <FeaturesText
                  key={id}
                  title={title}
                  paragraph={description}
                  progress={scrollYProgress}
                  range={[start, end]}
                  order={index}
                  arrayLength={featuresContent.length}
                />
              );
            })}
          </div>

          <div className="features__col-xl">
            {featuresContent.map((item, index) => {
              const start = index / featuresContent.length;
              const end = start + 1 / featuresContent.length;
              const { id, title, imageUrl } = item;
              return (
                <FeaturesImage
                  key={id}
                  title={title}
                  imageUrl={imageUrl}
                  progress={scrollYProgress}
                  range={[start, end]}
                  order={index}
                  arrayLength={featuresContent.length}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

import logo from "../../assets/img/logo_s.png";
import { useTransform, useScroll, motion } from "framer-motion";
import { useRef } from "react";

const TrippyScroll = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "30deg"]);
  const scale = useTransform(scrollYProgress, [0.5, 1], [1, 10]);


  return (
    <div ref={targetRef} className="relative z-0 h-[800vh] bg-neutral-200 md:mb-10">
      <div className="sticky top-0 h-screen bg-white w-screen">
        <Trippy rotate={rotate} scale={scale}/>
      </div>
      <div className="fixed inset-0 flex justify-center items-center">
        <Logo scrollYProgress={scrollYProgress} />
      </div>
    </div>
  );
};

const NUM_SECTIONS = 25;
const PADDING = `${100 / NUM_SECTIONS / 2.1}vmin`;

const generateSections = (count, color, rotate, scale) => {
  if (count === NUM_SECTIONS) {
    return <></>;
  }

  const nextColor = color === "white" ? "black" : "white";

  return (
    <Section rotate={rotate} background={color} scale={scale}>
      {generateSections(count + 1, nextColor, rotate)}
    </Section>
  );
};

const Trippy = ({ rotate, scale }) => {
  return (
    <motion.div className="absolute inset-0 overflow-hidden bg-black ">
      {generateSections(0, "black", rotate, scale)}
    </motion.div>
  );
};

const Section = ({ background, children, rotate, scale }) => {
  return (
    <motion.div
      className="relative h-full w-full origin-center"
      style={{
        background,
        rotate,
        scale,
        padding: PADDING,
      }}
    >
      {children}
    </motion.div>
  );
};

const Logo = ({ scrollYProgress }) => {
    // const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);
    const opacity = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);
    const scale = useTransform(scrollYProgress, [0.90, 1], [1, 0]);
  
    return (
      <motion.div
        className="p-8 bg-white rounded-full shadow-2xl"
        style={{
          opacity,
          scale,
        }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5}}
      >
        <img src={logo} alt="Logo" className="w-20" />
      </motion.div>
    );
  };

export default TrippyScroll;


import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  useAnimation,
  animate,
} from "framer-motion";
import { useInView } from 'react-intersection-observer';

const COLORS_TOP = ["#000000", "#FFFFFF"];

const Landing = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(175% 175% at 50% 0%, #000000 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 12px ${color}`;





  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({ y: [0, 10, 0], transition: { repeat: Infinity, duration: 1 } });
    } else {
      controls.stop();
    }
  }, [controls, inView]);

  const handleClick = () => {
    window.location.href = "mailto:contact@onnoff.in", "_blank";
  }


  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative grid place-content-center overflow-hidden bg-black px-4 pt-32 text-gray-200"
    >
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="font-Montserra max-w-7xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-3xl font-bold leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:px-10 lg:px-0 lg:text-9xl md:leading-tight mb-2 md:mb-5">
          TRANSFORMING IDEAS INTO REALITY
        </h1>
        {/* <p className="my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed">
        We bring a passion for innovation and a wealth of experience to help businesses to achieve their software goals. From concept to completion, we provide solutions that elevate the business and drive results.
        </p> */}
        <motion.button
          style={{
            border,
            boxShadow,
          }}
          whileHover={{
            scale: 1.015,
          }}
          whileTap={{
            scale: 0.985,
          }}
          onClick={handleClick}
          className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
        >
          Contact Us
          <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
        </motion.button>
      </div>

      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={500} factor={4} fade speed={3} />
        </Canvas>
      </div>
      <div className="flex justify-end md:px-10 lg:px-0 ">
        <motion.svg
        ref={ref}
          fill="#ffffff"
          height="75px"
          width="75px"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 330 330"
          xml:space="preserve"
          stroke="#ffffff"
          animate={controls}
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              id="XMLID_225_"
              d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
            ></path>{" "}
          </g>
        </motion.svg>
      </div>
    </motion.section>
  );
};

export default Landing;

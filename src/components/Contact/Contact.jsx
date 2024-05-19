import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { SiGmail, SiLinkedin, SiInstagram, SiX, SiDiscord, SiTelegram, SiFacebook, SiYoutube, SiMedium } from 'react-icons/si';

const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

const ENTRANCE_KEYFRAMES = {
  left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES = {
  left: [NO_CLIP, TOP_RIGHT_CLIP],
  bottom: [NO_CLIP, TOP_RIGHT_CLIP],
  top: [NO_CLIP, TOP_RIGHT_CLIP],
  right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

const LinkBox = ({ Icon, href }) => {
  const scope = useRef(null);
  const animate = useAnimation();

  const getNearestSide = (e) => {
    const box = e.target.getBoundingClientRect();

    const proximityToLeft = {
      proximity: Math.abs(box.left - e.clientX),
      side: "left",
    };
    const proximityToRight = {
      proximity: Math.abs(box.right - e.clientX),
      side: "right",
    };
    const proximityToTop = {
      proximity: Math.abs(box.top - e.clientY),
      side: "top",
    };
    const proximityToBottom = {
      proximity: Math.abs(box.bottom - e.clientY),
      side: "bottom",
    };

    const sortedProximity = [
      proximityToLeft,
      proximityToRight,
      proximityToTop,
      proximityToBottom,
    ].sort((a, b) => a.proximity - b.proximity);

    return sortedProximity[0].side;
  };

  const handleMouseEnter = (e) => {
    const side = getNearestSide(e);

    animate.start({
      clipPath: ENTRANCE_KEYFRAMES[side],
    });
  };

  const handleMouseLeave = (e) => {
    const side = getNearestSide(e);

    animate.start({
      clipPath: EXIT_KEYFRAMES[side],
    });
  };

  return (
    <div>
      <a
        href={href}
        onMouseEnter={(e) => handleMouseEnter(e)}
        onMouseLeave={(e) => handleMouseLeave(e)}
        className="relative grid h-20 w-full place-content-center sm:h-28 md:h-36"
      >
        <Icon className="text-xl sm:text-3xl lg:text-4xl" />

        <motion.div
          ref={scope}
          initial={{ clipPath: BOTTOM_RIGHT_CLIP }}
          animate={animate}
          className="absolute inset-0 grid place-content-center bg-neutral-900 text-white"
        >
          <Icon className="text-xl sm:text-3xl md:text-4xl" />
        </motion.div>
      </a>
    </div>
  );
};

const FloatingText = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    resizeText();
    window.addEventListener('resize', resizeText);
    return () => window.removeEventListener('resize', resizeText);
  }, []);

  const resizeText = () => {
    const container = containerRef.current;
    const text = textRef.current;

    if (!container || !text) return;

    const containerWidth = container.offsetWidth;
    let min = 1;
    let max = 2500;

    while (min <= max) {
      const mid = Math.floor((min + max) / 2);
      text.style.fontSize = mid + 'px';

      if (text.offsetWidth <= containerWidth) {
        min = mid + 1;
      } else {
        max = mid - 1;
      }
    }

    text.style.fontSize = max + 'px';

    // Set the animation
    // controls.start({
    //   x: [containerWidth, -text.offsetWidth],
    //   transition: {
    //     duration: 10,
    //     ease: 'linear',
    //     repeat: Infinity,
    //   },
    // });
  };

  return (
    <div className="flex w-full items-center overflow-hidden" ref={containerRef}>
      {/* <motion.span
        className="bottom-0 left-0 mx-auto whitespace-nowrap text-center font-bold uppercase text-black"
        ref={textRef}
        animate={controls}
      >
        CONTACT US
      </motion.span> */}
    </div>
  );
};

const Contact = () => {
  return (
    <div>
      <FloatingText />
      <div className="divide-y divide-neutral-900 border border-neutral-900">
        <div className="grid grid-cols-2 divide-x divide-neutral-900">
          <LinkBox Icon={SiGmail} href="#" />
          <LinkBox Icon={SiLinkedin} href="#" />
        </div>
        <div className="grid grid-cols-4 divide-x divide-neutral-900">
          <LinkBox Icon={SiInstagram} href="#" />
          <LinkBox Icon={SiX} href="#" />
          <LinkBox Icon={SiDiscord} href="#" />
          <LinkBox Icon={SiTelegram} href="#" />
        </div>
        <div className="grid grid-cols-3 divide-x divide-neutral-900">
          <LinkBox Icon={SiFacebook} href="#" />
          <LinkBox Icon={SiYoutube} href="#" />
          <LinkBox Icon={SiMedium} href="#" />
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React from "react";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Header.scss";

let scaleVariants = {};
let headerVariants = {};
let emojiVariants = {};
let emojiImgVariants = {};

const isMobile = window.innerWidth < 768;

if (!isMobile) {
  scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  headerVariants = {
    whileInView: {
      x: [-100, 0],
      opacity: [0, 1],
      transition: {
        duration: 0.5,
      },
    },
  };

  emojiVariants = {
    whileInView: {
      opacity: [0, 1],
      transition: { duration: 0.5, delayChildren: 0.5 },
    },
  };

  emojiImgVariants = {
    whileInView: {
      scale: [0, 1],
      transition: { duration: 1, ease: "easeInOut" },
    },
  };
}

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        variants={headerVariants}
        whileInView={headerVariants.whileInView}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Ali Nabil</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">Web Developer</p>
            <p className="p-text">Freelancer</p>
          </div>
        </div>

        <motion.div
          variant={scaleVariants}
          whileInView={scaleVariants.whileInView}
          className="app__header-circles-0"
        >
          {[images.css, images.node].map((circle, index) => (
            <div className="circle-cmp app__flex" key={`circle-${index}`}>
              <img src={circle} alt="circle" />
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        variants={emojiVariants}
        whileInView={emojiVariants.whileInView}
        className="app__header-img"
      >
        <img src={images.emojiProfile} alt="profile_bg" />
        <motion.img
          variants={emojiImgVariants}
          whileInView={emojiImgVariants.whileInView}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.react, images.javascript, images.html].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");

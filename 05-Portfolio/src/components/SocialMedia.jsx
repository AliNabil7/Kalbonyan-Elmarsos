import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a href="https://github.com/AliNabil7" rel="noreferrer" target="_blank">
        <div>
          <BsGithub />
        </div>
      </a>
      <a
        href="https://www.linkedin.com/in/ali-nabil-313946130/"
        rel="noreferrer"
        target="_blank"
      >
        <div>
          <BsLinkedin />
        </div>
      </a>
    </div>
  );
};

export default SocialMedia;

import React from "react";

const SocialIcon = ({ icon, send, name }) => {
  return (
    <a target="_blank" className={name} href={send}>
      {icon}
    </a>
  );
};

export default SocialIcon;

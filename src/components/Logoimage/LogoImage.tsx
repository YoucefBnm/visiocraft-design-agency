import React from "react";
import { Logo } from "../../assets";

const LogoImage = () => {
  return (
    <img
      style={{ verticalAlign: "middle" }}
      width="69"
      height="35"
      src={Logo}
      alt="visiocraft logo"
    />
  );
};

export default LogoImage;

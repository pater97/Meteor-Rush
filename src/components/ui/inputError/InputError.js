import React, { useState } from "react";
import "./inputError.css";

const InputError = (props) => {
  const [isHovered, setisHovered] = useState(false);

  return (
    <>
      <div
        onMouseEnter={() => setisHovered(true)}
        onMouseLeave={() => setisHovered(false)}
        className={isHovered ? "hovered-input-error input-error" : "input-error"}
      >
        {isHovered && props.msg}
      </div>
      <span className="error-icon">!</span>
    </>
  );
};

export default InputError;

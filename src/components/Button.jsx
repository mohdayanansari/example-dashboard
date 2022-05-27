import React from "react";
import { useStateContext } from "../contexts/ContextProvider";

const Button = ({
  color,
  bgColor,
  text,
  borderRadius,
  size,
  icon,
  btnName,
}) => {
  const { isClicked, setIsClicked } = useStateContext();
  return (
    <button
      type="button"
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} p-1 hover:drop-shadow-xl dark:text-white`}
      onClick={() => {
        setIsClicked((isClicked.btnName = false));
      }}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;

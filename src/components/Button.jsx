import React from "react";

function Button({
  children,
  type = "button",
  bgColor = "bg-blue-800",
  textColor = "white",
  className = "",
  ...props
}) {
  return (
    <button
      type={type}
      className={`${bgColor} ${textColor} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;

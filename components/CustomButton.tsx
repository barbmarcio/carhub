"use client";
import React, { MouseEventHandler } from "react";

interface CustomButtonProps {
  title: string;
  type?: "button" | "submit";
  //   disabled: boolean;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

const CustomButton = ({
  title,
  type,
  containerStyles,
  handleClick,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={type || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomButton;

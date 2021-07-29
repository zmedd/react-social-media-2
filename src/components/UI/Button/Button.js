import React from "react";
import { ButtonElement } from "./Button.style";

export const Button = ({ buttonType, text, handleClick }) => {
  return (
    <ButtonElement buttonType={buttonType} onClick={handleClick}>
      {text}
    </ButtonElement>
  );
};

import "./Button.css";
import { FC } from "react";
import { ButtonProps } from "./Button.props";

const Button: FC<ButtonProps> = ({ title, onClickBtn }: ButtonProps) => {
  return (
    <>
      <button onClick={onClickBtn} className="btn-style">
        {title}
      </button>
    </>
  );
};

export default Button;

import "./Button.css";
import { FC } from "react";
import { ButtonProps } from "./Button.props";

const Button: FC<ButtonProps> = ({ title }: ButtonProps) => {
  return (
    <>
      <button className="btn-style">{title}</button>
    </>
  );
};

export default Button;

import { FC } from "react";
import "./ProfileCircle.css";
import { ProfileCircleProps } from "./ProfileCircle.props";

const ProfileCircle: FC<ProfileCircleProps> = ({
  firstLetter,
  secondLetter,
}: ProfileCircleProps) => {
  return (
    <>
      <div className="acronyms-wrapper">
        <div className="letter">{secondLetter}</div>
        <div className="letter">{firstLetter}</div>
      </div>
    </>
  );
};

export { ProfileCircle };

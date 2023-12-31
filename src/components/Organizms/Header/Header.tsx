import Button from "../../Atoms/Button/Button";
import "./Header.css";
import { FC, useState } from "react";

const Header: FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const onDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className="header">
      <div className="title">My Room</div>
      <div className="section-two">
        <div onClick={onDarkMode} className="dark-mode">
          {isDarkMode ? (
            <img src="public/icons/moon-solid.svg" className="moon" />
          ) : (
            <img src="public/icons/moon-regular.svg" className="moon" />
          )}
        </div>
        <div className="leave-btn">
          <Button onClickBtn={() => {}} title="Leave" />
        </div>
      </div>
    </div>
  );
};

export default Header;

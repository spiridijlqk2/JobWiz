import React from "react";
import { useDashboardContext } from "../pages/DashboardLayout/DashboardLayout.jsx";
import Wrapper from "../assets/wrappers/ThemeToggle.js";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useDashboardContext();
  return (
    <Wrapper onClick={toggleDarkTheme}>
      {isDarkTheme ? (
        <BsFillSunFill className={"toggle-icon"} />
      ) : (
        <BsFillMoonFill />
      )}
    </Wrapper>
  );
};
export default ThemeToggle;

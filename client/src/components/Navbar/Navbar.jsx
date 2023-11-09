import React from "react";
import { FaAlignLeft } from "react-icons/fa";
import { Logo } from "../index.js";
import { useDashboardContext } from "../../pages/DashboardLayout/DashboardLayout.jsx";
import s from "./Navbar.module.css";
import LogoutContainer from "../LogoutContainer.jsx";
import ThemeToggle from "../ThemeToggle.jsx";

const Navbar = () => {
  const { toggleSidebar } = useDashboardContext();
  return (
    <nav className={s.nav}>
      <div className={s.navCenter}>
        <button type={"button"} className={s.toggleBtn} onClick={toggleSidebar}>
          <FaAlignLeft />
        </button>
        <div>
          <Logo className={s.logo} />
          <h4 className={s.logoText}>dashboard</h4>
        </div>
        <div className={s.btnContainer}>
          <ThemeToggle />
          <LogoutContainer />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

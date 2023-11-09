import React from "react";
import { useDashboardContext } from "../../pages/DashboardLayout/DashboardLayout.jsx";
import { FaTimes } from "react-icons/fa";
import { Logo } from "../index.js";
import s from "./SmallSidebar.module.css";
import cn from "classnames";
import NavLinks from "../NavLinks.jsx";

const SmallSidebar = () => {
  const { showSidebar, toggleSidebar } = useDashboardContext();
  return (
    <aside className={s.aside}>
      <div className={cn(s.sidebarContainer, { [s.showSidebar]: showSidebar })}>
        <div className={s.content}>
          <button
            type={"button"}
            className={s.closeBtn}
            onClick={toggleSidebar}
          >
            <FaTimes />
          </button>
          <header>
            <Logo className={s.logo} />
          </header>
          <NavLinks />
        </div>
      </div>
    </aside>
  );
};
export default SmallSidebar;

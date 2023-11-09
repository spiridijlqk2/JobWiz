import React from "react";
import { useDashboardContext } from "../../pages/DashboardLayout/DashboardLayout.jsx";
import Logo from "../Logo.jsx";
import NavLinks from "../NavLinks.jsx";
import s from "./BigSidebar.module.css";
import cn from "classnames";

const BigSidebar = () => {
  const { showSidebar } = useDashboardContext();

  return (
    <aside className={s.aside}>
      <div className={cn(s.sidebarContainer, { [s.showSidebar]: showSidebar })}>
        <div className={s.content}>
          <header className={s.header}>
            <Logo />
          </header>
          <NavLinks
            classNameContainer={s.navLinks}
            classNameLink={s.navLink}
            classNameActive={s.active}
            isBigSidebar
          />
        </div>
      </div>
    </aside>
  );
};
export default BigSidebar;

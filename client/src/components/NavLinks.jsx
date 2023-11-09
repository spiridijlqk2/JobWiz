import React from "react";
import { useDashboardContext } from "../pages/DashboardLayout/DashboardLayout.jsx";
import links from "../utils/links.jsx";
import { NavLink } from "react-router-dom";
import s from "./SmallSidebar/SmallSidebar.module.css";
import cn from "classnames";

const NavLinks = (props) => {
  const classNameContainer = props.classNameContainer ?? s.navLinks;
  const classNameLink = props.classNameLink ?? s.navLink;
  const classNameActive = props.classNameActive ?? s.active;
  const { toggleSidebar, user } = useDashboardContext();
  return (
    <div className={classNameContainer}>
      {links.map((link) => {
        const { text, path, icon } = link;
        return (
          <NavLink
            to={path}
            key={text}
            className={({ isActive }) =>
              cn(classNameLink, { [classNameActive]: isActive })
            }
            onClick={props.isBigSidebar ? null : toggleSidebar}
            end
          >
            <span className={s.icon}>{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};
export default NavLinks;

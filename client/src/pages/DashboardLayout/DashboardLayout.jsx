import React, { createContext, useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import { BigSidebar, Navbar, SmallSidebar } from "../../components/index.js";
import s from "./DashboardLayout.module.css";
import { checkDefaultTheme } from "../../App.jsx";

const DashboardContext = createContext();

const DashboardLayout = ({}) => {
  // temp
  const user = { name: "john" };
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme());

  const toggleDarkTheme = () => {
    setIsDarkTheme((prev) => {
      const newDarkTheme = !prev;
      document.body.classList.toggle("dark-theme", newDarkTheme);
      localStorage.setItem("darkTheme", newDarkTheme);
      return newDarkTheme;
    });
  };
  const toggleSidebar = () => {
    setShowSidebar((prev) => !prev);
  };
  const logoutUser = async () => {
    console.log("logout");
  };
  return (
    <DashboardContext.Provider
      value={{
        user,
        showSidebar,
        isDarkTheme,
        toggleDarkTheme,
        toggleSidebar,
        logoutUser,
      }}
    >
      <section>
        <main className={s.dashboard}>
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className={s.dashboardPage}>
              <Outlet />
            </div>
          </div>
        </main>
      </section>
    </DashboardContext.Provider>
  );
};
export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout;

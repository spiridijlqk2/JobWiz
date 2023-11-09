import React from "react";
import { Link, useRouteError } from "react-router-dom";
import img from "../../assets/images/not-found.svg";
import s from "./Error.module.css";

const Error = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <main className={s.main}>
        <div>
          <img className={s.img} src={img} alt="not found" />
          <h3 className={s.h3}>Page not found!</h3>
          <p className={s.p}>We cant seem to find the page youre looking for</p>
          <Link to={"/dashboard"} className={s.a}>
            back home
          </Link>
        </div>
      </main>
    );
  }
  return (
    <main>
      <div>
        <h3>something went wrong</h3>
      </div>
    </main>
  );
};
export default Error;

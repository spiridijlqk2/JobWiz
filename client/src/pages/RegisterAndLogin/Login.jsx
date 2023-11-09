import React from "react";
import { FormRow, Logo } from "../../components/index.js";
import { Link } from "react-router-dom";
import s from "./RegisterAndLogin.module.css";
import c from "classnames";

const Login = () => {
  return (
    <section className={s.section}>
      <form className={c(s.form)}>
        <Logo className={s.logo} />
        <h4 className={s.h4}>Login</h4>
        <FormRow
          type={"email"}
          name={"email"}
          defaultValue={"john@gmail.com"}
        />
        <FormRow
          type={"password"}
          name={"password"}
          defaultValue={"secret123"}
        />
        <button type={"submit"} className={c(s.btn, s.btnBlock)}>
          submit
        </button>
        <button type={"button"} className={c(s.btn, s.btnBlock)}>
          explore the app
        </button>
        <p className={s.p}>
          Not a member yet?
          <Link to={"/register"} className={s.memberBtn}>
            Register
          </Link>
        </p>
      </form>
    </section>
  );
};

export default Login;

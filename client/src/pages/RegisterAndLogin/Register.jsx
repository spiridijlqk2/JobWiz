import React from "react";
import { Link } from "react-router-dom";
import { FormRow, Logo } from "../../components/index.js";
import s from "./RegisterAndLogin.module.css";
import c from "classnames";

const Register = () => {
  return (
    <section className={s.section}>
      <form className={s.form}>
        <Logo className={s.logo} />
        <h4 className={s.h4}>Register</h4>
        <FormRow type={"text"} name={"name"} defaultValue={"john"} />
        <FormRow
          type={"text"}
          name={"lastName"}
          defaultValue={"smith"}
          labelText={"Last Name"}
        />
        <FormRow type={"text"} name={"location"} defaultValue={"earth"} />
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
          Submit
        </button>
        <p className={s.p}>
          Already a member?
          <Link to={"/login"} className={s.memberBtn}>
            Login
          </Link>
        </p>
      </form>
    </section>
  );
};
export default Register;

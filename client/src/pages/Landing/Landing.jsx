import React from "react";
import { Link } from "react-router-dom";
import main from "../../assets/images/main.svg";
import { Logo } from "../../components/index.js";
import s from "./Landing.module.css";
import c from "classnames";

const Landing = () => {
  return (
    <section>
      <nav className={s.nav}>
        <Logo />
      </nav>
      <div className={c(s.container, s.page)}>
        <div className="info">
          <h1 className={s.h1}>
            Job <span className={s.span}>tracking</span> app
          </h1>
          <p className={s.p}>
            I'm baby selfies retro cliche paleo YOLO shoreditch listicle.
            Asymmetrical blackbird spyplane heirloom, photo booth kickstarter
            meditation sustainable pug man bun flannel grailed viral flexitarian
            art party pinterest. Meggings green juice subway tile, pitchfork
            humblebrag leggings man braid thundercats. Drinking vinegar retro
            forage sustainable plaid, pork belly franzen chia organic
            shoreditch. Chartreuse gentrify tumeric, pour-over wayfarers XOXO
            deep v taiyaki.
          </p>
          <Link to={"/register"} className={c(s.btn, s.registerLink)}>
            Register
          </Link>
          <Link to={"/login"} className={s.btn}>
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className={s.mainImg} />
      </div>
    </section>
  );
};

export default Landing;

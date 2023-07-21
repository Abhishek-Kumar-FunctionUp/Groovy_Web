import React from "react";
import { FiMail } from "react-icons/fi";
import { BiLink } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import style from "./Welcome.module.css";

export default function Welcome() {
  return (
    <div className={style.main}>
      <div className={style.topContainer}>
        <p className={style.title}>
          <marquee>
          Welcome to <span className={style.titleBold}>Shop - O - Pedia</span>
          </marquee>
        </p>
        <div className={style.contact}>
          <div>
            <p className={style.leftText}>
            An exciting place for the whole family to shop.
            </p>
          </div>
          <div className={style.linksContainer}>
            <div className={`${style.links} ${style.mail}`}>
              <p>
                <FiMail className={style.icons} /> Mail Us
              </p>
            </div>
            <div className={`${style.links} ${style.link}`}>
              <p>
                <BiLink className={style.icons} /> Website
              </p>
            </div>
            <div className={`${style.links} ${style.location}`}>
              <p>
                <HiOutlineLocationMarker className={style.icons} /> Location
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

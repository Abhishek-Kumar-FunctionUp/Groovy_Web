import React from "react";
import style from "./Footer.module.css";
import { BsCart2 } from "react-icons/bs";

export default function Footer() {
  return (
    <div className={style.main}>
      <div className={style.top}>
        <div className={style.heading}>
          <p>Illum magnam aliquam</p>
          <p>Quia so minima</p>
          <p>Quia so minima</p>
        </div>
        <div className={style.lorem}>
          <div className={style.loremText}>
            <p>Ipsum Lorem</p>
            <p>Ipsum Lorem</p>
            <p>Ipsum Lorem</p>
            <p>Ipsum Lorem</p>
            <p>Ipsum Lorem</p>
          </div>
          <div className={style.loremText}>
            <p>Ipsum Lorem</p>
            <p>Ipsum Lorem</p>
            <p>Ipsum Lorem</p>
            <p>Ipsum Lorem</p>
            <p>Ipsum Lorem</p>
          </div>
          <div className={style.loremText}>
            <p>Ipsum Lorem</p>
            <p>Ipsum Lorem</p>
            <p>Ipsum Lorem</p>
            <p>Ipsum Lorem</p>
            <p>Ipsum Lorem</p>
          </div>
          <div className={style.loremText}>
            <p>Ipsum Lorem</p>
            <p>Ipsum Lorem</p>
            <p>Ipsum Lorem</p>
            <p>Ipsum Lorem</p>
            <p>Ipsum Lorem</p>
          </div>
          <div className={style.loremTextCart}>
            <p>
              <BsCart2 />
              Lorem
            </p>
            <p>
              <BsCart2 />
              Lorem
            </p>
            <p>
              <BsCart2 />
              Lorem
            </p>
            <p>
              <BsCart2 />
              Lorem
            </p>
          </div>
        </div>
      </div>
      <div className={style.bottom}>
        <p className={style.bottomHeading}>Shop - O - Pedia</p>
        <p className={style.bottomText}>An exciting place for the whole family to shop.</p>
        <p className={style.bottomText}>
         Shop Today.
        </p>
      </div>
    </div>
  );
}

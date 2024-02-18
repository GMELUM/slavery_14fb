import { FC, HTMLAttributes } from "react";

import styles from "./SpecialOffer.module.css";

interface SpecialOffer extends HTMLAttributes<HTMLDivElement> {};

import { Events } from "components";

const SpecialOffer: FC<SpecialOffer> = (props) => (
  <Events className={styles.SpecialOffer} {...props}>
    <div className={styles.SpecialOffer__inner}>
      <div className={styles.SpecialOffer__action}>
        <Events className={styles.SpecialOffer__button}>
          Выгодное предложение
        </Events>
      </div>
    </div>
  </Events>
);

export default SpecialOffer;

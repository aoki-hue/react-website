import React from "react";

/* css */
import styles from "css/utils.module.css";

/* fontawesome */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScissors, faArrowRight } from "@fortawesome/free-solid-svg-icons";

/* 見出し -h2 */
const HeadLabel = ({ title }) => {
  return (
    <h2 className={styles.headLabel}>
      <FontAwesomeIcon icon={faScissors} className={styles.headLabelIcon} />
      <span className={styles.headLabelText}>{title}</span>
    </h2>
  );
};

/* ボタン */
const PrimaryBtn = ({ text }) => {
  return (
    <React.Fragment>
      <div className={styles.primaryBtn}>
        {text}
        <FontAwesomeIcon icon={faArrowRight} className={styles.primaryBtnIcon} />
      </div>
    </React.Fragment>
  );
};

/* ボタン */
const SecondaryBtn = ({ text }) => {
  return (
    <React.Fragment>
      <div className={styles.secondaryBtn}>{text}</div>
    </React.Fragment>
  );
};

/* section */
const SectionArea = ({ children, background = false }) => {
  return (
    <section className={background ? styles.bgContainer : styles.container}>
      <div className={styles.containerInner}>{children}</div>
    </section>
  );
};

/* checkbox */
const Checkbox = ({ id, value, name, onChange }) => {
  return (
    <React.Fragment>
      <input id={id} type="checkbox" name={name} value={value} onChange={onChange}></input>
      <label htmlFor={id} className={styles.checkLabel}>
        {value}
      </label>
    </React.Fragment>
  );
};

export { HeadLabel, PrimaryBtn, SecondaryBtn, Checkbox, SectionArea };

import React from "react";

/* components */
import { SecondaryBtn } from "components/utils.module";

/* link */
import { Link } from "react-router-dom";

/* css */
import styles from "css/error.module.css";

const Error = () => {
  return (
    <React.Fragment>
      <div className={styles.errorNum}>404</div>
      <p className={styles.errorTextLabel}>お探しのページが見つかりませんでした</p>
      <p className={styles.errorText}>下記ボタンから再度アクセスしてください</p>
      <SecondaryBtn text="Topへ戻る" />
    </React.Fragment>
  );
};

export default Error;

import React from "react";

/* components */
import { HeadLabel, PrimaryBtn } from "components/utils.module";

/* css */
import styles from "css/menu.module.css";

const Menu = () => {
  return (
    <React.Fragment>
      <HeadLabel title="Menu" />
      <div className={styles.menu}>
        <div>メニューカテゴリ</div>
        <div>メニューカテゴリ</div>
        <div>メニューカテゴリ</div>
      </div>
      <PrimaryBtn text="View more" />
    </React.Fragment>
  );
};

export default Menu;
{
  /* <*/
}

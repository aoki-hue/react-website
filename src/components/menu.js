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
        <div className={styles.menuCategory}>
          <p className={styles.menuCategoryTitle}>Cut</p>
          <ul className={styles.menuList}>
            <li className={styles.menuListWrap}>
              <span className={styles.menuListText}>一般</span>
              <span className={styles.menuListPrice}>￥4950</span>
            </li>
            <li className={styles.menuListWrap}>
              <span className={styles.menuListText}>一般</span>
              <span className={styles.menuListPrice}>￥4950</span>
            </li>
            <li className={styles.menuListWrap}>
              <span className={styles.menuListText}>一般</span>
              <span className={styles.menuListPrice}>￥4950</span>
            </li>
          </ul>
        </div>
        <div className={styles.menuCategory}>
          <p className={styles.menuCategoryTitle}>Cut</p>
          <ul className={styles.menuList}>
            <li className={styles.menuListWrap}>
              <span className={styles.menuListText}>一般</span>
              <span className={styles.menuListPrice}>￥4950</span>
            </li>
            <li className={styles.menuListWrap}>
              <span className={styles.menuListText}>一般</span>
              <span className={styles.menuListPrice}>￥4950</span>
            </li>
            <li className={styles.menuListWrap}>
              <span className={styles.menuListText}>一般</span>
              <span className={styles.menuListPrice}>￥4950</span>
            </li>
          </ul>
        </div>
        <div className={styles.menuCategory}>
          <p className={styles.menuCategoryTitle}>Cut</p>
          <ul className={styles.menuList}>
            <li className={styles.menuListWrap}>
              <span className={styles.menuListText}>一般</span>
              <span className={styles.menuListPrice}>￥4950</span>
            </li>
            <li className={styles.menuListWrap}>
              <span className={styles.menuListText}>一般</span>
              <span className={styles.menuListPrice}>￥4950</span>
            </li>
            <li className={styles.menuListWrap}>
              <span className={styles.menuListText}>一般</span>
              <span className={styles.menuListPrice}>￥4950</span>
            </li>
          </ul>
        </div>
        <div className={styles.menuCategory}>
          <p className={styles.menuCategoryTitle}>Cut</p>
          <ul className={styles.menuList}>
            <li className={styles.menuListWrap}>
              <span className={styles.menuListText}>一般</span>
              <span className={styles.menuListPrice}>￥4950</span>
            </li>
            <li className={styles.menuListWrap}>
              <span className={styles.menuListText}>一般</span>
              <span className={styles.menuListPrice}>￥4950</span>
            </li>
            <li className={styles.menuListWrap}>
              <span className={styles.menuListText}>一般</span>
              <span className={styles.menuListPrice}>￥4950</span>
            </li>
          </ul>
        </div>
        <div className={styles.menuCategory}>
          <p className={styles.menuCategoryTitle}>Cut</p>
          <ul className={styles.menuList}>
            <li className={styles.menuListWrap}>
              <span className={styles.menuListText}>一般</span>
              <span className={styles.menuListPrice}>￥4950</span>
            </li>
            <li className={styles.menuListWrap}>
              <span className={styles.menuListText}>一般</span>
              <span className={styles.menuListPrice}>￥4950</span>
            </li>
            <li className={styles.menuListWrap}>
              <span className={styles.menuListText}>一般</span>
              <span className={styles.menuListPrice}>￥4950</span>
            </li>
          </ul>
        </div>
        <div className={styles.menuCategory}>
          <p className={styles.menuCategoryTitle}>Cut</p>
          <ul className={styles.menuList}>
            <li className={styles.menuListWrap}>
              <span className={styles.menuListText}>一般</span>
              <span className={styles.menuListPrice}>￥4950</span>
            </li>
            <li className={styles.menuListWrap}>
              <span className={styles.menuListText}>一般</span>
              <span className={styles.menuListPrice}>￥4950</span>
            </li>
            <li className={styles.menuListWrap}>
              <span className={styles.menuListText}>一般</span>
              <span className={styles.menuListPrice}>￥4950</span>
            </li>
          </ul>
        </div>
      </div>
      <PrimaryBtn text="View more" />
    </React.Fragment>
  );
};

export default Menu;

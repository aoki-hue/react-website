import React from "react";

/* components */
import { HeadLabel } from "components/utils.module";

/* css */
import styles from "css/menu.module.css";

/* json */
import MenuList from "json/menu.json";

const Menu = () => {
  console.log(MenuList.data);
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
    </React.Fragment>
  );
};

export default Menu;

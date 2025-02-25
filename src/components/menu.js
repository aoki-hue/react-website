import React from "react";

/* components */
import { HeadLabel } from "components/utils.module";

/* css */
import styles from "css/menu.module.css";

/* json */
import MenuData from "json/menu.json";

const Menu = ({ menuPage = false }) => {
  let filteredMenu = [];

  if (menuPage === false) {
    for (let i = 0; i < 3; i++) {
      filteredMenu.push(MenuData[i]);
    }
  } else {
    filteredMenu = MenuData;
  }

  return (
    <React.Fragment>
      <HeadLabel title="Menu" />
      <div className={styles.menu}>
        {filteredMenu.map((menu) => (
          <div className={styles.menuCategory}>
            <p className={styles.menuCategoryTitle}>{menu.menuCategory}</p>
            <ul className={styles.menuList}>
              {menu.menuList.map((menu) => (
                <li className={styles.menuListWrap}>
                  <span className={styles.menuListText}>{menu.menu}</span>
                  <span className={styles.menuListPrice}>{menu.price}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Menu;

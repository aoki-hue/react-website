/* useState */
import { useState } from "react";

/* link */
import { Link } from "react-router-dom";

/* css */
import styles from "css/header.module.css";

/* image */
import logo from "img/logo.svg";

/* fontawesome */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneFlip } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const toggleNav = () => {
    setNavIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.header}>
      <img src={logo} alt="chime" className={styles.logo}></img>
      <nav className={`${navIsOpen ? styles.open : styles.close} ${styles.nav}`}>
        <div className={styles.accordionButton} onClick={toggleNav}>
          開閉
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/information">Information</Link>
          </li>
        </ul>
        {/* <div className={`${navIsOpen ? styles.open : styles.close} ${styles.navBg}`}></div> */}
      </nav>

      <div className={styles.tel}>
        <FontAwesomeIcon icon={faPhoneFlip} className={styles.telIcon} />
        <p className={styles.telText}>お気軽にお電話ください</p>
        <p className={styles.telNumber}>
          <a href="tel:0000-00-0000">0000-00-0000</a>
        </p>
      </div>
    </div>
  );
};

export default Header;

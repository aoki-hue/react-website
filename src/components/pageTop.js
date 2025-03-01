/* css */
import styles from "css/pageTop.module.css";

/* fontawesome */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const returnTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const PageTop = () => {
  return (
    <div className={styles.pageTop} onClick={returnTop}>
      <FontAwesomeIcon icon={faAngleUp} className={styles.pageTopIcon}></FontAwesomeIcon>
    </div>
  );
};

export default PageTop;

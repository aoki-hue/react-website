import React from "react";

/* components */
import { HeadLabel, PrimaryBtn } from "components/utils.module";

/* link */
import { Link } from "react-router-dom";

/* css */
import styles from "css/information.module.css";

/* fontawesome */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";

/* image */
import thumbnail from "img/thumbnailInfo.jpg";

const Information = () => {
  return (
    <React.Fragment>
      <HeadLabel title="information" />
      <ul className={styles.infoArea}>
        <li className={styles.infoList}>
          <img src={thumbnail} alt="" className={styles.infoThumbnail}></img>
          <div className={styles.infoWrap}>
            <p className={styles.infoDate}>
              <FontAwesomeIcon icon={faClock} className={styles.infoDateIcon} />
              2025-00-00
            </p>
            <p className={styles.infoTitle}>お知らせタイトルタイトルタイトルタイトルタイトル</p>
            <Link to="/information" className={styles.infoLink}>
              Read more
              <FontAwesomeIcon icon={faAngleRight} className={styles.infoLinkIcon} />
            </Link>
          </div>
        </li>
        <li className={styles.infoList}>
          <img src={thumbnail} alt="" className={styles.infoThumbnail}></img>
          <div className={styles.infoWrap}>
            <p className={styles.infoDate}>
              <FontAwesomeIcon icon={faClock} className={styles.infoDateIcon} />
              2025-00-00
            </p>
            <p className={styles.infoTitle}>お知らせタイトルタイトルタイトルタイトルタイトル</p>
            <Link to="/information" className={styles.infoLink}>
              Read more
              <FontAwesomeIcon icon={faAngleRight} className={styles.infoLinkIcon} />
            </Link>
          </div>
        </li>
        <li className={styles.infoList}>
          <img src={thumbnail} alt="" className={styles.infoThumbnail}></img>
          <div className={styles.infoWrap}>
            <p className={styles.infoDate}>
              <FontAwesomeIcon icon={faClock} className={styles.infoDateIcon} />
              2025-00-00
            </p>
            <p className={styles.infoTitle}>お知らせタイトルタイトルタイトルタイトルタイトル</p>
            <Link to="/information" className={styles.infoLink}>
              Read more
              <FontAwesomeIcon icon={faAngleRight} className={styles.infoLinkIcon} />
            </Link>
          </div>
        </li>
        <li className={styles.infoList}>
          <img src={thumbnail} alt="" className={styles.infoThumbnail}></img>
          <div className={styles.infoWrap}>
            <p className={styles.infoDate}>
              <FontAwesomeIcon icon={faClock} className={styles.infoDateIcon} />
              2025-00-00
            </p>
            <p className={styles.infoTitle}>お知らせタイトルタイトルタイトルタイトルタイトル</p>
            <Link to="/information" className={styles.infoLink}>
              Read more
              <FontAwesomeIcon icon={faAngleRight} className={styles.infoLinkIcon} />
            </Link>
          </div>
        </li>
        <li className={styles.infoList}>
          <img src={thumbnail} alt="" className={styles.infoThumbnail}></img>
          <div className={styles.infoWrap}>
            <p className={styles.infoDate}>
              <FontAwesomeIcon icon={faClock} className={styles.infoDateIcon} />
              2025-00-00
            </p>
            <p className={styles.infoTitle}>お知らせタイトルタイトルタイトルタイトルタイトル</p>
            <Link to="/information" className={styles.infoLink}>
              Read more
              <FontAwesomeIcon icon={faAngleRight} className={styles.infoLinkIcon} />
            </Link>
          </div>
        </li>
        <li className={styles.infoList}>
          <img src={thumbnail} alt="" className={styles.infoThumbnail}></img>
          <div className={styles.infoWrap}>
            <p className={styles.infoDate}>
              <FontAwesomeIcon icon={faClock} className={styles.infoDateIcon} />
              2025-00-00
            </p>
            <p className={styles.infoTitle}>お知らせタイトルタイトルタイトルタイトルタイトル</p>
            <Link to="/information" className={styles.infoLink}>
              Read more
              <FontAwesomeIcon icon={faAngleRight} className={styles.infoLinkIcon} />
            </Link>
          </div>
        </li>
      </ul>
      <PrimaryBtn text="View more" />
    </React.Fragment>
  );
};

export default Information;

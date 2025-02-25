import React from "react";

/* components */
import { HeadLabel } from "components/utils.module";

/* link */
import { Link } from "react-router-dom";

/* css */
import styles from "css/information.module.css";

/* json */
import informationData from "json/information.json";

/* fontawesome */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";

/* image */
import thumbnail01 from "img/thumbnailInfo.jpg";

const Information = ({ informationPage = false }) => {
  let filteredInformation = [];

  if (informationPage === false) {
    for (let i = 0; i < 8; i++) {
      filteredInformation.push(informationData[i]);
    }
  } else {
    filteredInformation = informationData;
  }

  return (
    <React.Fragment>
      <style jsx="true" global="true">
        {`
          .informationLabel {
            background-color: #e2c049;
          }

          .blogLabel {
            background-color: #c95e2f;
          }
        `}
      </style>
      <HeadLabel title="information" />
      <ul className={styles.infoArea}>
        {filteredInformation.map((information) => (
          <li className={styles.infoList}>
            <span className={`${styles.infoCategory} ${information.category.className}`}>{information.category.text}</span>
            <img src={thumbnail01} alt={information.img.alt} className={styles.infoThumbnail}></img>
            <div className={styles.infoWrap}>
              <p className={styles.infoDate}>
                <FontAwesomeIcon icon={faClock} className={styles.infoDateIcon} />
                {information.date}
              </p>
              <p className={styles.infoTitle}>{information.title}</p>
              <Link to={information.url} className={styles.infoLink}>
                Read more
                <FontAwesomeIcon icon={faAngleRight} className={styles.infoLinkIcon} />
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default Information;

import React from "react";

/* components */
import { HeadLabel, SectionArea, PrimaryBtn, LinkPageTop } from "components/utils.module";
import Menu from "components/menu";
import Information from "components/information";
import Access from "components/access";
import Meta from "components/meta";

/* css */
import styles from "css/home.module.css";

/* link */
import { Link } from "react-router-dom";

/* image */
import mainVisual from "img/mainVisual.jpg";
import conceptImg from "img/conceptImg.jpg";

const Home = () => {
  return (
    <React.Fragment>
      <Meta pageTitle="" pageDesc="" />
      <div className={styles.mainVisual}>
        <p className={styles.mainVisual_text}>魅力引き出すサロン</p>
        <img src={mainVisual} alt="メインビジュアル" className={styles.mainVisual_image}></img>
      </div>
      <SectionArea>
        <HeadLabel title="Concept" />
        <div className={styles.concept}>
          <img src={conceptImg} alt="concept" className={styles.conceptImg}></img>
          <div className={styles.conceptTextArea}>
            <p className={styles.conceptText}>
              美容室チャイムは、最新の技術と心温まるサービスであなたの魅力を最大限に引き出します。
              <br />
              リラックスできる空間で、美しい髪と心地よい時間をお約束します。
              <br />
              ご来店を心よりお待ちしております。
            </p>
          </div>
        </div>
      </SectionArea>
      <SectionArea background>
        <HeadLabel title="menu" />
        <Menu />
        <Link to="/menu" onClick={LinkPageTop}>
          <PrimaryBtn text="View more" isBg />
        </Link>
      </SectionArea>
      <SectionArea>
        <HeadLabel title="information" />
        <Information />
        <Link to="/information" onClick={LinkPageTop}>
          <PrimaryBtn text="View more" />
        </Link>
      </SectionArea>
      <SectionArea>
        <Access />
      </SectionArea>
    </React.Fragment>
  );
};

export default Home;

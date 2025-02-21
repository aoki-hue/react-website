import React from "react";

/* components */
import { HeadLabel, SectionArea } from "components/utils.module";
import Menu from "components/menu";
import Information from "components/information";
import Access from "components/access";

/* css */
import styles from "css/home.module.css";

/* image */
import mainVisual from "img/mainVisual.jpg";
import conceptImg from "img/conceptImg.jpg";

const Home = () => {
  return (
    <React.Fragment>
      <div className={styles.mainVisual}>
        <p className={styles.mainVisual_text}>-いい感じのテキストが入る-</p>
        <img src={mainVisual} alt="メインビジュアル" className={styles.mainVisual_image}></img>
      </div>
      <SectionArea>
        <HeadLabel title="Concept" />
        <div className={styles.concept}>
          <img src={conceptImg} alt="concept" className={styles.conceptImg}></img>
          <div className={styles.conceptTextArea}>
            <p className={styles.conceptText}>
              お客様のトータルビューティーを極め、時代の一歩先をゆく提案をし続ける。
              <br />
              地域に根ざし、必要とされるサロン。
              <br />
              chimeは、心地よい時間を提供することでお客様の“本当の美”をプロデュースする企業です。
            </p>
          </div>
        </div>
      </SectionArea>
      <SectionArea background>
        <Menu />
      </SectionArea>
      <SectionArea>
        <Information />
      </SectionArea>
      <SectionArea>
        <Access />
      </SectionArea>
    </React.Fragment>
  );
};

export default Home;

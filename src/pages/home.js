import React from "react";

/* components */
import { HeadLabel, SectionArea } from "components/utils.module";
import Menu from "components/menu";
import Information from "components/information";

/* css */
import styles from "css/home.module.css";

/* image */
import mainVisual from "img/mainVisual.jpg";
import conceptImg from "img/conceptImg.jpg";
import storeImage1 from "img/storeImage1.jpg";

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
        <HeadLabel title="Access" />
        <div className={styles.accessArea}>
          <table className={styles.storeInfo}>
            <tbody>
              <tr className={styles.storeRow}>
                <th className={styles.storeItemLabel}>住所</th>
                <td className={styles.storeItem}>青森県上北郡七戸町堰根555-17</td>
              </tr>
              <tr className={styles.storeRow}>
                <th className={styles.storeItemLabel}>TEL</th>
                <td className={styles.storeItem}>0000-00-0000</td>
              </tr>
              <tr className={styles.storeRow}>
                <th className={styles.storeItemLabel}>営業時間</th>
                <td className={styles.storeItem}>
                  9:00～18:00<br></br>※カット最終受付17時 / カラー最終受付16:30
                </td>
              </tr>
              <tr className={styles.storeRow}>
                <th className={styles.storeItemLabel}>定休日</th>
                <td className={styles.storeItem}>毎週火曜日</td>
              </tr>
              <tr className={styles.storeRow}>
                <th className={styles.storeItemLabel}>駐車場</th>
                <td className={styles.storeItem}>無し</td>
              </tr>
            </tbody>
          </table>
          <img src={storeImage1} alt="店舗1"></img>
        </div>
      </SectionArea>
    </React.Fragment>
  );
};

export default Home;

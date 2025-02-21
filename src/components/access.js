import React from "react";

/* components */
import { HeadLabel } from "components/utils.module";

/* css */
import styles from "css/access.module.css";

/* img */
import storeImage1 from "img/storeImage1.jpg";

const Access = () => {
  return (
    <React.Fragment>
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
      {/* <iframe width="600" height="450" style="border:0" loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed/v1/place?key=API_KEY&q=Space+Needle,Seattle+WA"></iframe> */}
    </React.Fragment>
  );
};

export default Access;

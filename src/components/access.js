import React from "react";

/* components */
import { HeadLabel } from "components/utils.module";

/* swiper */
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

/* css */
import styles from "css/access.module.css";
import "swiper/css";

/* img */
import storeImage1 from "img/storeImage1.jpg";
import storeImage2 from "img/storeImage2.jpg";
import storeImage3 from "img/storeImage3.jpg";

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
        <Swiper className={styles.swiperWrap} modules={[Autoplay]} autoplay={{ delay: 5000, pauseOnMouseEnter: true, disableOnInteraction: false }} speed={2000} slidesPerView={1} loop={true}>
          <SwiperSlide>
            <img src={storeImage1} alt="店舗1" className={styles.storeImg}></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src={storeImage2} alt="店舗2" className={styles.storeImg}></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src={storeImage3} alt="店舗3" className={styles.storeImg}></img>
          </SwiperSlide>
        </Swiper>
      </div>
    </React.Fragment>
  );
};

export default Access;

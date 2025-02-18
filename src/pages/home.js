import React from "react";

/* components */
import { HeadLabel, Btn } from "components/utils.module";

/* css */
import styles from "css/home.module.css";

/* image */
import mainVisual from "img/mainVisual.jpg";

const Home = () => {
  return (
    <React.Fragment>
      <div className={styles.mainVisual}>
        <p className={styles.mainVisual_text}>-いい感じのテキストが入る-</p>
        <img src={mainVisual} alt="メインビジュアル" className={styles.mainVisual_image}></img>
      </div>
      <section>
        <HeadLabel />
        <Btn />
      </section>
    </React.Fragment>
  );
};

export default Home;

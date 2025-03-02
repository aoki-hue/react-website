import React from "react";
import { useState } from "react";

/* components */
import { SectionArea, HeadLabel, Checkbox } from "components/utils.module";
import Information from "components/information";
import Meta from "components/meta";

/* css */
import styles from "css/information.module.css";

const InformationPage = () => {
  const [checkedValue, setCheckedValue] = useState([]);

  const categoryChange = () => {
    let checkedArray = [];
    const checkboxes = document.getElementsByName("category");

    // checked状態の値をsetCheckedValueに格納
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        checkedArray.push(checkbox.value);
      }
    });
    setCheckedValue(checkedArray);
  };
  return (
    <React.Fragment>
      <Meta pageTitle="記事一覧" pageDesc="お得な情報を紹介します" />
      <SectionArea>
        <HeadLabel title="information" />
        <ul className={styles.checkListWrap}>
          <li className={styles.checkList}>
            <Checkbox id="information" name="category" value="お知らせ" onChange={categoryChange} />
          </li>
          <li className={styles.checkList}>
            <Checkbox id="blog" name="category" value="ブログ" onChange={categoryChange} />
          </li>
        </ul>
        <Information informationPage checkedValue={checkedValue} />
      </SectionArea>
    </React.Fragment>
  );
};

export default InformationPage;

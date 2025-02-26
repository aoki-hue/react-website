import { useState } from "react";

/* components */
import { SectionArea, Checkbox } from "components/utils.module";
import Information from "components/information";

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
    // console.log(checkedValue);
  };
  return (
    <SectionArea>
      <ul>
        <li>
          <Checkbox id="information" name="category" value="お知らせ" onChange={categoryChange} />
        </li>
        <li>
          <Checkbox id="blog" name="category" value="ブログ" onChange={categoryChange} />
        </li>
      </ul>
      <Information informationPage checkedValue={checkedValue} />
    </SectionArea>
  );
};

export default InformationPage;

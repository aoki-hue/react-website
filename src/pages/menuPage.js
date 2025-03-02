import React from "react";

/* components */
import { SectionArea, HeadLabel } from "components/utils.module";
import Menu from "components/menu";
import Meta from "components/meta";

const MenuPage = () => {
  return (
    <React.Fragment>
      <Meta pageTitle="メニュー" pageDesc="本店のメニュー一覧と金額です" />
      <SectionArea background>
        <HeadLabel title="menu" />
        <Menu menuPage />
      </SectionArea>
    </React.Fragment>
  );
};

export default MenuPage;

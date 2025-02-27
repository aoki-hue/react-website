/* components */
import { SectionArea, HeadLabel } from "components/utils.module";
import Menu from "components/menu";

const MenuPage = () => {
  return (
    <SectionArea background>
      <HeadLabel title="menu" />
      <Menu menuPage />
    </SectionArea>
  );
};

export default MenuPage;

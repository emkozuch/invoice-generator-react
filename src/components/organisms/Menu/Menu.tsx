import { MenuElement, MenuElementsProps } from "../../atoms/MenuElement";
import { useTranslation } from "react-i18next";
import { TKeys } from "../../../translations/Tkeys";
import styled from "styled-components";
import SettingsIcon from "@mui/icons-material/Settings";
import ReceiptIcon from "@mui/icons-material/Receipt";
import HomeIcon from "@mui/icons-material/Home";
import NoteAddIcon from "@mui/icons-material/NoteAdd";

export const Menu = () => {
  const { t } = useTranslation();

  const elements: MenuElementsProps[] = [
    { name: t(TKeys.MENU_ELEMENT_HOME), target: "/", icon: <HomeIcon /> },
    {
      name: t(TKeys.MENU_ELEMENT_INVOICES),
      target: "/invoices",
      icon: <ReceiptIcon />,
    },
    {
      name: t(TKeys.MENU_ELEMENT_SETTINGS),
      target: "/settings",
      icon: <SettingsIcon />,
    },
    {
      name: t(TKeys.MENU_ELEMENT_NEW_INVOICE),
      target: "/new-invoice",
      icon: <NoteAddIcon />,
    },
  ];

  return (
    <Wrapper>
      <LogoContainer>
        <h1>Invoice Generator</h1>
      </LogoContainer>
      {elements.map((el) => {
        return <MenuElement key={el.name} {...el} />;
      })}
    </Wrapper>
  );
};

const LogoContainer = styled.div`
  height: 100px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 200px;
  height: 100%;
  padding: 10px 0;
  box-shadow: 7px 3px 10px -8px rgba(66, 68, 90, 1);
`;

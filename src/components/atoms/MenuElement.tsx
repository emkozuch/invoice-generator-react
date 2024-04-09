import { NavLink } from "react-router-dom";
import styled from "styled-components";

export type MenuElementsProps = {
  target: string;
  name: string;
  icon: JSX.Element;
};

export const MenuElement = (props: MenuElementsProps) => {
  const { target, name, icon } = props;
  return (
    <StyledLink
      className={(isActive) => (isActive ? "active" : "")}
      to={target}
    >
      {icon}
      <NameContainer>{name}</NameContainer>
    </StyledLink>
  );
};

const NameContainer = styled.div`
  text-align: left;
`;

const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 30px;
  height: 40px;
  text-decoration: none;
  color: #212121;
  padding-left: 20px;
  border-radius: 7px;

  &&.active,
  &:hover {
    background-color: #212121;
    color: white;
  }
`;

import React from 'react';
import styled from 'styled-components';
import MenuWrap from './MenuWrap/MenuWrap';
import Category from './Category/Category';
import Aside from './Aside/Aside';

const Nav = () => {
  return (
    <NavContainer>
      <NavWrap>
        <MenuWrap />
        <Category />
        <Aside />
      </NavWrap>
    </NavContainer>
  );
};

export default Nav;

const NavContainer = styled.div`
  width: 100%;
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
`;

const NavWrap = styled.div`
  ${props => props.theme.flex('space-between', 'center')};
  max-width: 1060px;
  margin: ${props => props.theme.marginCenter};
`;

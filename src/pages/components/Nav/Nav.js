import React from 'react';
import styled from 'styled-components';
import MenuWrap from './MenuWrap/MenuWrap';
import Category from './Category/Category';

const Nav = () => {
  return (
    <NavContainer>
      <NavWrap>
        <MenuWrap />
        <Category />
        <Pictogram>
          <p>1</p>
          <p>2</p>
          <p>3</p>
        </Pictogram>
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
  ${props => props.theme.flex()};
  max-width: 1060px;
  margin: ${props => props.theme.marginCenter};
`;

const Pictogram = styled.div`
  display: flex;
`;

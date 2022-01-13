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
        <MediaQuery>
          <Category />
          <Aside />
        </MediaQuery>
      </NavWrap>
    </NavContainer>
  );
};

export default Nav;

const NavContainer = styled.div`
  width: 100%;
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);

  @media screen and (max-width: 1065px) {
    width: 100%;
    height: 100px;
    margin: 0 auto;
    padding: 25px;
  }
`;

const NavWrap = styled.div`
  ${props => props.theme.flex('space-between', 'center')};
  max-width: 1060px;
  margin: ${props => props.theme.marginCenter};

  @media screen and (max-width: 1065px) {
    ${props => props.theme.flex('space-between', 'flex-start', 'column')};
  }
`;

const MediaQuery = styled.div`
  ${props => props.theme.flex('space-between', 'center')};

  @media screen and (max-width: 1065px) {
    width: 100%;
    margin-top: 5px;
    ${props => props.theme.flex('space-between', 'center')};
  }
`;

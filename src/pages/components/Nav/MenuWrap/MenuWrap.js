import React from 'react';
import styled from 'styled-components';

const MenuWrap = () => {
  return (
    <LogoWrap>
      <Menu />
      <Logo />
    </LogoWrap>
  );
};

export default MenuWrap;

const LogoWrap = styled.div``;

const Menu = styled.img.attrs({
  src: 'https://static.wanted.co.kr/images/icon-menu.png',
  alt: 'logo',
})`
  width: 17px;
  height: 14px;
  margin-right: 1rem;
  object-fit: contain;
`;

const Logo = styled.img.attrs({
  src: 'https://theme.zdassets.com/theme_assets/9309779/480a35976bf401a88dd7388d8f5c19d77227cd35.png',
  alt: 'logo',
})`
  width: 70px;
`;

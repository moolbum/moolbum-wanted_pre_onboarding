import React from 'react';
import styled from 'styled-components';

import { AiOutlineSearch } from 'react-icons/ai';
import { VscBell } from 'react-icons/vsc';

const Aside = () => {
  return (
    <AsideWrap>
      <Search />

      <IconWrap>
        <Bell />
        <NewBox>
          <NewText>N</NewText>
        </NewBox>
      </IconWrap>

      <IconWrap>
        <ProfileWrap />
        <NewBox>
          <NewTextProfile>N</NewTextProfile>
        </NewBox>
      </IconWrap>

      <GrayLine />
      <Button>기업 서비스</Button>
    </AsideWrap>
  );
};

export default Aside;

const AsideWrap = styled.div`
  ${props => props.theme.flex('center', 'center')};
`;

const Search = styled(AiOutlineSearch)`
  font-size: 1.2rem;
  margin-right: 1rem;
`;

const Bell = styled(VscBell)`
  font-size: 1.2rem;
  margin-right: 1rem;
`;

const IconWrap = styled.div`
  display: flex;
`;

const NewBox = styled.div`
  position: relative;
`;

const NewText = styled.span`
  position: absolute;
  top: -6px;
  right: 3px;
  width: 13px;
  height: 13px;
  line-height: 15px;
  border-radius: 3px;
  background: #3366ff;
  color: #fff;
  font-weight: 800;
  font-size: 5px;
  text-align: center;
`;

const NewTextProfile = styled(NewText)`
  top: -1px;
  right: -6px;
`;

const ProfileWrap = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  background-image: url('https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FICYov%2FbtqN8eRDiul%2FpgGiFzGEcGm53FKxtjlnl0%2Fimg.png');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

const GrayLine = styled.div`
  margin: 0 1.2rem;
  padding: 0.4rem 0;
  border-left: 1px solid ${props => props.theme.gray};
`;

const Button = styled.button`
  padding: 0.4rem 0.8rem;
  border-radius: 50px;
  border: 1px solid ${props => props.theme.mediumGray};
  color: ${props => props.theme.darkGray};
  font-size: ${props => props.theme.fontSmall};
  font-weight: ${props => props.theme.weightRegular};
`;

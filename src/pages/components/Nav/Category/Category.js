import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CATEGORY_LIST } from './CategoryData';

const Category = () => {
  return (
    <CategoryContainer>
      <CategoryWrap>
        {CATEGORY_LIST.map(data => {
          return (
            <List key={data.id}>
              <ListLink to={data.link}>{data.text}</ListLink>
              <BlueTextWrap>
                <BlueText>{data.blueText}</BlueText>
              </BlueTextWrap>
            </List>
          );
        })}
      </CategoryWrap>
    </CategoryContainer>
  );
};

export default Category;

const CategoryContainer = styled.div`
  width: 100%;
`;

const CategoryWrap = styled.ul`
  display: flex;
`;

const List = styled.li`
  padding: 1.1rem;
  font-size: ${props => props.theme.fontRegular};
  font-weight: 600;
`;

const ListLink = styled(Link)`
  color: ${props => props.theme.black};
`;

const BlueTextWrap = styled.div`
  position: relative;
  right: -103%;
`;

const BlueText = styled.span`
  position: absolute;
  bottom: 10px;
  color: #3366ff;
  font-weight: 400;
  font-size: 9px;
`;
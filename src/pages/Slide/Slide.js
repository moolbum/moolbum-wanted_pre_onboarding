import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { SLIDE_CARD_DATA } from './SlideCardData';

const Slide = () => {
  const IMAGE = 1084;
  const IMAGE_SMALL = 1030;
  const slideRef = useRef();
  const [index, setIndex] = useState(0);

  const prevIsCardHandler = () => {
    if (index === 0) {
      return;
    }
    if (slideRef.current.scrollWidth === 8500) {
      setIndex(prev => prev - 1);
      slideRef.current.style.transform = `translateX(-${
        IMAGE_SMALL * (index - 1)
      }px)`;
    } else {
      setIndex(prev => prev - 1);
      slideRef.current.style.transform = `translateX(-${
        IMAGE * (index - 1)
      }px)`;
    }
  };

  const nextIsCardHandler = () => {
    if (SLIDE_CARD_DATA.length - 1 === index) {
      return;
    }
    if (slideRef.current.scrollWidth === 8500) {
      setIndex(prev => prev + 1);
      slideRef.current.style.transform = `translateX(-${
        IMAGE_SMALL * (index + 1)
      }px)`;
    } else {
      setIndex(prev => prev + 1);
      slideRef.current.style.transform = `translateX(-${
        IMAGE * (index + 1)
      }px)`;
    }
  };

  return (
    <>
      <SlideContainer>
        <CardWrap ref={slideRef}>
          {SLIDE_CARD_DATA.map(data => {
            return (
              <Card
                key={data.id}
                style={{ backgroundImage: `url(${data.src})` }}
              />
            );
          })}
        </CardWrap>
      </SlideContainer>

      <ArrowContainer>
        <ArrowWrap>
          <PrevArrow onClick={prevIsCardHandler} />
        </ArrowWrap>
        <ArrowWrap>
          <NextArrow onClick={nextIsCardHandler} />
        </ArrowWrap>
      </ArrowContainer>
    </>
  );
};

export default Slide;

const SlideContainer = styled.div`
  position: relative;
  margin-top: 24px;
  overflow: hidden;
`;

const CardWrap = styled.div`
  position: relative;
  left: 12%;
  display: flex;
  width: 8680px;
  transition: 0.5s;

  @media screen and (max-width: 1065px) {
    left: 0;
    width: 8500px;
  }
`;

const Card = styled.div`
  width: 100%;
  max-width: 1060px;
  height: 300px;
  margin: 0 12px;
  border-radius: 7px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  @media screen and (max-width: 1065px) {
    width: 80%;
    max-width: 1030px;
    margin: 0;
  }
`;

const ArrowContainer = styled.div`
  position: relative;
  top: -180px;
  ${props => props.theme.flex('space-between', 'center')};
  margin: ${props => props.theme.marginCenter};
  max-width: 1150px;
`;

const ArrowWrap = styled.div`
  ${props => props.theme.flex('center', 'center')};
  width: 30px;
  height: 50px;
  border-radius: 25px;
  background: ${props => props.theme.lightGray};
  opacity: 0.8;
  cursor: pointer;
`;

const PrevArrow = styled(IoIosArrowBack)`
  color: ${props => props.theme.gray};
  font-size: 20px;
`;

const NextArrow = styled(IoIosArrowForward)`
  color: ${props => props.theme.gray};
  font-size: 20px;
`;

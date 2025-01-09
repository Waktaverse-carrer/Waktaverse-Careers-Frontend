import React from 'react';
import styled from 'styled-components';
import CounterAnimation from './CountAnimation';
import Image from 'next/image';
import ImageScrollList from './ImageScrollList';

const Section = styled.div`
  width: 100%;
  min-width: 2220px;
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #3a3a3c;
  padding: 0 2rem;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 10rem;
`;

const Carousel = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: fit-content;
  gap: 2rem;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const TextContainer = styled.div`
  flex: 1;
  color: #ffffff;
  text-align: right;
`;

const Highlight = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #32b9a2;
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-top: 1rem;
  color: #ffffff;
`;

const dummyList = [
  {
    id: 1,
    title: 'Template 1',
    src: '/images/landing_section3_img1.png',
    width: 320,
    height: 640,
  },
  {
    id: 2,
    title: 'Template 2',
    src: '/images/landing_section3_img2.png',
    width: 320,
    height: 640,
  },
  {
    id: 3,
    title: 'Template 3',
    src: '/images/landing_section3_img3.png',
    width: 320,
    height: 640,
  },
  {
    id: 4,
    title: 'Template 1',
    src: '/images/landing_section3_img1.png',
    width: 320,
    height: 640,
  },
  {
    id: 5,
    title: 'Template 2',
    src: '/images/landing_section3_img2.png',
    width: 320,
    height: 640,
  },
  {
    id: 6,
    title: 'Template 3',
    src: '/images/landing_section3_img3.png',
    width: 320,
    height: 640,
  },
];

export default function ThirdSection() {
  return (
    <Section>
      <Content>
        <ImageScrollList>
          <Carousel>
            {dummyList.map((item) => (
              <ImageWrapper key={item.id}>
                <Image
                  src={item.src}
                  alt={item.title}
                  width={item.width}
                  height={item.height}
                  priority
                />
              </ImageWrapper>
            ))}
          </Carousel>
        </ImageScrollList>
        <TextContainer>
          <Highlight>
            <CounterAnimation value={999} />+
          </Highlight>
          <Subtitle>다양한 제작 템플릿 제공</Subtitle>
        </TextContainer>
      </Content>
    </Section>
  );
}

'use client';

import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import CounterAnimation from './CountAnimation';
import { motion, animate } from 'framer-motion';

const Section = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #3a3a3c;
  padding: 0 2rem;
`;

const IconsContainer = styled.div`
  position: relative;
  display: flex;
  width: 80%;
  height: 20vh;
  margin-bottom: 2rem;
  flex-wrap: nowrap;
  overflow: hidden;
`;

const LeftWall = styled.div`
  position: absolute;
  left: 0;
  z-index: 1;
`;

const RightWall = styled.div`
  position: absolute;
  right: -10px;
`;

const Slider = styled(motion.div)`
  display: flex;
  gap: 2vw;
  flex-wrap: nowrap;
`;

const IconWrapper = styled.div`
  width: 10em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ResponsiveImage = styled.img`
  height: 60%;
`;

const TextContainer = styled.div`
  width: 16%;
  text-align: center;
  color: #ffffff;
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
  color: #ffffff; /* 흰색 */
`;

const images = [
  '/images/every_wakgood.png',
  '/images/chim_planet.png',
  '/images/album_logo.png',
  '/images/waktaverse_music.png',
  '/images/isegye_festival.png',
  '/images/waktaverse_careers.png',
  '/images/isegye_chart.png',
  '/images/stone_origin.png',
  '/images/waksplorer.png',
  '/images/wakpaper_logo.png',
  '/images/isegye_pip.png',
  '/images/wakscord.png',
];

export default function FourthSection() {
  return (
    <Section>
      <IconsContainer>
        <LeftWall>
          <Image src='/images/left_shadow.png' alt='leftShadow' width={50} height={400} />
        </LeftWall>
        <Slider
          animate={{ x: ['-50%', '0.6%'] }}
          transition={{
            duration: 15,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          {[...images, ...images].map((src, index) => (
            <IconWrapper key={index}>
              <ResponsiveImage src={src} alt={`Logo ${index}`} />
            </IconWrapper>
          ))}
        </Slider>
        <RightWall>
          <Image src='/images/right_shadow.png' alt='leftShadow' width={50} height={400} />
        </RightWall>
      </IconsContainer>
      <TextContainer>
        <Highlight>
          <CounterAnimation value={999} />+
        </Highlight>
        <Subtitle>다양한 프로젝트를 한 눈에!</Subtitle>
      </TextContainer>
    </Section>
  );
}

import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import arrowForward from '../../../../public/arrow_forward.svg';
import Link from 'next/link';

const Section = styled.div`
  position: relative;
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #2c2c2e;
  padding: 0 10rem;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  color: #ffffff;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin: 0;
`;

const AnimationBox = styled(motion.div)`
  display: inline;
  background-image: linear-gradient(to right, #00000000 50%, #42d2b9 50%);
  background-size: 200% 200%;
  margin: 0;
  transform-origin: left;
`;

const AnimationTitle = styled(motion.h1)`
  display: inline;
  font-size: 3rem;
  background-image: linear-gradient(to right, #ffffff 50%, #42d2b9 50%);
  background-size: 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transform-origin: left;
`;

const CTA = styled.div`
  position: relative;
  top: 8rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const LinkArea = styled(Link)`
  text-decoration: none;
`;

const ImageContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-end;
`;

const DesktopImage = styled.div`
  position: absolute;
  right: 12vw;
  bottom: 0;
  flex: 1;

  & img {
    width: 44vw;
  }
`;

const MobileImage = styled.div`
  position: absolute;
  right: 4vw;
  bottom: 0;
  flex: 1;

  & img {
    width: 28vw;
  }
`;

export default function FirstSection() {
  return (
    <Section>
      <Content>
        <TextContainer>
          <div>
            <Title>슬기로운 왁타버스 작업계 생활!</Title>
            <Title>
              <AnimationBox
                animate={{
                  backgroundPosition: [
                    '200% 200%',
                    '200% 200%',
                    '200% 200%',
                    '100% 100%',
                    '100% 100%',
                    '100% 100%',
                    '0% 0%',
                    '0% 0%',
                    '0% 0%',
                  ],
                }}
                transition={{
                  duration: 3,
                }}
              >
                <AnimationTitle
                  animate={{
                    backgroundPosition: [
                      '200% 200%',
                      '200% 200%',
                      '200% 200%',
                      '200% 200%',
                      '200% 200%',
                      '200% 200%',
                      '100% 100%',
                      '100% 100%',
                      '100% 100%',
                    ],
                  }}
                  transition={{
                    duration: 3,
                  }}
                >
                  왁타버스 커리어즈
                </AnimationTitle>
              </AnimationBox>
              와 함께
            </Title>
          </div>
          <CTA>
            <LinkArea href={'./landing'} passHref={true}>
              시작하기 <Image src={arrowForward} alt='next' width={9} />
            </LinkArea>
          </CTA>
        </TextContainer>
        <ImageContainer>
          <DesktopImage>
            <img src='/images/landing_section1_web.png' alt='Desktop Screenshot' />
          </DesktopImage>
          <MobileImage>
            <img src='/images/landing_section1_mobile.png' alt='Mobile Screenshot' />
          </MobileImage>
        </ImageContainer>
      </Content>
    </Section>
  );
}

import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import arrowForward from '../../../../public/arrow_forward.svg';
import Link from 'next/link';

const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-width: 2220px;
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #2c2c2e;
  padding: 0 5rem;
`;

const Content = styled.div`
  position: relative;
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
`;

const Footer = styled.div`
  flex: 1;
  width: 100vw;
  height: 100%;
  background-color: #3a3a3c;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  color: #ffffff;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin: 0;
  white-space: nowrap;
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
  right: 5.5vw;
  bottom: 0;
  flex: 1;
`;

const MobileImage = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  flex: 1;
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
            <LinkArea href={'./store'} passHref={true}>
              시작하기 <Image src={arrowForward} alt='next' width={9} />
            </LinkArea>
          </CTA>
        </TextContainer>
        <ImageContainer>
          <DesktopImage>
            <Image
              src='/images/landing_section1_web.png'
              alt='Desktop Screenshot'
              width={751}
              height={653}
            />
          </DesktopImage>
          <MobileImage>
            <Image
              src='/images/landing_section1_mobile.png'
              alt='Mobile Screenshot'
              width={569}
              height={488}
            />
          </MobileImage>
        </ImageContainer>
      </Content>
      <Footer />
    </Section>
  );
}

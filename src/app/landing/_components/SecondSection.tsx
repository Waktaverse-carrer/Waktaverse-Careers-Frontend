import React from 'react';
import styled from 'styled-components';

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
  max-width: 1200px;
  width: 100%;
  height: 100%;
`;

const LogoContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
`;

const ResponsiveImage = styled.img`
  width: 631px;
`;

const TextContainer = styled.div`
  flex: 1;
  color: #ffffff;
  text-align: right;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #32b9a2;
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-top: 1rem;
  color: #ffffff;
`;

export default function SecondSection() {
  return (
    <Section>
      <Content>
        <LogoContainer>
          <ResponsiveImage src='/images/landing_section2_logo.png' alt='logo' />
        </LogoContainer>
        <TextContainer>
          <Title>왁타버스 전용</Title>
          <Subtitle>포트폴리오 서비스</Subtitle>
        </TextContainer>
      </Content>
    </Section>
  );
}

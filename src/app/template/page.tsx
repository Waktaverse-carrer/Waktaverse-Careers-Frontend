'use client';

import Image from 'next/image';
import styled from 'styled-components';
import Layout from './_components/Layout';
import Button from './_components/Button';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  min-width: 1024px;
`;

const TitleLine = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
`;

const Title = styled.div`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 4px;
`;

const ProfileLine = styled.div`
  display: flex;
  gap: 10px;
`;

const ProfileText = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const User = styled.div`
  display: flex;
  align-items: flex-end;
  font-size: 22px;
  font-weight: bold;
`;

const CreatedAt = styled.div`
  font-size: 14px;
  color: #7e7e7e;
  font-weight: bold;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Article = styled.article`
  display: flex;
  gap: 40px;
`;

const Container = styled.div`
  flex: 2;
  height: 60vh;
  background-color: #f0f0f0;
  border-radius: 10px;
`;

const Description = styled.div`
  flex: 1;
`;

const View = styled.div`
  font-size: 16px;
  color: #868686;
  font-weight: bold;
  margin-bottom: 30px;
`;

const DescriptionTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const DescriptionContent = styled.div`
  font-size: 18px;
  margin-bottom: 32px;
`;

export default function Home() {
  return (
    <Layout>
      <Content>
        <TitleLine>
          <div>
            <Title>제목</Title>
            <ProfileLine>
              <Image src='/images/default_profile.png' alt='프로필' width={40} height={40} />
              <ProfileText>
                <User>애기뺑띠</User> <CreatedAt>2024.11.06등록</CreatedAt>
              </ProfileText>
            </ProfileLine>
          </div>
          <Buttons>
            <Button>사용하기</Button>
            <Button>찜하기</Button>
          </Buttons>
        </TitleLine>
        <Article>
          <Container>컨테이너</Container>
          <Description>
            <View>9,999조회 99찜</View>
            <DescriptionTitle>템플릿 설명</DescriptionTitle>
            <DescriptionContent>
              모시깽이모시깽이모시깽이모시깽이모시깽이모시깽이모시깽이모시깽이모시깽이모시깽이모시깽이모시깽이모시깽이모시깽이모시깽이모시깽이모시깽이
            </DescriptionContent>
            <div>태그's</div>
          </Description>
        </Article>
      </Content>
    </Layout>
  );
}

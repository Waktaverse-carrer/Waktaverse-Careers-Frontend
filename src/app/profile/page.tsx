'use client';

import Layout from './_components/Layout';
import Profile from './_components/Profile';
import Portfolio from './_components/Portfolio';
import MyTemplate from './_components/MyTemplate';
import LikedTemplate from './_components/LikedTemplate';
import LikedUser from './_components/LikedUser';

import styled from 'styled-components';

const Home = () => {
  // 자신 일때와 다른 사람일때를 구분해야함
  return (
    <Layout>
      <Profile />
      <ProfileContent>
        <Portfolio />
        <MyTemplate />
        <LikedTemplate />
        <LikedUser />
      </ProfileContent>
    </Layout>
  );
};

const ProfileContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 74px;
`;

export default Home;

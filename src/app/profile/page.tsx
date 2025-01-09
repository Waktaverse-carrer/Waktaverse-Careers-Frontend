"use client";

import Layout from "./_components/Layout";

import styled from "styled-components";

const Home = () => {
  // 자신 일때와 다른 사람일때를 구분해야함
  return (
    <Layout>
      <ProfileContainer></ProfileContainer>
    </Layout>
  );
};

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PortfolioContainer = styled.div``;

const MyTemplateContainer = styled.div``;

const LikedTemplateContainer = styled.div``;

const LikedUserContainer = styled.div``;

export default Home;

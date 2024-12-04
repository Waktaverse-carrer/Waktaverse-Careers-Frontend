'use client';

import Layout from './_components/Layout';
import { List } from './_components/List';
import { MainBanner } from './_components/MainBanner';
import { SmallBanner } from './_components/SmallBanner';

const Main = () => {
  return (
    <Layout>
      <SmallBanner />
      <MainBanner />
      <List title={'새로 나온 따끈따끈한 템플릿'} />
      <List title={'인기 템플릿'} />
      <List title={'전체 템플릿'} />
    </Layout>
  );
};

export default Main;

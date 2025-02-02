'use client';

import { useState } from 'react';

import SearchPanel from './_components/SearchPanel';
import Layout from './_components/Layout';

import styled from 'styled-components';

const Home = () => {
  const [search, setSearch] = useState<string>('');
  const [tags, setTags] = useState<string[]>(['일러스트', '크레딧', '비챤']);
  const [activeTags, setActiveTags] = useState<string[]>([
    '일러스트',
    '크레딧',
    '비챤',
  ]);

  return (
    <Layout>
      <StoreTitle>
        <div className='text'>템플릿</div>
        <img src='images/main-banner-1.png' alt='main-banner' />
      </StoreTitle>
      <StoreContent>
        <SearchPanel
          {...{ search, setSearch, tags, setTags, activeTags, setActiveTags }}
        />
      </StoreContent>
    </Layout>
  );
};

const StoreTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;

  width: 100%;
  gap: 30px;

  .text {
    font-size: 50px;
    font-weight: 600;
  }
`;

const StoreContent = styled.div`
  width: 100%;
`;

export default Home;

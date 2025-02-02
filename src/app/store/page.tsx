'use client';

import { useState } from 'react';

import Layout from './_components/Layout';
import SearchPanel from './_components/SearchPanel';
import TemplateStore from './_components/TemplateStore';

import styled from 'styled-components';

interface TemplateType {
  title: string;
  tags: string[];
}

const initialTemplateList = () => {
  const templateList: TemplateType[] = [];
  for (let i = 0; i < 60; i++) {
    templateList.push({
      title: `템플릿 ${i}`,
      tags: ['일러스트', '크레딧', '비챤'],
    });
  }
  return templateList;
};

const Home = () => {
  const [search, setSearch] = useState<string>('');
  const [tags, setTags] = useState<string[]>(['일러스트', '크레딧', '비챤']);
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [templateList, setTemplateList] = useState<TemplateType[]>(
    initialTemplateList()
  );

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
        <TemplateStore {...{ templateList }} />
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

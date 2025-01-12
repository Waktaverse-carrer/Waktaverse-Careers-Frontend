'use client';

import styled from 'styled-components';
import ProjectList from './_components/ProjectList';
import WorkerList from './_components/WorkerList';
import TemplateList from './_components/TemplateList';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 54px;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 14px;
`;

const projectDummy = [
  {
    id: 1,
    name: '에브리왁굳',
    image: '/images/every_wakgood.png',
  },
  {
    id: 2,
    name: '왁타버스커리어즈',
    image: '/images/waktaverse_careers.png',
  },
  {
    id: 3,
    name: '왁타버스뮤직',
    image: '/images/waktaverse_music.png',
  },
  {
    id: 4,
    name: '침플래닛',
    image: '/images/chim_planet.png',
  },
];

const workerDummy = [
  {
    id: 1,
    name: '애기뺑띠',
    image: '/images/defaultProfile.png',
  },
  {
    id: 2,
    name: '애기뺑띠',
    image: '/images/defaultProfile.png',
  },
  {
    id: 3,
    name: '애기뺑띠',
    image: '/images/defaultProfile.png',
  },
];

const templateDummy = [
  {
    id: 1,
    title: '나는 탬플릿이다1',
    tags: ['아이네', '징버거'],
  },
  {
    id: 2,
    title: '나는 탬플릿이다2',
    tags: ['릴파', '주르르'],
  },
  {
    id: 3,
    title: '나는 탬플릿이다3',
    tags: ['고세구', '비챤'],
  },
];

export default function Home({
  searchParams,
}: {
  searchParams: { search?: string };
}) {
  return (
    <PageWrapper>
      <div>
        <Title>프로젝트 검색결과</Title>
        <ProjectList projects={projectDummy} />
      </div>
      <div>
        <Title>작업자 검색결과</Title>
        <WorkerList workers={workerDummy} />
      </div>
      <div>
        <Title>탬플릿 검색결과</Title>
        <TemplateList templates={templateDummy} />
      </div>
    </PageWrapper>
  );
}

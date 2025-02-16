import { useState } from 'react';

import styled from 'styled-components';

interface TemplateType {
  title: string;
  tags: string[];
}

interface Props {
  templateList: TemplateType[];
}

const TemplateStore = ({ templateList }: Props) => {
  const [curPage, setCurPage] = useState(1);
  const pageList = [1, 2, 3, 4, 5];
  const PAGE_SIZE = 12;
  const MAX_PAGE = Math.floor(templateList.length / PAGE_SIZE);

  const handleChangePage = (page: number) => {
    const startIdx = (page - 1) * PAGE_SIZE;
    const endIdx = page * PAGE_SIZE;
    return templateList.slice(startIdx, endIdx);
  };

  const [curPageTemplateList, setCurPageTemplateList] = useState<
    TemplateType[]
  >(handleChangePage(curPage));

  const handlePageChange = (page: number) => {
    if (page < 1 || page >= MAX_PAGE) return;
    setCurPage(page);

    const newPage = handleChangePage(page);
    setCurPageTemplateList(newPage);
  };

  return (
    <TemplateStoreContainer>
      <TemplateStoreGrid>
        {curPageTemplateList.map((item: TemplateType, idx: number) => (
          <Template key={idx + item.title}>
            <div className='image'></div>
            <div className='content'>
              <div>{item.title}</div>
              <div className='tags'>
                {item.tags.map((tag, idx) => (
                  <div key={idx + tag}>{tag}</div>
                ))}
              </div>
            </div>
          </Template>
        ))}
      </TemplateStoreGrid>

      <PaginationContainer>
        <div onClick={() => handlePageChange(curPage - 1)}>{'<'}</div>
        {/* 5개 단위로 나뉘게 */}

        {pageList.map((page) => {
          const pageWeight = Math.floor((curPage - 1) / 5);
          return (
            <div
              key={page}
              className={
                curPage === page + pageWeight * 5 ? 'select-page' : 'page'
              }
              onClick={() => handlePageChange(page + pageWeight * 5)}
            >
              {page + pageWeight * 5}
            </div>
          );
        })}

        <div onClick={() => handlePageChange(curPage + 1)}>{'>'}</div>
      </PaginationContainer>
    </TemplateStoreContainer>
  );
};

const TemplateStoreContainer = styled.div`
  width: 100%;
`;

const TemplateStoreGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(265px, 1fr));
  grid-auto-rows: minmax(265px, auto);
  gap: 30px;
`;

const Template = styled.div`
  display: flex;
  flex-direction: column;

  gap: 11px;

  .image {
    width: 100%;
    height: 170px;
    background-color: #d9d9d9;
    border-radius: 10px;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 6px;

    font-size: 16px;
    font-weight: 600;

    .tags {
      display: flex;
      gap: 5px;

      > div {
        display: flex;
        align-items: center;
        padding: 4px 9.5px;
        background-color: green;
        border-radius: 5px;
      }
    }
  }
`;

const PaginationContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  gap: 35px;

  font-size: 25px;
  font-weight: 800;

  > * {
    cursor: pointer;
  }

  .page:hover {
    color: #32b9a2;
  }

  .select-page {
    color: #32b9a2;
  }
`;

export default TemplateStore;

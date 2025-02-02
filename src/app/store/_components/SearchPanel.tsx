import { useState } from 'react';
import styled from 'styled-components';

interface Props {
  search: string;
  setSearch: (search: string) => void;
  tags: string[];
  setTags: (tags: string[]) => void;
}

const SearchPanel = ({ search, setSearch, tags, setTags }: Props) => {
  const [isAddTag, setIsAddTag] = useState<boolean>(false);
  const [newTag, setNewTag] = useState<string>('');

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleChangeNewTag = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTag(e.target.value);
  };

  return (
    <SearchPanelContainer>
      <Search>
        <input
          placeholder='검색'
          value={search}
          onChange={handleChangeSearch}
        />
        <div>↑</div>
        <div>정렬</div>
        <img src='search.svg' alt='search' />
      </Search>
      <Tag>
        <TagList>
          <div className='content'>
            {!isAddTag ? (
              <div className='tags'>
                {tags.map((item, idx) => (
                  <div key={idx + item} className='tag'>
                    {item}
                  </div>
                ))}
              </div>
            ) : (
              <input
                placeholder='태그 입력하기'
                value={newTag}
                onChange={handleChangeNewTag}
              />
            )}
          </div>
          <button type='button' onClick={() => setIsAddTag((prev) => !prev)}>
            {!isAddTag ? '+ 태그 추가하기' : '+'}
          </button>
        </TagList>
        <ActiveTag>활성 태그</ActiveTag>
      </Tag>
    </SearchPanelContainer>
  );
};

const SearchPanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  gap: 24px;
  padding: 24px 0 0 0;
`;

const Search = styled.div`
  display: flex;
  position: relative;
  height: 53px;
  width: 100%;
  gap: 18px;

  input {
    width: 100%;
    border: none;
    padding-left: 50px;
  }

  > * {
    cursor: pointer;

    background-color: var(--color-grey-50);
    color: var(--color-grey-600);
    border-radius: 10px;
  }

  > div {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 53px;
    height: 53px;
  }

  img {
    position: absolute;
    left: 25px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const Tag = styled.div`
  display: flex;
  flex-direction: column;

  height: 80px;
  width: 100%;
  gap: 18px;
`;

const TagList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  gap: 18px;

  * {
    font-weight: 600;
  }

  > * {
    height: 100%;
  }

  .content {
    flex: 1;

    .tags {
      display: flex;
      gap: 14px;
      height: 100%;

      > div {
        display: flex;
        align-items: center;
        padding: 6px 12px;
        border-radius: 8px;
        font-size: 16px;

        background-color: var(--color-grey-50);
        color: var(--color-grey-600);

        cursor: pointer;
      }
    }

    input {
      height: 100%;
      width: 100%;
      border: none;
      padding-left: 18px;
      border-radius: 10px;

      background-color: var(--color-grey-50);
      color: var(--color-grey-600);
    }
  }

  button {
    cursor: pointer;
    min-width: 40px;
    max-width: 128px;

    padding: 7px 12px;

    border-radius: 10px;
    font-size: 14px;

    background-color: var(--color-grey-50);
    color: var(--color-grey-600);
  }
`;

const ActiveTag = styled.div`
  height: 31px;
`;

export default SearchPanel;

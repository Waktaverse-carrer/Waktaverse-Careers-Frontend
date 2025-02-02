import { useState } from 'react';
import styled from 'styled-components';

interface Props {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  tags: string[];
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
  activeTags: string[];
  setActiveTags: React.Dispatch<React.SetStateAction<string[]>>;
}

const SearchPanel = ({
  search,
  setSearch,
  tags,
  setTags,
  activeTags,
  setActiveTags,
}: Props) => {
  const [isTagOpen, setIsTagOpen] = useState<boolean>(true);
  const [isAddTag, setIsAddTag] = useState<boolean>(false);
  const [newTag, setNewTag] = useState<string>('');

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleChangeNewTag = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTag(e.target.value);
  };

  const handleKeyDownNewTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (!newTag) return;
      setTags((prev) => [...prev, newTag]);
      setNewTag('');
    }
  };

  const handleContextMenuNewTag = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (!newTag) return;
    setTags((prev) => [...prev, newTag]);
    setNewTag('');
  };

  const handleClickToggle = () => {
    setNewTag('');
    setIsAddTag((prev) => !prev);
  };

  const remoteActiveTag = (index: number) => {
    const newActiveTags = activeTags.filter((_, idx) => idx !== index);
    setActiveTags(newActiveTags);
  };

  return (
    <SearchPanelContainer>
      <Search>
        <input
          placeholder='검색'
          value={search}
          onChange={handleChangeSearch}
        />
        <div onClick={() => setIsTagOpen((prev) => !prev)}>태그 열기</div>
        <div>정렬</div>
        <img src='search.svg' alt='search' />
      </Search>
      {isTagOpen && (
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
                  onKeyDown={handleKeyDownNewTag}
                  onContextMenu={handleContextMenuNewTag}
                />
              )}
            </div>
            <button type='button' onClick={handleClickToggle}>
              {!isAddTag ? '+ 태그 추가하기' : '+'}
            </button>
          </TagList>
          <ActiveTags>
            {activeTags.map((item, idx) => (
              <div key={idx + item}>
                {item}
                <img
                  src='cross.svg'
                  alt='close'
                  onClick={() => remoteActiveTag(idx)}
                />
              </div>
            ))}
          </ActiveTags>
        </Tag>
      )}
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

  > * {
    cursor: pointer;

    background-color: var(--color-grey-50);
    color: var(--color-grey-600);
    border-radius: 10px;
  }

  input {
    flex: 1;
    border: none;
    padding-left: 50px;
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

const ActiveTags = styled.div`
  display: flex;
  height: 31px;

  gap: 14px;

  > div {
    display: flex;
    align-items: center;
    gap: 8px;

    background-color: #7832b9;
    color: #ffffff;
    padding: 6px 12px;
    border-radius: 8px;
  }

  img {
    cursor: pointer;
  }
`;

export default SearchPanel;

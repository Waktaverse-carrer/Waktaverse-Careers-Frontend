import styled from 'styled-components';

interface Props {
  search: string;
  setSearch: (search: string) => void;
  tags: string[];
  setTags: (tags: string[]) => void;
}

const SearchPanel = ({ search, setSearch, tags, setTags }: Props) => {
  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
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

export default SearchPanel;

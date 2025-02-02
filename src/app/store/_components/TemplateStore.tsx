import styled from 'styled-components';

interface TemplateType {
  title: string;
  tags: string[];
}

interface Props {
  templateList: TemplateType[];
}

const TemplateStore = ({ templateList }: Props) => {
  return (
    <TemplateStoreContainer>
      {templateList.map((item: TemplateType, idx: number) => (
        <Template>
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
    </TemplateStoreContainer>
  );
};

const TemplateStoreContainer = styled.div`
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

export default TemplateStore;

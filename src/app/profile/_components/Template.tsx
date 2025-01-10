import styled from "styled-components";

interface Props {
  src: string;
  title: string;
  recentEdit: string;
}

const Template = ({ src, title, recentEdit }: Props) => {
  return (
    <TemplateContainer>
      <img src={src} alt="temp" />
      <div>
        <div className="name">{title}</div>
        <div className="date">최근 수정일 {recentEdit}</div>
      </div>
    </TemplateContainer>
  );
};

export default Template;

const TemplateContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 35px;

  min-width: 545px;
  height: 386px;
  padding: 44px 45px;

  border: 2px solid #ebebeb;
  border-radius: 32px;

  font-weight: 600;

  img {
    height: 205px;
    width: 100%;
  }
  .name {
    font-size: 28px;
  }
  .date {
    font-size: 17px;
    color: #636366;
  }
`;

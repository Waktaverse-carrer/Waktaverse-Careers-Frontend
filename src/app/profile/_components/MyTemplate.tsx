import Template from "./Template";

import styled from "styled-components";

const MyTemplate = () => {
  const TempData = [
    {
      src: "profileTest.png",
      title: "템플릿 이름",
      recentEdit: "2024-05-24",
    },
    {
      src: "profileTest.png",
      title: "템플릿 이름",
      recentEdit: "2024-05-24",
    },
    {
      src: "profileTest.png",
      title: "템플릿 이름",
      recentEdit: "2024-05-24",
    },
    {
      src: "profileTest.png",
      title: "템플릿 이름",
      recentEdit: "2024-05-24",
    },
    {
      src: "profileTest.png",
      title: "템플릿 이름",
      recentEdit: "2024-05-24",
    },
    {
      src: "profileTest.png",
      title: "템플릿 이름",
      recentEdit: "2024-05-24",
    },
  ];

  return (
    <MyTemplateContainer>
      <div className="title">내 템플릿</div>
      <TemplateContainer>
        {TempData.map((data, index) => (
          <Template {...data} key={data.title + index} />
        ))}
      </TemplateContainer>
    </MyTemplateContainer>
  );
};

export default MyTemplate;

const MyTemplateContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  justify-content: left;
  gap: 35px;

  .title {
    font-size: 45px;
    font-weight: 600;
  }
`;

const TemplateContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;

  gap: 38px;
`;

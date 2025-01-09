import styled from "styled-components";

const LikedTemplate = () => {
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
    <LikedTemplateContainer>
      <div className="title">찜한 템플릿</div>
      <TemplateContainer>
        {TempData.map((data, index) => (
          <Template key={index}>
            <img src={data.src} alt="temp" />
            <div>
              <div className="name">{data.title}</div>
              <div className="date">최근 수정일 {data.recentEdit}</div>
            </div>
          </Template>
        ))}
      </TemplateContainer>
    </LikedTemplateContainer>
  );
};

export default LikedTemplate;

const LikedTemplateContainer = styled.div`
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

const Template = styled.div`
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

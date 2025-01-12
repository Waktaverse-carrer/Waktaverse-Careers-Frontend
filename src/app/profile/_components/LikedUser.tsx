import styled from "styled-components";

const LikedUser = () => {
  const TempData = [
    {
      src: "profileTest.png",
      title: "유저 이름",
    },
    {
      src: "profileTest.png",
      title: "유저 이름",
    },
    {
      src: "profileTest.png",
      title: "유저 이름",
    },
    {
      src: "profileTest.png",
      title: "유저 이름",
    },
    {
      src: "profileTest.png",
      title: "유저 이름",
    },
  ];

  return (
    <LikedUserContainer>
      <div className="title">찜한 유저</div>
      <UserContainer>
        {TempData.map((data, index) => (
          <User key={index}>
            <img src={data.src} alt="temp" />
            <div>
              <div className="name">{data.title}</div>
            </div>
          </User>
        ))}
      </UserContainer>
    </LikedUserContainer>
  );
};

export default LikedUser;

const LikedUserContainer = styled.div`
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

const UserContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;

  gap: 38px;
`;

const User = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;

  min-width: 386px;
  height: 454px;
  padding: 44px 45px;

  border: 2px solid #ebebeb;
  border-radius: 32px;

  font-weight: 600;

  img {
    height: 298px;
    width: 298px;
  }
  .name {
    font-size: 26px;
  }
`;

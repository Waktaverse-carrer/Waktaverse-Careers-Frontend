import styled from "styled-components";

const Profile = () => {
  // 자신 일때와 다른 사람일때를 구분해야함
  return (
    <ProfileContainer>
      <img src="profileTest.png" alt="temp" />
      <div className="profile">
        <div className="nickname">그냥 팬치</div>
        <div className="intro">이곳에 인사말 들어갑니다.</div>
        <div className="tags part">
          <div>소속</div> <div>소속</div>
        </div>
        <div className="tags skill">
          <div>기술</div> <div>기술</div>
        </div>
        <div className="tags contact">
          <div>연락처</div> <div>연락처</div>
        </div>
      </div>
    </ProfileContainer>
  );
};

export default Profile;

const ProfileContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: left;

  gap: 49px;
  margin: 190px 0;

  img {
    width: 194px;
    height: 194px;
  }
  .profile {
    display: flex;
    flex-direction: column;
    gap: 20px;

    .nickname {
      font-size: 55px;
      font-weight: bold;
    }
    .intro {
      font-size: 25px;
      font-weight: 600;
      color: #636366;
    }
    .tags {
      display: flex;
      height: 44px;
      gap: 8px;

      div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 80px;
        height: 100%;

        background-color: #1c1c1e;
        border-radius: 15px;
        font-size: 18px;
        font-weight: 600;
      }
    }
  }
`;

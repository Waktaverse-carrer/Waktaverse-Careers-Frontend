import styled from "styled-components";

const Portfolio = () => {
  // 자신 일때와 다른 사람일때를 구분해야함
  // 포트폴리오 있을 때와 없을 때를 구분해야함

  const isMyProfile = true;
  const isProtfolio = false;

  return (
    <PortfolioContainer>
      <div className="title">{isMyProfile && "내 "}포트폴리오</div>
      <div className="content">
        <div className="thumbnail">썸네일</div>
        <div className="explanation">
          <div className="text">포트폴리오 이름</div>
          {!isProtfolio && <button type="button">새로 만들기</button>}
        </div>
      </div>
    </PortfolioContainer>
  );
};

export default Portfolio;

const PortfolioContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  justify-content: left;
  gap: 35px;

  .title {
    font-size: 45px;
    font-weight: 600;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 50px;

    height: 700px;
    padding: 70px 66px;
    border: 3px solid #ebebeb;
    border-radius: 45px;

    .thumbnail {
      width: 100%;
      height: 100%;
      border-radius: 35px;
      border: 3px solid #ebebeb;
    }

    .explanation {
      display: flex;
      flex-direction: column;
      height: 133px;
      .text {
        font-size: 50px;
        font-weight: 600;
      }

      button {
        height: 48px;
        width: 130px;
        background-color: #33baa3;
        color: #ffffff;
        border-radius: 10px;
        border: none;
        cursor: pointer;
        font-size: 18px;
      }
    }
  }
`;

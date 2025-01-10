"use client";

import { useState } from "react";
import Template from "./Template";

import styled from "styled-components";

const MyTemplate = () => {
  const [unfold, setUnfold] = useState(true);

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
      <TemplateContainer unfold={unfold.toString()}>
        <div className="wrapper">
          {TempData.map((data, index) => (
            <Template {...data} key={data.title + index} />
          ))}
          {unfold && (
            <>
              <div className="gradient-fade"></div>
              <div className="more-button" onClick={() => setUnfold(false)}>
                더보기
              </div>
            </>
          )}
        </div>
      </TemplateContainer>
    </MyTemplateContainer>
  );
};

export default MyTemplate;

interface TemplateContainerProps {
  unfold: string;
}

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

const TemplateContainer = styled.div<TemplateContainerProps>`
  width: 100%;

  .wrapper {
    position: relative;
    display: flex;
    flex-wrap: wrap;

    gap: 38px;
    ${(props) =>
      props.unfold === "true" && "max-height: 900px; overflow: hidden;"};
  }

  .gradient-fade {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 300px; /* 그라데이션 영역 높이 */
    background: linear-gradient(
      to bottom,
      var(--background-transparent) 0%,
      var(--background) 75%
    );
    pointer-events: none; /* 클릭 이벤트를 차단 (더보기 버튼 클릭 가능하도록) */
  }

  .more-button {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;

    background-color: var(--background);
    padding: 5px 10px;
    border-radius: 4px;
    z-index: 1; /* 버튼을 위로 올림 */

    font-size: 35px;
    font-weight: 600;
  }
`;

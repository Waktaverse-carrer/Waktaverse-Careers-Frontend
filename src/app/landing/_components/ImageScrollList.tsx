import styled from 'styled-components';
import Image from 'next/image';
import { useRef, useState } from 'react';

const Container = styled.div`
  position: relative;
  flex: 1;
  width: 55vw;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
`;

const LeftWall = styled.button`
  position: absolute;
  left: 0;
  cursor: pointer;
  border: none;
  background-color: transparent;
  z-index: 1;
`;

const Content = styled.div`
  overflow-x: scroll;
  padding: 2px;
  filter: drop-shadow(0px 2.25rem 4rem rgba(0, 0, 0, 0.1));

  &::-webkit-scrollbar {
    display: none;
  }
`;

const RightWall = styled.button`
  position: absolute;
  right: -10px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  z-index: 1;
`;

export interface Props {
  children: React.ReactNode;
}

export default function ImageScrollList({ children }: Props) {
  const [current, setCurrent] = useState(1);
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollNext = () => {
    contentRef.current?.scroll({
      left: contentRef.current.scrollLeft + (320 + 64) * 0.85,
      behavior: 'smooth',
    });
  };
  const scrollPrev = () => {
    contentRef.current?.scroll({
      left: contentRef.current.scrollLeft - (320 + 64) * 0.85,
      behavior: 'smooth',
    });
  };
  return (
    <Container>
      <LeftWall onClick={scrollPrev}>
        <Image src='/images/left_shadow.png' alt='leftShadow' width={50} height={800} />
      </LeftWall>
      <Content ref={contentRef}>{children}</Content>
      <RightWall onClick={scrollNext}>
        <Image src='/images/right_shadow.png' alt='leftShadow' width={60} height={800} />
      </RightWall>
    </Container>
  );
}

'use client';

import Image from 'next/image';
import styled from 'styled-components';

const WorkerListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const WorkerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

const Name = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

type Worker = {
  id: number;
  name: string;
  image: string;
};

export interface Props {
  workers: Worker[];
}

export default function WorkerList({ workers }: Props) {
  return (
    <WorkerListWrapper>
      {workers.map((worker) => (
        <WorkerWrapper key={worker.id}>
          <Image
            src={worker.image || '/images/defaultProfile.png'}
            alt={worker.name}
            width={75}
            height={75}
          />
          <Name>{worker.name}</Name>
        </WorkerWrapper>
      ))}
    </WorkerListWrapper>
  );
}

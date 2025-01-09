'use client';

import Image from 'next/image';
import styled from 'styled-components';

const ProjectListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 58px;
`;

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

const Name = styled.span`
  font-size: 20px;
  font-weight: semi-bold;
`;

type Project = {
  id: number;
  name: string;
  image: string;
};

export interface Props {
  projects: Project[];
}

export default function ProjectList({ projects }: Props) {
  return (
    <ProjectListWrapper>
      {projects.map((project) => (
        <ProjectWrapper key={project.id}>
          <Image
            src={project.image}
            alt={project.name}
            width={75}
            height={75}
          />
          <Name>{project.name}</Name>
        </ProjectWrapper>
      ))}
    </ProjectListWrapper>
  );
}

import TemplateInfo from '@/app/_components/TemplateInfo';
import styled from 'styled-components';

const TemplateListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

type Template = {
  id: number;
  title: string;
  tags: string[];
};

export interface Props {
  templates: Template[];
}

export default function TemplateList({ templates }: Props) {
  return (
    <TemplateListWrapper>
      {templates.map((template) => (
        <TemplateInfo
          key={template.id}
          title={template.title}
          tags={template.tags}
        />
      ))}
    </TemplateListWrapper>
  );
}

import { standard } from '@/app/styles/standard';
import styled from 'styled-components';

const member = ['ine', 'jingburger', 'lilpa', 'jururu', 'gosegu', 'viichan'];
type Member = 'ine' | 'jingburger' | 'lilpa' | 'jururu' | 'gosegu' | 'viichan';
const memberObj: Record<string, string> = {
  아이네: 'ine',
  징버거: 'jingburger',
  릴파: 'lilpa',
  주르르: 'jururu',
  고세구: 'gosegu',
  비챤: 'viichan',
};

const getColor = (content: string) => {
  console.log(
    member.includes(content)
      ? standard.color.isedol(content as Member)
      : standard.color.main(500)
  );
  return member.includes(content)
    ? standard.color.isedol(content as Member)
    : standard.color.main(500);
};

const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 266.279px;
  flex-shrink: 0;
  gap: 5px;

  cursor: pointer;
`;

const Card = styled.div`
  width: 266.279px;
  height: 200px;
  flex-shrink: 0;

  border-radius: 10px;
  background: #d9d9d9;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const CardTitle = styled.span`
  color: #000;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const Tags = styled.div`
  display: flex;
  gap: 5px;
`;

const Tag = styled.div<{ content: string }>`
  display: inline-flex;
  height: 22px;
  padding: 2px 9.5px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;

  border-radius: 5px;
  background: ${({ content }) => getColor(content)};

  color: #fff;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export interface Props {
  title: string;
  tags: string[];
}

export default function TemplateInfo({ title, tags }: Props) {
  return (
    <CardBox>
      <Card />
      <Info>
        <CardTitle>{title}</CardTitle>
        <Tags>
          {tags.map((tag) => (
            <Tag key={tag} content={memberObj[tag]}>
              {tag}
            </Tag>
          ))}
        </Tags>
      </Info>
    </CardBox>
  );
}

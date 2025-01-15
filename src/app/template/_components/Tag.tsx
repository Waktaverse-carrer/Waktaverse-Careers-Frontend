import styled from 'styled-components';
import { getStandardColor } from '@/app/lib/constants/getColor';
import { SaturationType } from '@/app/lib/types/colors';

const memberObj: Record<string, string> = {
  아이네: 'ine',
  징버거: 'jingburger',
  릴파: 'lilpa',
  주르르: 'jururu',
  고세구: 'gosegu',
  비챤: 'viichan',
};

interface TagStyleProps {
  type: string;
  text: string;
}

const TagStyle = styled.div<TagStyleProps>`
  display: inline-block;
  padding: 4px 8px;
  border-radius: 5px;
  color: white;
  font-weight: 500;
  background-color: ${({ type, text }) =>
    getStandardColor(type, text as SaturationType)};
`;

export interface Props {
  type: string;
  text: string;
}

export default function Tag({ type, text }: Props) {
  return (
    <TagStyle type={type} text={memberObj[text]}>
      {text}
    </TagStyle>
  );
}

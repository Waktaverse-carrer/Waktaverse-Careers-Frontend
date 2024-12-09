import styled from 'styled-components';

type ColorMapType = {
  [key: string]: string;
};

const ColorMap: ColorMapType = {
  비챤: '#7cc018',
  크레딧: '#1dcbae',
  일러스트: '#7832b9',
};

interface TagStyleProps {
  text: string;
}

const TagStyle = styled.div<TagStyleProps>`
  display: inline-block;
  padding: 4px 8px;
  border-radius: 5px;
  color: white;
  font-weight: 500;
  background-color: ${(props) => ColorMap[props.text]};
`;

export interface Props {
  text: string;
}

export default function Tag({ text }: Props) {
  return <TagStyle text={text}>{text}</TagStyle>;
}

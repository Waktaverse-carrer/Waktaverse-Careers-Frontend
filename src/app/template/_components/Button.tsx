import styled from 'styled-components';

const ButtonStyle = styled.button`
  background-color: #33baa3;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #31ae99;
  }

  &:focus {
    background-color: #30a692;
  }

  &:active {
    background-color: #2e9c8a;
  }
`;

export interface Props {
  onClick?: () => void;
  children: React.ReactNode;
}

export default function Button({ onClick = () => {}, children, ...options }: Props) {
  return <ButtonStyle onClick={onClick}>{children}</ButtonStyle>;
}

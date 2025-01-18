'use client';

import styled from 'styled-components';
import { signIn } from 'next-auth/react';

const NaverButton: React.FC = () => {
  const onLoginClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    signIn('naver');
  };

  return (
    <Button onClick={onLoginClick} type='button'>
      네이버로 로그인
    </Button>
  );
};

const Button = styled.button`
  border-radius: 20px;
  background: #1cc048;
  color: #fff;
  font-family: Pretendard;
  font-size: 25px;
  font-weight: 700;
  padding: 19px 0;
`;

export default NaverButton;

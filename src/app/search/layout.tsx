'use client';

import styled from 'styled-components';

const LayoutWrapper = styled.div`
  height: 100vh;
  margin: 28px 68px;
`;

export interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return <LayoutWrapper>{children}</LayoutWrapper>;
}

import styled from "styled-components";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 105px;
`;

interface Props {
  children: React.ReactNode;
}

export default function ({ children }: Props) {
  return <Layout>{children}</Layout>;
}

'use server';

import { getServerSession } from 'next-auth/next';
import { option } from '@/app/api/auth/[...nextauth]/route';

interface Props {
  children: React.ReactNode;
}

const Layout = async ({ children }: Props) => {
  /**
   * 우선 Layout에 Sever단 세션을 불러오는 로직을 추가
   * 실제 필요한 페이지에만 적용을 하는 방법으로 수정 가능
   */

  await getServerSession(option);

  return <>{children}</>;
};

export default Layout;

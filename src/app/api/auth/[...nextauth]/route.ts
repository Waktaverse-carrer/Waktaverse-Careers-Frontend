import NextAuth, { type AuthOptions } from 'next-auth';
import NaverProvider from 'next-auth/providers/naver';
import GoogleProvider from 'next-auth/providers/google';

/**
 * 해당 API 라우트는 사용하지 않습니다.
 * 일단 파일은 남겨둘 예정
 *
 * 각 플랫폼별 토큰을 추가하면 적용
 */
export const option: AuthOptions = {
  providers: [
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID as string,
      clientSecret: process.env.NAVER_CLIENG_SECRET_KEY as string,
    }),
    GoogleProvider({
      clientId: '',
      clientSecret: '',
    }),
  ],
  secret: 'Hello_Wakta_World',
  callbacks: {
    // refresh 로직 추가
    jwt({ token }) {
      return token;
    },
    // session으로 지지고 볶고 비비고 할 로직
    session({ session }) {
      return session;
    },
    // 플랫폼 redirect 대응
    redirect({ url, baseUrl }) {
      if (url === baseUrl) return url;
      if (url.startsWith(baseUrl)) return url;

      return baseUrl;
    },
  },
};

const Auth = NextAuth(option);

export { Auth as GET, Auth as POST };

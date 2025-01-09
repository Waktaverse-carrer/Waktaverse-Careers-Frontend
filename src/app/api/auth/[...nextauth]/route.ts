import NextAuth, { type AuthOptions } from 'next-auth';
import NaverProvider from 'next-auth/providers/naver';
import GoogleProvider from 'next-auth/providers/google';

/**
 * 각 플랫폼별 토큰을 추가하면 적용
 */
export const option: AuthOptions = {
  providers: [
    NaverProvider({
      clientId: '',
      clientSecret: '',
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

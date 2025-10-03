import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Usuário", type: "text" },
        password: { label: "Senha", type: "password" },
      },
      async authorize(credentials) {
        const USER = process.env.BASIC_AUTH_USER;
        const PASS = process.env.BASIC_AUTH_PASSWORD;

        if (
          credentials?.username === USER &&
          credentials?.password === PASS
        ) {
          return { id: "onlyOne", name: USER };
        }

        // inválido
        return null;
      },
    }),
  ],
  // pages: {
  //   signIn: "/login",
  // },
});

export { handler as GET, handler as POST };

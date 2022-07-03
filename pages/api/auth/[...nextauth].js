import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_D,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET_ID,
    }),
    // ...add more providers here
  ],
  pages: {
    signIn: "/auth/signin",
  },

  callbacks: {
    async session({ session, token }) {
      session.user.username = session.user.name
        .split(" ")
        .join("")
        .toLowerCase();
      session.user.uid = token.sub;

      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});

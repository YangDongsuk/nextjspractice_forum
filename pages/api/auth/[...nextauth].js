import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: "fbf19a111abdfad1bb36",
      clientSecret: "14eb95442c950672ed417ffc3a4d4fcc0c53fea0",
    }),
  ],
  secret: "yang2331@",
};
export default NextAuth(authOptions);

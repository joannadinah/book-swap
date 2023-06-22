import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "../../../../lib/mongoose"
import GoogleProvider from "next-auth/providers/google"
import InstagramProvider from "next-auth/providers/instagram"; 
//import Credentials, { CredentialsProvider } from "next-auth/providers/credentials"


export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    InstagramProvider({
      clientId: process.env.INSTAGRAM_CLIENT_ID,
      clientSecret: process.env.INSTAGRAM_CLIENT_SECRET
    })
  ],
  adapter: MongoDBAdapter(clientPromise),
}
export default NextAuth(authOptions)


// CredentialsProvider({
//   name: "Sign in",
//   credentials: {
//     email: {
//       label: "Email",
//       type: "email",
//       placeholder: "example@email.com",
//     },
//     password: { label: "Password", type: "password" },
//   },
// })
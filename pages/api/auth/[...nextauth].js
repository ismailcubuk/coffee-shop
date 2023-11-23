import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { connectDB } from "../../../utils/db";
import User from "../../../models/user";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
        const sessionUser = await User.findOne({email: session.user.email})
        session.user.id= sessionUser._id;
      return session;
    },
    async signIn({ profile }) {
      console.log(profile);
      try {
        await connectDB();

        const userExist = await User.findOne({ email: profile.email });

        if(!userExist) {
            const user = await User.create({
                name: profile.given_name,
                surname: profile.family_name,
                email: profile.email,
                image: profile.picture,
            });
        }
        return true;

      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
  secret: process.env.JWT_SECRET,
});

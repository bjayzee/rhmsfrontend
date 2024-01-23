import { Account, User as AuthUser } from "next-auth";
import AppleProvider from "next-auth/providers/apple";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import connectDB from "@/server/utils/db";
import User from "@/server/models/RHMSUsers";
import NextAuth from "next-auth/next";

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                await connectDB();
                try {
                    const user = await User.findOne({ email: credentials.email });
                    if (user) {
                        const isPasswordCorrect = await bcrypt.compare(
                            credentials.password,
                            user.password
                        );
                        if (isPasswordCorrect) {
                            return user;
                        }
                    }
                } catch (err) {
                    throw new Error(err);
                }
            },
        }),
        AppleProvider({
            clientId: process.env.APPLE_ID ?? "",
            clientSecret: process.env.APPLE_SECRET ?? ""
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID ?? "",
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET ?? ""
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ""
        })
    ],
    callbacks: {
        async signIn({ user, account }) {
            if (account?.provider == "credentials") {
                return true;
            }
            if (account?.provider == "google") {
                await connectDB();
                try {
                    const existingUser = await User.findOne({ email: user.email });
                    if (!existingUser) {
                        const newUser = new User({
                            email: user.email,
                        });

                        await newUser.save();
                        return true;
                    }
                    return true;
                } catch (err) {
                    console.log("Error saving user", err);
                    return false;
                }
            }
        },
    },
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
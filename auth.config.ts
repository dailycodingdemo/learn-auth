import type { NextAuthConfig } from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authConfig = {
	pages: {
		signIn: "/auth",
	},
	callbacks: {
		authorized({ auth, request: { nextUrl } }) {
			const isLoggedIn = !!auth?.user;

			const isOnAuth = nextUrl.pathname.startsWith("/auth");

			if (isOnAuth) {
				if (isLoggedIn) {
					return Response.redirect(
						nextUrl.searchParams.get("callbackUrl") ||
							new URL("/", nextUrl)
					);
				}
				return true;
			} else if (isLoggedIn) {
				return true;
			}
			return false;
		},
	},
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
		}),
	], // Add providers with an empty array for now
} satisfies NextAuthConfig;

"use server";

import { signIn } from "@/auth";

export const login = async () => {
	return await signIn("github");
};

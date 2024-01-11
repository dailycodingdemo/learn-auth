"use client";
import React from "react";
import { useSession, signOut } from "next-auth/react";

export default function Page() {
	return (
		<div>
			<button onClick={() => signOut()}>SignOut</button>
		</div>
	);
}

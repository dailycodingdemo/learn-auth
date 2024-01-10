"use client";
import React from "react";
import { useSession, signOut } from "next-auth/react";

export default function Page() {
	const { data } = useSession();
	return (
		<div>
			{JSON.stringify(data)}
			<button onClick={() => signOut()}>SignOut</button>
		</div>
	);
}

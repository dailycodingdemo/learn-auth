import React from "react";
import { useSession, signOut } from "next-auth/react";

export default async function Page() {
	const data = await fetch("https://jsonplaceholder.typicode.com/todos/1")
		.then((response) => response.json())
		.then((json) => json);

	console.log(data);
	return (
		<div>
			{JSON.stringify(data)}
			{/* <button onClick={() => signOut()}>SignOut</button> */}
		</div>
	);
}

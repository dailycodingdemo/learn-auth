import React from "react";
import { login } from "./action";

export default function page() {
	return (
		<div>
			<form action={login}>
				<button>Github</button>
			</form>
		</div>
	);
}

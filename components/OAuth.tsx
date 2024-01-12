import React from "react";
import { FaGoogle } from "react-icons/fa";
import { Button } from "./ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export default function OAuth() {
	return (
		<div className="flex items-center gap-2">
			<Button className="w-1/2 flex items-center gap-2" variant="outline">
				<GitHubLogoIcon />
				Github
			</Button>
			<Button className="w-1/2 flex items-center gap-2" variant="outline">
				<FaGoogle />
				Google
			</Button>
		</div>
	);
}

import { Key } from "lucide-react";
import React from "react";
import OAuth from "./OAuth";
import Credentials from "./Credentials";
export default function AuthComponent() {
	return (
		<div className=" relative">
			<div className=" glowBox absolute -z-10 top-1/2 right-1/2"></div>
			<div className="w-96 border rounded-md p-5 space-y-5 z-10  bg-[#09090B]">
				<AuthHeader />
				<OAuth />
				<Credentials />
			</div>
		</div>
	);
}

const AuthHeader = () => {
	return (
		<div className="space-y-5">
			<div className="flex items-center gap-2">
				<Key className="text-green-500" />
				<h1 className="text-2xl font-bold">NEXT-AUTH V5</h1>
			</div>
			<p className="text-sm text-gray-400">Sign in today</p>
		</div>
	);
};

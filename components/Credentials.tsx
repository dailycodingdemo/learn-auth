import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CredentialsSignIn from "./CredentialsSignIn";
import CredentialsSignUp from "./CredentialsSignUp";

export default function Credentials() {
	return (
		<Tabs defaultValue="signin" className="w-full">
			<TabsList className="grid w-full grid-cols-2">
				<TabsTrigger value="signin">Sign In</TabsTrigger>
				<TabsTrigger value="register">Register</TabsTrigger>
			</TabsList>
			<TabsContent value="signin">
				<CredentialsSignIn />
			</TabsContent>
			<TabsContent value="register">
				<CredentialsSignUp />
			</TabsContent>
		</Tabs>
	);
}

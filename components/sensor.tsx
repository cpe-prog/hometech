import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";

export default function Sensor() {
	return (
		<div className="w-full mt-5">
			<Card>
				<CardHeader>
					<CardTitle className="text-3xl font-bold">Flame Sensor</CardTitle>
					<CardDescription>
						Click the emergency button if there is alert!
					</CardDescription>
				</CardHeader>
				<CardContent>
					<p className="font-bold text-2xl text-cyan-200">43</p>
				</CardContent>
				<CardFooter className="flex justify-center">
					<Button variant="destructive">Emergency!</Button>
				</CardFooter>
			</Card>
		</div>
	);
}

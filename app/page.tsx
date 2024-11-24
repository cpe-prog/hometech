import { Button } from "@/components/ui/button";
import { AirVent, Fan, FireExtinguisher, Lightbulb } from "lucide-react";

export default function Home() {
	return (
		<div className=" flex flex-col min-h-screen text-center  p-8 pt-20 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<h1 className="mt-12 mb-2 font-bold text-3xl customShadow text-cyan-600 ">
				HomeTech
			</h1>

			<h3 className="font-bold mt-14 text-2xl text-cyan-300">Home Controls</h3>

			<div className=" mt-20 grid justify-center self-center grid-cols-2 gap-10">
				<Button className="w-36">
					<Lightbulb /> Dinning Light
				</Button>
				<Button className="w-36">
					{" "}
					<Lightbulb /> Kitchen Light
				</Button>
				<Button className="w-36">
					<Lightbulb /> Bedroom
				</Button>
				<Button className="w-36">
					{" "}
					<FireExtinguisher /> Fire Killer
				</Button>
				<Button className="w-36">
					<Fan /> Electric Fan
				</Button>
				<Button className="w-36">
					<AirVent /> Air conditioner
				</Button>
			</div>
		</div>
	);
}

import { StateType } from "@/components/controls";
import { AirVent, Fan, FireExtinguisher, Lightbulb } from "lucide-react";

type Control = {
	id: keyof StateType; // Ensure IDs match StateType keys
	icon: React.ReactNode;
	buttonName: string;
};

export const controlData: Control[] = [
	{
		id: "dining",
		icon: <Lightbulb />,
		buttonName: "Dining Light",
	},
	{
		id: "kitchen",
		icon: <Lightbulb />,
		buttonName: "Kitchen Light",
	},
	{
		id: "bedroom",
		icon: <Lightbulb />,
		buttonName: "Bedroom Light",
	},
	{
		id: "firekiller",
		icon: <FireExtinguisher />,
		buttonName: "Fire Killer",
	},
	{
		id: "electricfan",
		icon: <Fan />,
		buttonName: "Electric Fan",
	},
	{
		id: "airconditioner",
		icon: <AirVent />,
		buttonName: "Air conditioner",
	},
];

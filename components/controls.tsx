"use client";

import { Button } from "@/components/ui/button";

import { controlData } from "@/lib/data";
import { useState } from "react";

type ControlType = {
	id: keyof StateType; // id must match a key in StateType
	label: string;
};

type StateType = {
	dinning: boolean;
	kitchen: boolean;
	bedroom: boolean;
	firekiller: boolean;
	electricfan: boolean;
	airconditioner: boolean;
};

export const Controls = () => {
	// const [dinning, setDinning] = useState(false);
	// const [kitchen, setKitchen] = useState(false);
	// const [bedroom, setBedroom] = useState(false);
	// const [firekiller, setFirekiller] = useState(false);
	// const [electricfan, setElectricFan] = useState(false);
	// const [airconditioner, setAirConditioner] = useState(false);
	const [state, setState] = useState<StateType>({
		dinning: false,
		kitchen: false,
		bedroom: false,
		firekiller: false,
		electricfan: false,
		airconditioner: false,
	});

	const handleClick = (id: keyof StateType): void => {
		setState((prevState) => ({
			...prevState,
			[id]: !prevState[id],
		}));
		console.log(`${id} toggled to`, !state[id]);
	};

	return (
		<>
			<h3 className="font-bold mt-14 text-2xl text-cyan-300">Controls</h3>
			<div className=" mt-5 grid justify-center grid-cols-2  self-center gap-10">
				{controlData.map((controls) => (
					<Button
						key={controls.id}
						onClick={() => handleClick(controls.id)}
						className="w-36 mb-8"
					>
						{controls.icon} {controls.buttonName}
					</Button>
				))}
			</div>
		</>
	);
};

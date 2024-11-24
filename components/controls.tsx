"use client";

import { Button } from "@/components/ui/button";

import { controlData } from "@/lib/data";
import { useState } from "react";

export const Controls = () => {
	const [dinning, setDinning] = useState(false);
	// const [kitchen, setKitchen] = useState(false);
	// const [bedroom, setBedroom] = useState(false);
	// const [firekiller, setFirekiller] = useState(false);
	// const [electricfan, setElectricFan] = useState(false);
	// const [airconditioner, setAirConditioner] = useState(false);

	const handleClick = () => {
		setDinning(!dinning);
		console.log(controlData.map);
	};

	return (
		<>
			<h3 className="font-bold mt-14 text-2xl text-cyan-300">Controls</h3>
			<div className=" mt-5 grid justify-center grid-cols-2  self-center gap-10">
				{controlData.map((controls) => (
					<Button key={controls.id} onClick={handleClick} className="w-36 mb-8">
						{controls.icon} {controls.buttonName}
					</Button>
				))}
			</div>
		</>
	);
};

/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Button } from "@/components/ui/button";

import { controlData } from "@/lib/data";
import database from "@/lib/firebase.config";
import { ref, set } from "firebase/database";
import { useState } from "react";

export type StateType = {
	dinning: boolean;
	kitchen: boolean;
	bedroom: boolean;
	firekiller: boolean;
	electricfan: boolean;
	airconditioner: boolean;
};

export default function Controls() {
	const [state, setState] = useState<StateType>({
		dinning: false,
		kitchen: false,
		bedroom: false,
		firekiller: false,
		electricfan: false,
		airconditioner: false,
	});

	const handleClick = async (id: keyof StateType) => {
		setState((prevState) => {
			const updatedState = {
				...prevState,
				[id]: !prevState[id],
			};

			const path = `/Controls/${id}`;
			const valueRef = ref(database, path);

			set(valueRef, updatedState[id])
				.then(() => {
					console.log(`${id} toggled to`, updatedState[id]);
				})
				.catch((error) => {
					console.error(`Failed to update ${id}:`, error);
				});
			return updatedState;
		});
	};

	return (
		<>
			<h3 className="font-bold mt-14 text-2xl text-cyan-300">Controls</h3>
			<div className=" mt-5 grid justify-center grid-cols-2  self-center gap-10">
				{controlData.map((controls) => (
					<Button
						key={controls.id}
						onClick={() => handleClick(controls.id)}
						className="w-36 mb-8 flex justify-start"
					>
						{controls.icon} {controls.buttonName}
					</Button>
				))}
			</div>
		</>
	);
}

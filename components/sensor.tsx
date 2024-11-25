/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import database from "@/lib/firebase.config";
import { get, onValue, ref, set } from "firebase/database";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export default function Sensor() {
	const [values, setValues] = useState(null);
	const [disable, setDisable] = useState(true);
	const [firekiller, setFireKiller] = useState(false);

	useEffect(() => {
		fetchData();
		SirenAudio();
		const notification = () => {
			const date = new Date();
			const formatter = new Intl.DateTimeFormat("en-US", {
				hour: "2-digit",
				minute: "2-digit",
				second: "2-digit",
			});
			const formatterDate = formatter.format(date);
			if (values === 0) {
				setDisable(true);
			} else {
				setDisable(false);
				toast({
					title: "Fire alert!",
					description: `Your house is on fire:  ${date.toDateString()} at ${formatterDate}`,
					variant: "destructive",
				});
			}
		};
		const interval = setInterval(notification, 2000);
		const path = "Sensors/flame";
		const valueRef = ref(database, path);
		const unsubscribe = onValue(valueRef, (snapshot) => {
			const value = snapshot.val();
			setValues(value);
		});

		return () => {
			unsubscribe();
			clearTimeout(interval);
		};
	}, [values]);

	const SirenAudio = () => {
		// const date = new Date();
		// const formatter = new Intl.DateTimeFormat("en-US", {
		// 	hour: "2-digit",
		// 	minute: "2-digit",
		// 	second: "2-digit",
		// });
		// const formatterDate = formatter.format(date);
		const sirenAudio = new Audio("/siren.mp3");
		if (values === 0) {
			sirenAudio.pause();
			sirenAudio.currentTime = 0;
			// toast({
			// 	title: "Fire Resolved",
			// 	description: `Time resolved: ${formatterDate}`,
			// });
		} else {
			sirenAudio.play();
		}
	};

	const handleClick = async () => {
		const path = "Controls/firekiller";
		const valueRef = ref(database, path);
		await set(valueRef, firekiller ? true : false);
		setFireKiller((prev) => !prev);
	};

	const fetchData = async () => {
		try {
			const path = "/Controls";
			const valueRef = ref(database, path);

			const snapshot = await get(valueRef);
			if (snapshot.exists()) {
				setFireKiller(snapshot.val());
			}
		} catch (error) {
			console.error("Error fetching data: ", error);
		}
	};
	return (
		<div className="w-full mt-5">
			<Card>
				<CardHeader>
					<CardTitle className="text-3xl font-bold">Fire Detection</CardTitle>
					<CardDescription>
						Click the emergency button if there is alert!
					</CardDescription>
				</CardHeader>
				<CardContent>
					<p className="font-bold text-2xl text-cyan-200">
						{values ? "Fire" : "Normal"}
					</p>
				</CardContent>
				<CardFooter className="flex justify-center">
					<Button
						onClick={handleClick}
						disabled={disable}
						variant={
							disable ? "outline" : `${firekiller ? "destructive" : "default"}`
						}
					>
						Emergency!
					</Button>
				</CardFooter>
			</Card>
		</div>
	);
}

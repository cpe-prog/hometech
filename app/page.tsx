"use client";

import Controls from "@/components/controls";
import Flash from "@/components/flash";
import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import Sensor from "@/components/sensor";
import { useEffect, useState } from "react";

export default function Home() {
	const [flash, setFlash] = useState(true);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setFlash(false);
		}, 4000);
		return () => clearTimeout(timeout);
	});

	return (
		<>
			{flash ? (
				<Flash />
			) : (
				<>
					<NavBar />
					<div className=" flex flex-col min-h-screen text-center  p-8 pt-20 font-[family-name:var(--font-geist-sans)]">
						<div className="bg-center mt-5 bg-contain bg-no-repeat bg-bg-header">
							<h1 className=" mb-2 mt-8 font-bold text-5xl customShadow  dark:text-cyan-100">
								E-Bahay
							</h1>
						</div>
						<Controls />
						<Sensor />
					</div>
					<Footer />
				</>
			)}
		</>
	);
}

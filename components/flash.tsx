import HomeLogo from "@/assets/images/homelogo.png";
import { motion } from "motion/react";
import Image from "next/image";

export default function Flash() {
	return (
		<div className=" flex flex-col gap-5 items-center w-full h-screen justify-center font-[family-name:var(--font-geist-sans)]">
			<motion.div
				initial={{ y: 200, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				exit={{
					y: -100,
					opacity: 0,
				}}
				transition={{ duration: 2, ease: "easeInOut" }}
			>
				<Image src={HomeLogo} alt="homeLogo" width={150} height={150} />
			</motion.div>
			<motion.div
				initial={{ opacity: 0, scale: 5 }}
				animate={{ opacity: 1, scale: 1 }}
				exit={{
					y: -50,
					opacity: 0,
				}}
				transition={{ duration: 1, ease: "easeInOut", type: "spring" }}
			>
				<h1 className=" font-extrabold text-4xl text-cyan-300 customShadow">
					E-BAHAY
				</h1>
			</motion.div>
		</div>
	);
}

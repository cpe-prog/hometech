import Controls from "@/components/controls";
import Sensor from "@/components/sensor";

export default function Home() {
	return (
		<div className=" flex flex-col min-h-screen text-center  p-8 pt-20 font-[family-name:var(--font-geist-sans)]">
			<div className="bg-center mt-5 bg-contain bg-no-repeat bg-bg-header">
				<h1 className=" mb-2 mt-8 font-bold text-5xl customShadow  dark:text-cyan-100">
					E-Bahay
				</h1>
			</div>
			<Controls />
			<Sensor />
		</div>
	);
}

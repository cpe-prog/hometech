import Controls from "@/components/controls";

export default function Home() {
	return (
		<div className=" flex flex-col min-h-screen text-center  p-8 pt-20 font-[family-name:var(--font-geist-sans)]">
			<h1 className="mt-12 mb-2 font-bold text-5xl customShadow   dark:text-cyan-100">
				E-Bahay
			</h1>
			<Controls />
		</div>
	);
}

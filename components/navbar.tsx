import HomeLogo from "@/assets/images/homelogo.png";
import Image from "next/image";
import { ModeToggle } from "./theme-mode";

export default function NavBar() {
	return (
		<div className="h-20 w-full fixed backdrop-blur-md shadow-slate-50 shadow-md">
			<nav className="w-full h-20 px-8 items-center justify-between flex">
				<div>
					<Image width={60} height={60} src={HomeLogo} alt="homeLogo" />
				</div>
				<div>
					<ModeToggle />
				</div>
			</nav>
		</div>
	);
}

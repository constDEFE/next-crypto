import type { FC } from "react";
import Link from "next/link";
import MobileMenu from "./components/MobileMenu";
import Navbar from "./components/Navbar";

const links = [
	{ href: "#", label: "Home" },
	{ href: "#market", label: "Market" },
	{ href: "#choose", label: "Choose Us" },
	{ href: "#join", label: "Join" }
];

const Header: FC = () => {
	return (
		<header className="sticky top-0 z-10 flex h-[72px] w-full items-center justify-between border-b border-border-lg bg-gradient-to-t from-black/20 to-black p-4 backdrop-blur">
			<div className="flex items-center gap-16">
				<Link href={"/"}>
					<h1 className="text-xl font-bold md:text-2xl">Crypto</h1>
				</Link>
				<Navbar links={links} />
			</div>
			<MobileMenu links={links} />
		</header>
	);
};

export default Header;

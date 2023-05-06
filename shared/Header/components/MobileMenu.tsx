"use client";

import { type FC, useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import { BiMenuAltRight } from "react-icons/bi";
import NavbarLink from "./NavbarLink";

interface Props {
	links: HeaderLink[];
}

const MobileMenu: FC<Props> = ({ links }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const handleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			{/* Button */}
			<button className="md:pointer-events-none md:invisible" aria-label="Menu" onClick={handleMenu}>
				<BiMenuAltRight size={32} />
			</button>

			{/* Menu itself */}
			<div
				onClick={handleMenu}
				className={clsx(
					"pointer-events-none fixed left-0 top-0 h-screen w-screen bg-black/60 opacity-0 duration-300 ease-out md:hidden",
					isOpen && "pointer-events-auto opacity-100"
				)}
			>
				<div
					onClick={(event) => event.stopPropagation()}
					className={clsx(
						"absolute -left-3/4 top-0 h-screen w-3/4 border-r border-r-border-lg bg-black duration-300 ease-out",
						isOpen && "left-0"
					)}
				>
					<ul className="flex h-full flex-col items-center justify-center gap-6">
						{links.map(({ href, label }, i) => (
							<NavbarLink delay={(i + 1) * 0.15} key={href}>
								<Link
									className="block p-2 text-lg font-medium duration-150 ease-out hover:text-accent-light"
									href={href}
									onClick={handleMenu}
								>
									{label}
								</Link>
							</NavbarLink>
						))}
					</ul>
				</div>
			</div>
		</>
	);
};

export default MobileMenu;

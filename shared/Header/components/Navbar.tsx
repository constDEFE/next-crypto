import type { FC } from "react";
import Link from "next/link";
import NavbarLink from "./NavbarLink";

interface Props {
	links: HeaderLink[];
}

const Navbar: FC<Props> = ({ links }) => {
	return (
		<nav className="hidden md:block">
			<ul className="flex gap-[clamp(8px,_3vw,_48px)]">
				{links.map(({ href, label }, i) => (
					<NavbarLink delay={(i + 1) * 0.15} key={href}>
						<Link className="block p-2 duration-150 ease-out hover:text-accent-light" href={href}>
							{label}
						</Link>
					</NavbarLink>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;

"use client";

import type { FC, PropsWithChildren } from "react";
import { motion, type MotionProps } from "framer-motion";

interface Props {
	delay: number;
}

const NavbarLink: FC<PropsWithChildren<Props>> = ({ delay, children }) => {
	const transition: MotionProps = {
		initial: { x: -20, opacity: 0 },
		whileInView: { x: 0, opacity: 1 },
		transition: { duration: 0.4, delay },
		viewport: { once: false, amount: 0 }
	};

	return <motion.li {...transition}>{children}</motion.li>;
};

export default NavbarLink;

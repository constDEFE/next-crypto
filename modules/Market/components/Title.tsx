"use client";

import type { FC, PropsWithChildren } from "react";
import { motion, type MotionProps } from "framer-motion";

const transition: MotionProps = {
	initial: { y: 20, opacity: 0 },
	whileInView: { y: 0, opacity: 1 },
	transition: { duration: 0.4, delay: 0.1 },
	viewport: { once: true, amount: 0.5 }
};

const Title: FC<PropsWithChildren> = ({ children }) => {
	return (
		<motion.h2
			{...transition}
			id="market-title"
			className="text-gradient py-2 text-3xl font-semibold text-white lg:text-4xl 2xl:text-5xl"
		>
			{children}
		</motion.h2>
	);
};

export default Title;

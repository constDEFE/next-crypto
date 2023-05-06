"use client";

import type { FC, PropsWithChildren } from "react";
import { motion, type MotionProps } from "framer-motion";

const transition: MotionProps = {
	initial: { y: 20, opacity: 0 },
	whileInView: { y: 0, opacity: 1 },
	transition: { duration: 0.7 },
	viewport: { once: true, amount: 1 }
};

const Title: FC<PropsWithChildren> = ({ children }) => {
	return (
		<motion.h1
			{...transition}
			id="hero-title"
			className="whitespace-pre-line text-center text-4xl font-semibold text-white lg:text-5xl 2xl:text-6xl"
		>
			{children}
		</motion.h1>
	);
};

export default Title;

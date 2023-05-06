"use client";

import type { FC, PropsWithChildren } from "react";
import { type MotionProps, motion } from "framer-motion";

const transition: MotionProps = {
	initial: { y: 20, opacity: 0 },
	whileInView: { y: 0, opacity: 1 },
	transition: { duration: 0.5, delay: 0.1 },
	viewport: { once: true, amount: 1 }
};

const Title: FC<PropsWithChildren> = ({ children }) => {
	
	return (
		<motion.h2
			{...transition}
			id="choose-us-title"
			className="text-gradient mx-auto max-w-[400px] py-2 text-center text-3xl font-semibold lg:text-4xl 2xl:max-w-[560px] 2xl:text-5xl"
		>
			{children}
		</motion.h2>
	);
};

export default Title;

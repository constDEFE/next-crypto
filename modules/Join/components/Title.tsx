"use client";

import type { FC, PropsWithChildren } from "react";
import { type MotionProps, motion } from "framer-motion";

const transition: MotionProps = {
	initial: { y: 20, opacity: 0 },
	whileInView: { y: 0, opacity: 1 },
	transition: { duration: 0.5, delay: 0.1 },
	viewport: { once: true, amount: 0.5 }
};

const Title: FC<PropsWithChildren> = ({ children }) => {
	return (
		<motion.div {...transition} className="text-center">
			{children}
		</motion.div>
	);
};

export default Title;

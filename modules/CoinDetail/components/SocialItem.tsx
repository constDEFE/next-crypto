"use client";

import type { FC, PropsWithChildren } from "react";
import { type MotionProps, motion } from "framer-motion";

interface Props {
	delay: number;
}

const SocialItem: FC<PropsWithChildren<Props>> = ({ delay, children }) => {
	const transition: MotionProps = {
		initial: { y: 20, opacity: 0 },
		whileInView: { y: 0, opacity: 1 },
		transition: { duration: 0.5, delay },
		viewport: { once: true, amount: 0.5 }
	};

	return (
		<motion.div {...transition} className="flex flex-col items-center text-center">
			{children}
		</motion.div>
	);
};

export default SocialItem;

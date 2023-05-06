"use client";

import type { FC, PropsWithChildren } from "react";
import { type MotionProps, motion } from "framer-motion";

interface Props {
	delay: number;
}

const ItemWrapper: FC<PropsWithChildren<Props>> = ({ children, delay }) => {
	const transition: MotionProps = {
		initial: { y: 20, opacity: 0 },
		whileInView: { y: 0, opacity: 1 },
		transition: { duration: 0.5, delay },
		viewport: { once: true, amount: 0.2 }
	};

	return (
		<motion.div {...transition} className="flex flex-col items-center text-center">
			{children}
		</motion.div>
	);
};

export default ItemWrapper;

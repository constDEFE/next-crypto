"use client";

import type { FC, PropsWithChildren } from "react";
import { type MotionProps, motion } from "framer-motion";

interface Props {
	delay: number;
}

const RightRow: FC<PropsWithChildren<Props>> = ({ children, delay }) => {
	const transition: MotionProps = {
		initial: { y: 20, opacity: 0 },
		whileInView: { y: 0, opacity: 1 },
		transition: { duration: 0.5, delay },
		viewport: { once: true, amount: 0.5 }
	};

	return (
		<motion.div {...transition} className="grid gap-2 text-base 2xs:grid-cols-2 lg:grid-cols-4 lg:text-sm xl:text-base">
			{children}
		</motion.div>
	);
};

export default RightRow;

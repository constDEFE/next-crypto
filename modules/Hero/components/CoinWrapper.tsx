"use client";

import type { FC, PropsWithChildren } from "react";
import { motion, type MotionProps } from "framer-motion";

interface Props {
	delay: number;
}

const CoinWrapper: FC<PropsWithChildren<Props>> = ({ delay, children }) => {
	const transition: MotionProps = {
		initial: { y: 20, opacity: 0 },
		whileInView: { y: 0, opacity: 1 },
		transition: { duration: 0.3, ease: "easeOut", delay },
		viewport: { once: true, amount: 0.5 }
	};

	return (
		<motion.li
			{...transition}
			className="w-[160px] list-none rounded-xl border border-border-sm bg-black/30 p-2 duration-150 ease-out hover:border-border-lg lg:w-[180px] lg:p-4"
		>
			{children}
		</motion.li>
	);
};

export default CoinWrapper;

"use client";

import type { FC, PropsWithChildren } from "react";
import { type MotionProps, motion } from "framer-motion";

const transition: MotionProps = {
	initial: { y: 20, opacity: 0 },
	whileInView: { y: 0, opacity: 1 },
	transition: { duration: 0.5, delay: 0.2 },
	viewport: { once: true, amount: 0.5 }
};

const Form: FC<PropsWithChildren> = ({ children }) => {
	return (
		<motion.form
			{...transition}
			className="group mt-8 flex w-full max-w-[400px] rounded-full border border-border-sm p-1 duration-150 ease-out hover:border-border-lg lg:text-lg"
		>
			{children}
		</motion.form>
	);
};

export default Form;

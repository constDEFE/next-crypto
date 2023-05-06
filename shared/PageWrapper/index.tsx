"use client";

import { useEffect, type FC, type PropsWithChildren } from "react";
import { type MotionProps, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const transition: MotionProps = {
	initial: { y: 20, opacity: 0 },
	animate: { y: 0, opacity: 1 },
	transition: { duration: 0.5 }
};

const PageWrapper: FC<PropsWithChildren> = ({ children }) => {
	const pathname = usePathname();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<motion.div key={pathname} className="overflow-hidden" {...transition}>
			{children}
		</motion.div>
	);
};

export default PageWrapper;

"use client";

import type { FC } from "react";
import { SparklinesLine, Sparklines as NativeSparklines } from "react-sparklines";

interface Props {
	data: number[];
}

const Sparklines: FC<Props> = ({ data }) => {
	return (
		<NativeSparklines data={data}>
			<SparklinesLine color="#1d7ee0" />
		</NativeSparklines>
	);
};

export default Sparklines;

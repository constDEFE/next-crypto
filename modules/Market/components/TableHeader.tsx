import { type FC, memo } from "react";

const TableHeader: FC = memo(() => {
	return (
		<div className="sticky top-0 grid grid-cols-[2fr_1fr] rounded-t-xl border-b border-border-sm px-4 py-3 text-xl duration-150 ease-out group-hover:border-border-lg md:grid-cols-[repeat(4,_1fr)]">
			<div>Name</div>
			<div className="whitespace-nowrap text-right">Price</div>
			<div className="hidden whitespace-nowrap text-right md:block">24h Change</div>
			<div className="hidden whitespace-nowrap text-right md:block">Market Cap</div>
		</div>
	);
});

export default TableHeader;

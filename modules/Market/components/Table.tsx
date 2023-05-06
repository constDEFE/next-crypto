"use client";

import { type FC, useState, useMemo } from "react";
import TableHeader from "./TableHeader";
import TableContent from "./TableContent";
import TableFooter from "./TableFooter";

interface Props {
	coins: Coin[];
}

const Table: FC<Props> = ({ coins }) => {
	const [currentPage, setCurrentPage] = useState<number>(1);
	const totalPages = Math.ceil(coins.length / 10);

	const displayedCoins = useMemo(() => coins.slice((currentPage - 1) * 10, currentPage * 10), [currentPage]);

	const handlePageChange = (page: number) => () => {
		if (page === totalPages + 1) return;
		else if (page === 0) return;
		else setCurrentPage(page);
	};

	return (
		<div className="max-w-screen group relative mt-4 rounded-xl border border-border-sm bg-black/30 duration-150 ease-out hover:border-border-lg">
			<TableHeader />
			<TableContent coins={displayedCoins} />
			<TableFooter page={currentPage} onPageChange={handlePageChange} />
		</div>
	);
};

export default Table;

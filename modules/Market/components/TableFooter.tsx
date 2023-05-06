import type { FC } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

interface Props {
	page: number;
	onPageChange: (page: number) => () => void;
}

const TableFooter: FC<Props> = ({ page, onPageChange }) => {
	const previousPage = page - 1;
	const nextPage = page + 1;

	return (
		<div className="sticky bottom-0 flex items-center justify-end gap-2 rounded-b-xl border-t border-border-sm px-4 py-1 duration-150 ease-out group-hover:border-border-lg">
			<div className="grid grid-cols-3 place-items-center">
				<button
					onClick={onPageChange(previousPage)}
					className="rounded-lg border border-border-sm bg-black p-2 shadow duration-150 ease-out hover:border-border-lg"
				>
					<HiChevronLeft size={24} />
				</button>
				<span className="p-2">{page}</span>
				<button
					onClick={onPageChange(nextPage)}
					className="rounded-lg border border-border-sm bg-black p-2 shadow duration-150 ease-out hover:border-border-lg"
				>
					<HiChevronRight size={24} />
				</button>
			</div>
		</div>
	);
};

export default TableFooter;

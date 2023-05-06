import type { FC } from "react";
import TableRow from "./TableRow";
import RowContent from "./RowContent";

interface Props {
	coins: Coin[];
}

const TableContent: FC<Props> = ({ coins }) => {
	return (
		<ul className="h-[65vh] overflow-y-auto">
			{coins.map((coin, i) => (
				<TableRow delay={(i + 1) * 0.05} key={coin.id}>
					<RowContent coin={coin} />
				</TableRow>
			))}
		</ul>
	);
};

export default TableContent;

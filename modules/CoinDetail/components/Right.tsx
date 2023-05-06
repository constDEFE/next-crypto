import type { FC } from "react";
import RightRow from "./RightRow";
import Sparklines from "./Sparklines";

type Row = {
	label: string;
	value: string | number;
};

interface Props {
	rows: Row[][];
	coin: CoinDetail;
}

const Right: FC<Props> = ({ coin, rows }) => {
	return (
		<div className="col-span-2 mt-4 flex flex-col justify-between md:mt-0">
			<div className="flex flex-col gap-2">
				<h2 className="text-gradient text-2xl font-bold xl:text-3xl">Market Stats</h2>
				{rows.map((row, i) => (
					<RightRow key={row[0].label} delay={i === 0 ? 0.3 : (i + 1) * 0.2}>
						<div>
							<p className="text-accent-light">{row[0].label}</p>
							<p>{row[0].value}</p>
						</div>
						<div className="2xs:text-right lg:text-left">
							<p className="text-accent-light">{row[1].label}</p>
							<p>{row[1].value}</p>
						</div>
						<div className="lg:text-right">
							<p className="text-accent-light">{row[2].label}</p>
							<p>{row[2].value}</p>
						</div>
						<div className="2xs:text-right">
							<p className="text-accent-light">{row[3].label}</p>
							<p>{row[3].value}</p>
						</div>
					</RightRow>
				))}
			</div>
			<div>
				<h3 className="text-gradient mt-4 text-2xl font-bold md:mt-2 xl:text-3xl">7 Day Sparklines</h3>
				{coin.market_data.sparkline_7d ? (
					<Sparklines data={coin.market_data.sparkline_7d.price} />
				) : (
					<p className="text-center text-lg">No sparklines provided</p>
				)}
			</div>
		</div>
	);
};

export default Right;

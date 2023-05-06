import type { FC } from "react";
import { formatCurrency, formatDate, formatPercentage } from "@/utils/formatters";
import Left from "./components/Left";
import Right from "./components/Right";

interface Props {
	coin: CoinDetail;
}

const CoinDetail: FC<Props> = ({ coin }) => {
	const leftRows = [
		{
			left: {
				label: "Market Cap",
				value: formatCurrency(coin.market_data.market_cap.usd)
			},
			right: {
				label: "Total Volume",
				value: formatCurrency(coin.market_data.total_volume.usd)
			}
		},
		{
			left: {
				label: "Hashing Algorithm",
				value: coin.hashing_algorithm ? coin.hashing_algorithm : "Uknown"
			},
			right: {
				label: "Trust Score",
				value: coin.liquidity_score
			}
		},
		{
			left: {
				label: "Emerged in",
				value: formatDate(coin.genesis_date)
			},
			right: {
				label: "Home Page",
				value: coin.links.homepage[0] ?? "Doesn't have"
			}
		}
	];

	const rightRows = [
		[
			{
				label: "Market Rank",
				value: `#${coin.market_cap_rank}`
			},
			{
				label: "All Time High",
				value: formatCurrency(coin.market_data.ath.usd)
			},
			{
				label: "Trust Score",
				value: coin.liquidity_score
			},
			{
				label: "Trust Score",
				value: coin.liquidity_score
			}
		],
		[
			{
				label: "All Time High",
				value: formatCurrency(coin.market_data.ath.usd)
			},
			{
				label: "All Time High Date",
				value: formatDate(coin.market_data.ath_date.usd)
			},
			{
				label: "All Time Low",
				value: formatCurrency(coin.market_data.atl.usd)
			},
			{
				label: "All Time Low Date",
				value: formatDate(coin.market_data.atl_date.usd)
			}
		],
		[
			{
				label: "Price Change 24h",
				value: formatPercentage(coin.market_data.price_change_percentage_24h)
			},
			{
				label: "Price Change 7d",
				value: formatPercentage(coin.market_data.price_change_percentage_7d)
			},
			{
				label: "Price Change 30d",
				value: formatPercentage(coin.market_data.price_change_percentage_30d)
			},
			{
				label: "Price Change 1y",
				value: formatPercentage(coin.market_data.price_change_percentage_1y)
			}
		]
	];

	return (
		<section className="grid min-h-withoutHeader place-items-center p-4">
			<div className="group container grid-cols-3 gap-4 rounded-xl border border-border-sm bg-black/30 p-4 duration-150 ease-out hover:border-border-lg md:grid">
				<Left coin={coin} rows={leftRows} />
				<Right coin={coin} rows={rightRows} />
				<div className="col-span-3 mt-2 max-h-[50vh] overflow-y-auto md:mt-0 md:max-h-[25vh] ">
					<p
						style={{ whiteSpace: "pre-line" }}
						className="dangerous-html"
						dangerouslySetInnerHTML={{ __html: coin.description.en }}
					/>
				</div>
			</div>
		</section>
	);
};

export default CoinDetail;

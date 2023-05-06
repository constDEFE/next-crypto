import type { FC } from "react";
import { formatCurrency, formatPercentage } from "@/utils/formatters";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

interface Props {
	coin: Coin;
}

const RowContent: FC<Props> = ({ coin }) => {
	const changeStyle = coin.price_change_24h > 0 ? "text-green-400" : coin.price_change_24h < 0 ? "text-red-400" : "";

	return (
		<Link
			className="grid grid-cols-[2fr_1fr] px-4 py-3 hover:bg-slate-900/30 md:grid-cols-[repeat(4,_1fr)]"
			href={`/coins/${coin.id}`}
		>
			<div className="flex items-center gap-4 sm:text-lg">
				<Image className="h-[38px] w-[38px] rounded-full" width={38} height={38} src={coin.image} alt={coin.name} />
				<div>
					<p className="leading-5">{coin.name}</p>
					<p className="text-sm font-medium text-text-dark">{coin.symbol.toUpperCase()}</p>
				</div>
			</div>
			<div className="flex items-center justify-end">{formatCurrency(coin.current_price)}</div>
			<div className={clsx("hidden items-center justify-end font-medium md:flex", changeStyle)}>
				{formatPercentage(coin.price_change_percentage_24h)}
			</div>
			<div className={"hidden items-center justify-end md:flex"}>{formatCurrency(coin.market_cap)}</div>
		</Link>
	);
};

export default RowContent;

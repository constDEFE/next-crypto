import type { FC } from "react";
import { formatCurrency } from "@/utils/formatters";
import Image from "next/image";
import LeftRow from "./LeftRow";
import Socials from "./Socials";

interface Props {
	rows: {
		left: {
			label: string;
			value: string | number;
		};
		right: {
			label: string;
			value: string | number;
		};
	}[];
	coin: CoinDetail;
}

const Left: FC<Props> = ({ rows, coin }) => {
	return (
		<div className="flex flex-col gap-2 border-b border-border-sm pb-4 duration-150 ease-out group-hover:border-border-lg md:border-b-0 md:border-r md:pb-0 md:pr-4 lg:gap-4">
			<Image src={coin.image.large} width={96} height={96} alt={coin.name} priority className={"rounded-full"} />
			<div>
				<h1 className="text-gradient text-2xl font-bold xl:text-3xl">
					{coin.name} | {coin.symbol.toUpperCase()}
				</h1>
				<p className="xl:text-lg">Current Price: {formatCurrency(coin.market_data.current_price.usd)}</p>
			</div>
			{rows.map(({ left, right }, i) => (
				<LeftRow delay={i === 0 ? 0.2 : (i + 1) * 0.2} key={left.label}>
					<div>
						<p className="text-accent-light">{left.label}</p>
						<p>{left.value}</p>
					</div>
					<div className="text-left xs:text-right md:text-left lg:text-right">
						<p className="text-accent-light">{right.label}</p>
						{i !== rows.length - 1 ? (
							<p>{right.value}</p>
						) : coin.links.homepage[0] ? (
							<a target={"_blank"} referrerPolicy="no-referrer" href={right.value as string}>
								{new URL(right.value as string).hostname}
							</a>
						) : (
							<p>Doesn&apos;t have</p>
						)}
					</div>
				</LeftRow>
			))}
			<Socials coin={coin} />
		</div>
	);
};

export default Left;

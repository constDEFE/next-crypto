import type { FC } from "react";
import Coin from "./Coin";
import CoinWrapper from "./CoinWrapper";

interface Props {
	coins: Coin[];
}

const TrendingCoins: FC<Props> = ({ coins }) => {
	return (
		<ul className="grid max-w-full grid-cols-[repeat(4,_1fr)] gap-4 overflow-x-auto overflow-y-hidden">
			{coins.map((coin, i) => (
				<CoinWrapper delay={(i + 1) * 0.2} key={coin.id}>
					<Coin coin={coin} />
				</CoinWrapper>
			))}
		</ul>
	);
};

export default TrendingCoins;

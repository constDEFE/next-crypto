import type { FC } from "react";
import Title from "./components/Title";
import TrendingCoins from "./components/TrendingCoins";

interface Props {
	coins: Coin[];
}

const Hero: FC<Props> = ({ coins }) => {
	return (
		<section aria-labelledby="hero-title" id="hero">
			<div className="container flex min-h-withoutHeader flex-col items-center justify-center gap-8">
				<div>
					<Title>
						Trade, Buy, Sell
						{"\n"}
						All the
						<span className="outlined-text text-white"> cryptos </span>
						{"\n"}
						you need
						{"\n"}
						<span className="text-accent-light">in one place</span>
					</Title>
				</div>
				{!coins.length ? <p>Error during the fetch...</p> : <TrendingCoins coins={coins.slice(0, 4)} />}
			</div>
		</section>
	);
};

export default Hero;

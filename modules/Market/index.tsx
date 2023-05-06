import type { FC } from "react";
import Title from "./components/Title";
import Table from "./components/Table";

interface Props {
	coins: Coin[];
}

const Market: FC<Props> = ({ coins }) => {
	return (
		<section aria-labelledby="market-title" id="market">
			<div className="container flex min-h-screen flex-col justify-center">
				<Title>Today&apos;s crypto Prices</Title>
				{!coins.length ? <p className="mt-8 text-center text-lg">Error during the fetch</p> : <Table coins={coins} />}
			</div>
		</section>
	);
};

export default Market;

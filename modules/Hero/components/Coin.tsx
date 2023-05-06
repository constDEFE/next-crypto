import type { FC } from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
	coin: Coin;
}

const Coin: FC<Props> = ({ coin }) => {
	return (
		<Link className="flex flex-col items-center" href={`/coins/${coin.id}`}>
			<Image src={coin.image} alt={coin.name} width={100} height={100} className="rounded-full object-cover" />
			<p className="mt-4 text-xl font-medium">{coin.name}</p>
			<p className="text-xl font-medium">
				{coin.current_price.toLocaleString("en-US", {
					style: "currency",
					currency: "USD",
					maximumFractionDigits: 5
				})}
			</p>
		</Link>
	);
};

export default Coin;

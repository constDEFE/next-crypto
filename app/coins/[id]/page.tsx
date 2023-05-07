import CoinDetail from "@/modules/CoinDetail";
import { getCoinInfo } from "@/utils/getters";

export const revalidate = 60;

export const generateMetadata = async ({ params: { id } }: Props) => {
	const coin = (await getCoinInfo(id)) as CoinDetail;

	return {
		title: `Crypto | ${coin.symbol.toUpperCase()}`
	};
};

/**
 * I'd like to use generateStaticParams there, but unfortunately I ran out of api-calls during at build time
 */

interface Props {
	params: { id: string };
}

const page = async ({ params: { id } }: Props) => {
	const coin = (await getCoinInfo(id)) as CoinDetail;

	return (
		<>
			<CoinDetail coin={coin} />
		</>
	);
};

export default page;

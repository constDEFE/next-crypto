export const getCurrentDate = () => new Date().getFullYear();

export const getAllCoins = async () => {
	const response = await fetch(
		"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en",
		{ next: { revalidate: 60 } }
	);

	return (await response.json()) as Coin[];
};

export const getCoinInfo = async (coinId: string) => {
	const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}?sparkline=true`, {
		next: { revalidate: 60 }
	});

	if (!response.ok) return null;

	return (await response.json()) as CoinDetail;
};

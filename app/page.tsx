import Hero from "@/modules/Hero";
import Join from "@/modules/Join";
import Market from "@/modules/Market";
import ChooseUs from "@/modules/ChooseUs";
import { getAllCoins } from "@/utils/getters";

const page = async () => {
	const coins = await getAllCoins();

	return (
		<>
			<Hero coins={coins} />
			<Market coins={coins} />
			<ChooseUs />
			<Join />
		</>
	);
};

export default page;

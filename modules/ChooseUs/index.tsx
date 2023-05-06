import type { FC } from "react";
import Title from "./components/Title";
import Item from "./components/Item";
import ItemWrapper from "./components/ItemWrapper";

import Img1 from "public/assets/images/ChooseUs/1.svg";
import Img2 from "public/assets/images/ChooseUs/2.svg";
import Img3 from "public/assets/images/ChooseUs/3.svg";

const items = [
	{
		image: Img1,
		title: "Ease of Trading",
		description: [
      "Intuitive inteface", 
      "Instant deposit options", 
      "Cash out directly to your bank account"
    ]
	},
	{
		image: Img2,
		title: "Institutional-grade Security",
		description: [
			"98% of assets stored safely offline",
			"Highly encrypted personal data",
			"Whitelisting and transaction confirmations"
		]
	},
	{
		image: Img3,
		title: "Proven Reliability",
		description: [
      "Exchanging bitcoin since 2011", 
      "Industry-leading uptime", 
      "24/7 dedicated support"
    ]
	}
];

const ChooseUs: FC = () => {
	return (
		<section aria-labelledby="choose-us-title" id="choose">
			<div className="container flex min-h-screen flex-col justify-center py-4">
				<Title>The most trusted cryptocurrency platform</Title>
				<div className="group flex grid-cols-3 flex-col gap-12 pt-8 md:grid md:gap-4 md:pt-12">
					{items.map((item, i) => (
						<ItemWrapper key={item.title} delay={(i + 1) * 0.3}>
							<Item item={item} />
						</ItemWrapper>
					))}
				</div>
			</div>
		</section>
	);
};

export default ChooseUs;

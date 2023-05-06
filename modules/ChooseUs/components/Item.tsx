import type { FC } from "react";
import Image from "next/image";

interface Props {
	item: { image: any; title: string; description: string[] };
}

const Item: FC<Props> = ({ item }) => {
	return (
		<>
			<Image className="w-[56px] lg:w-[64px]" src={item.image} width={56} height={56} alt="" />
			<h3 className="text-gradient py-2 text-xl font-semibold lg:text-2xl">{item.title}</h3>
			<ul className="flex flex-col gap-2">
				{item.description.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
		</>
	);
};

export default Item;

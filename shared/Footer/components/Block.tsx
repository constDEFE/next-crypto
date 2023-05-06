import type { FC } from "react";

interface Props {
	block: { title: string; links: string[] };
}

const Block: FC<Props> = ({ block }) => {
	return (
		<div>
			<p className="py-1 text-lg font-semibold lg:text-xl">{block.title}</p>
			<ul className="flex flex-col gap-1">
				{block.links.map((link) => (
					<li key={link}>
						<a
							className="link-underline text-text-dark duration-150 ease-out hover:text-text-light lg:text-lg"
							href="#"
						>
							{link}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Block;

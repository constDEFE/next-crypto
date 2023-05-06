import type { FC } from "react";
import Title from "./components/Title";
import Form from "./components/Form";

const Join: FC = () => {
	return (
		<section aria-labelledby="join-title" id="join">
			<div className="container flex h-[max(50vh,_400px)] flex-col items-center justify-center px-2">
				<Title>
					<h2 id="join-title" className="text-gradient py-2 text-3xl font-semibold lg:text-4xl 2xl:text-5xl">Never miss a drop</h2>
					<p className="text-lg 2xl:text-xl">Subscribe for the latest news, drops, collectibles</p>
				</Title>
				<Form>
					<input
						className="w-full bg-transparent px-4 py-2 outline-none group-hover:placeholder:text-inherit"
						type="email"
						placeholder="Enter your email address"
					/>
					<button className="rounded-full bg-accent-dark px-4 py-2 duration-150 ease-out hover:bg-accent-light">
						Subscribe
					</button>
				</Form>
			</div>
		</section>
	);
};

export default Join;

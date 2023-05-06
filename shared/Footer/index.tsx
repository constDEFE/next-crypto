import type { FC } from "react";
import { getCurrentDate } from "@/utils/getters";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import SocialLink from "./components/SocialLink";
import Block from "./components/Block";

const icons = [FaInstagram, FaTwitter, FaFacebookF, FaLinkedinIn];

const blocks = [
	{
		title: "Company",
		links: ["About Us", "Terms of Use", "Privacy Policy", "Disclaimer"]
	},
	{
		title: "Business",
		links: ["Prime", "Custody", "Asset Hub", "Commerce"]
	},
	{
		title: "Exchange",
		links: ["Exchange Home", "Margin Trading", "Derivatives Trading", "Trading Arena"]
	},
	{
		title: "Blockchain",
		links: ["Chain Explorer", "The Syndicate", "Security", "Crypto Credit"]
	},
	{
		title: "Resources",
		links: ["Prices", "Site Widgets", "Tax", "Blog", "Research"]
	}
];

const Footer: FC = () => {
	return (
		<footer className="bg-black/40">
			<div className="container py-8">
				<div className="grid grid-cols-2 gap-4 md:grid-cols-5">
					{blocks.map((block) => (
						<Block block={block} key={block.title} />
					))}
				</div>
				<div className="mt-12">
					<div className="flex justify-center gap-6 md:justify-end">
						{[1, 2, 3, 4].map((_, i) => {
							const Icon = icons[i];

							return (
								<SocialLink href="#" key={i}>
									<Icon size={22} />
								</SocialLink>
							);
						})}
					</div>
				</div>
				<div className="mt-8 text-center">
					<p>Crypto &copy; {getCurrentDate()}</p>
					<p>
						Powered by&nbsp;
						<a
							className="link-underline"
							target="_blank"
							referrerPolicy="no-referrer"
							href="https://www.coingecko.com/"
						>
							Coin Gecko
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

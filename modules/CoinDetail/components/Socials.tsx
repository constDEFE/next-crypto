import type { FC } from "react";
import SocialItem from "./SocialItem";
import { FaFacebook, FaGithub, FaReddit, FaTwitter } from "react-icons/fa";

interface Props {
	coin: CoinDetail;
}

const Socials: FC<Props> = ({ coin }) => {
	const socials = {
		fb: coin.community_data.facebook_likes,
		twitter: coin.community_data.twitter_followers,
		reddit: coin.community_data.reddit_subscribers,
		github: coin.developer_data.stars
	};

	return (
		<div>
			<p className="text-base text-accent-light lg:text-sm xl:text-base">Community</p>
			<div className="mt-2 grid grid-cols-2 gap-2 px-2 text-base xs:grid-cols-4 md:grid-cols-2 lg:grid-cols-4 lg:text-sm xl:text-base">
				{socials.fb && socials.fb !== 0 ? (
					<SocialItem delay={0.2}>
						<FaFacebook size={28} />
						<div>
							<p className="leading-4">{socials.fb.toLocaleString("en-US")}</p>
							<p className="leading-4">Likes</p>
						</div>
					</SocialItem>
				) : null}
				{socials.twitter && socials.twitter !== 0 ? (
					<SocialItem delay={0.4}>
						<FaTwitter size={28} />
						<div>
							<p className="leading-4">{socials.twitter.toLocaleString("en-US")}</p>
							<p className="leading-4">Followers</p>
						</div>
					</SocialItem>
				) : null}
				{socials.reddit && socials.reddit !== 0 ? (
					<SocialItem delay={0.6}>
						<FaReddit size={28} />
						<div>
							<p className="leading-4">{socials.reddit.toLocaleString("en-US")}</p>
							<p className="leading-4">Subs</p>
						</div>
					</SocialItem>
				) : null}
				{socials.github && socials.github !== 0 ? (
					<SocialItem delay={0.8}>
						<FaGithub size={28} />
						<div>
							<p className="leading-4">{socials.github.toLocaleString("en-US")}</p>
							<p className="leading-4">Stars</p>
						</div>
					</SocialItem>
				) : null}
			</div>
		</div>
	);
};

export default Socials;

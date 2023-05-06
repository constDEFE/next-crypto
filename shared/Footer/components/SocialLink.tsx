import type { FC, PropsWithChildren } from "react";

interface Props {
	href: string;
}

const SocialLink: FC<PropsWithChildren<Props>> = ({ children, href }) => {
	return (
		<a
			className="inline-block rounded-xl border border-border-sm p-2 text-text-dark duration-150 ease-out hover:border-border-lg hover:text-text-light"
			href={href}
			referrerPolicy="no-referrer"
			target="_blank"
		>
			{children}
		</a>
	);
};

export default SocialLink;

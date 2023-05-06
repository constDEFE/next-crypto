import Footer from "@/shared/Footer";
import Header from "@/shared/Header";
import PageWrapper from "@/shared/PageWrapper";
import { Jost } from "next/font/google";

import "./globals.css";

const font = Jost({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	display: "swap",
	fallback: ["ui-sans-serif", "sans-serif"],
	subsets: ["latin"]
});

export const metadata = {
	title: "Crypto",
	description: "Crypto is an app that allows users to get information about vatious cryptocurrencies in real-time.",
	icons: {
		icon: "/favicon.ico"
	}
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html>
			<body style={{ ...font.style, fontWeight: "400" }}>
				<Header />
				<PageWrapper>
					<main>{children}</main>
				</PageWrapper>
				<Footer />
			</body>
		</html>
	);
}

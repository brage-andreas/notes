"use client";

import { type Metadata } from "next";
import { Lexend, Noto_Serif } from "next/font/google";
import "./globals.css";

const lexend = Lexend({ subsets: ["latin"] });
const noto = Noto_Serif({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Notes",
	description: "Don't leave a thread hanging"
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={lexend.className}>
			<body className="mx-[30vw] my-[2.5vh]">
				<header className={noto.className}>
					<h1 className="font-bold text-5xl">Notes</h1>
				</header>

				{children}

				<footer>
					<div className="flex flex-col items-center justify-between mt-26">
						<div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
							<div>
								<h3 className="font-bold">Notes</h3>
								<p className="text-xs">
									Made by Brage • 2023
									<br />
									💖 OSS on{" "}
									<a
										href="https://github.com/brage-andreas/notes"
										className="text-jade underline"
									>
										GitHub
									</a>
								</p>
							</div>
							<div>«Leave no thread hanging»</div>
						</div>
					</div>
				</footer>
			</body>
		</html>
	);
}

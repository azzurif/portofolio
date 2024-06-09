import React from "react";

const Home = () => {
	return (
		<div
			id="home"
			className="min-h-screen max-w-full flex flex-col-reverse md:flex-row justify-center items-center gap-5 md:gap-10 pt-24"
		>
			<div className="text-left max-w-full m-10 md:m-0">
				<h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-200 tracking-wide leading-tight">
					Fairuzizuan <br /> Azzuri
				</h1>
				<p className="text-2xl md:text-3xl text-gray-500 mb-8">
					<b className="text-accent">
						Junior Fullstack <br /> Web Developer
					</b>
				</p>
			</div>
			<img
				src="https://placehold.jp/150x150.png"
				alt="Fairuzizuan Azzuri"
				className="w-80 h-80 md:w-96 md:h-96 mb-8 md:mb-0"
			/>
		</div>
	);
};

export default Home;

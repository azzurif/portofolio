import React from "react";

const About = () => {
	return (
		<div
			id="about"
			className="min-h-screen flex flex-col justify-center items-center gap-10"
		>
			<h1 className="text-last font-semibold border-b-2 border-last">
				About Me
			</h1>
			<div className="bg-gray-200 p-8 rounded-md max-w-xl text-center mx-20">
				<h1 className="text-3xl font-bold mb-4 text-gray-700 tracking-wide">
					Hai, I'm <br /> Fairuzizuan Azzuri
				</h1>
				<p className="text-gray-600 mb-8 leading-relaxed">
					I'm currently a student in 2 Depok High School and a junior Fullstack
					Web Developer with experience in developing fullstack web applications
					using technologies such as HTML, CSS, JavaScript, Node.js, React, and
					Laravel.
				</p>
			</div>
		</div>
	);
};

export default About;

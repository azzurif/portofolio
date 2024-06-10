import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaLaravel } from "react-icons/fa";
import { SiTailwindcss, SiExpress } from "react-icons/si";

const skills = [
	{
		name: "HTML",
		icon: <FaHtml5 className="text-orange-500" />,
	},
	{
		name: "CSS",
		icon: <FaCss3Alt className="text-blue-500" />,
	},
	{
		name: "JavaScript",
		icon: <FaJs className="text-yellow-500" />,
	},
	{
		name: "TailwindCSS",
		icon: <SiTailwindcss className="text-teal-500" />,
	},
	{
		name: "React",
		icon: <FaReact className="text-blue-600" />,
	},
	{
		name: "Laravel",
		icon: <FaLaravel className="text-red-500" />,
	},
	{
		name: "ExpressJS",
		icon: <SiExpress className="text-gray-500" />
	}
];

const Skill = () => {
	return (
		<div id="skill" className="min-h-screen flex flex-col justify-center items-center pt-24">
			<h1 className="text-last font-semibold border-b-2 mb-4 border-last inline-block">
				My Skills
			</h1>

			<div className="flex flex-wrap justify-center">
				{skills.map((skill, index) => (
					<div
						key={index}
						className="m-4 p-4 bg-gray-200 rounded-lg shadow-lg flex flex-col items-center w-32"
					>
						<div className="text-6xl mb-2">{skill.icon}</div>
						<span className="text-gray-800 font-semibold">{skill.name}</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default Skill;

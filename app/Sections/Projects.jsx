import Card from "@/components/Card";
import posImage from "@pub/demoPOS.png"

export default function Projects() {
	const projects = [
		{
			title: "Simple POS System",
			description:
				"This POS application, built with Astro, is designed to facilitate seamless order operations. It includes core features such as a streamlined checkout process, product and inventory management, and transaction tracking.",
			image: posImage,
			demo: "https://pos.fairuz.my.id",
			github: "pos",
		},
	];

	return (
		<div
			id="projects"
			className={`min-h-screen flex flex-col justify-center items-center gap-10 ${projects.length <= 3 && "mb-14"}`}
		>
			<h1 className="text-3xl md:text-4xl font-bold text-gray-800">
				My Projects
				<div className="space-y-2 mt-3">
					<div className="bg-sky-800 h-1 w-24 rounded-full"></div>
					<div className="bg-sky-800 h-1 w-24 rounded-full translate-x-6"></div>
				</div>
			</h1>
			<div className="grid md:grid-cols-3 gap-4 mx-20 md:mx-36">
				{projects?.map(({ title, description, image, demo, github }, key) => (
					<Card
						key={key}
						title={title}
						description={description}
						image={image}
						demo={demo}
						github={github}
					/>
				))}
			</div>
		</div>
	);
}

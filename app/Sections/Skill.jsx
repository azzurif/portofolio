export default function Skill() {
	const langs = [
		"CSS",
		"Typescript",
		"React",
		"Astro",
		"TailwindCSS",
		"NodeJS",
		"ExpressJS",
		"MySQL",
		"Supabase",
		"PHP",
		"Laravel",
	];
	const tools = ["Visual Studio Code", "Git", "NeoVim"];

	return (
		<div
			id="skill"
			className="min-h-screen flex flex-col justify-center items-center gap-10"
		>
			<div className="flex flex-col items-center gap-4 md:w-1/2">
				<h1 className="text-3xl md:text-4xl font-bold text-gray-800">
					Skills
					<div className="space-y-2 mt-3">
						<div className="bg-sky-800 h-1 w-24 rounded-full"></div>
						<div className="bg-sky-800 h-1 w-24 rounded-full translate-x-6"></div>
					</div>
				</h1>
				<p className="text-gray-600">
					My technical skills and proficient in.
				</p>
			</div>

			<div className="flex flex-col md:flex-row items-center justify-center gap-12 mx-20 md:mx-40 md:w-1/2 text-center">
				<div className="flex-wrap">
					<h3 className="font-semibold text-xl md:text-2xl mb-3">Language & Framework</h3>
					<p className="text-gray-600">{langs.join(" | ")}</p>
				</div>

				<div>
					<h3 className="font-semibold text-xl md:text-2xl mb-3">Tools</h3>
					<p className="text-gray-600">{tools.join(" | ")}</p>
				</div>
			</div>
		</div>
	);
}

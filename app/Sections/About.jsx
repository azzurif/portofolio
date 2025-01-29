export default function About() {
	return (
		<div
			id="about"
			className="min-h-screen flex flex-col justify-center items-center gap-10 mt-16 md:mt-0"
		>
			<h1 className="text-3xl md:text-4xl font-bold text-gray-800">
				About Me
				<div className="space-y-2 mt-3">
					<div className="bg-sky-800 h-1 w-24 rounded-full"></div>
					<div className="bg-sky-800 h-1 w-24 rounded-full translate-x-6"></div>
				</div>
			</h1>
			<div className="bg-gray-50 py-5 md:py-8 px-20 md:px-14 rounded-lg w-full md:max-w-2xl text-center mx-20 text-gray-600 leading-relaxed space-y-4">
				<p>
					I'm Fairuzizuan Azzuri, a passionate Web Developer. I'm currently a
					student in 2 Depok High School at major SIJA (Sistem Informasi
					Jaringan Dan Aplikasi).
				</p>
				<p>
					What excites me most about development is the ability to create
					solutions that make a real impact. It’s crafting a seamless
					application experience or optimizing performance. I’m always eager to
					take on new challenges and grow as a developer.
				</p>
				<p>
					Besides from my coding things, I find myself enjoying and exploring
					other things, like IoT, networking, playing a musical instrument. I
					find that these activities help me recharge and bring fresh
					perspectives.
				</p>
			</div>
		</div>
	);
}

import Button from "@/components/Button";
import Image from "next/image";
import man from "../../public/man.jpg";

export default function Home() {
	return (
		<div
			id="main"
			className="min-h-screen flex flex-col md:flex-row justify-center items-center gap-5 md:gap-16 md:pt-24"
		>
			<div className="text-left max-w-full m-20 md:m-0 space-y-4">
				<h1 className="font-medium tracking-wide text-gray-600 text-lg">
					Hi, I'm Fairuzizuan Azzuri
				</h1>

				<p className="text-3xl md:text-5xl md:leading-12 font-bold tracking-wider">
					Full Stack <br /> Developer
				</p>

				<p>
					A passionate junior Full Stack Developer focusing on Web Development
					from Yogyakarta.
				</p>

				<div className="flex items-center gap-4 mt-8">
					<a href="mailto:fairuzizuan019@gmail.com">
						<Button className="flex items-center gap-2 md:me-3">
							Contact Me
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="size-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
								/>
							</svg>
						</Button>
					</a>

					{/* Instagram */}
					<a
						href="https://instagram.com/fairz.me"
						target="_blank"
						className="hover:text-gray-600"
					>
						<svg
							className="w-9"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
						>
							<path
								fill="currentColor"
								fillRule="evenodd"
								d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
								clipRule="evenodd"
							/>
						</svg>
					</a>

					{/* Github */}
					<a
						href="https://github.com/azzurif"
						target="_blank"
						className="hover:text-gray-600"
					>
						<svg
							className="w-9"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								fillRule="evenodd"
								d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
								clipRule="evenodd"
							/>
						</svg>
					</a>
				</div>
			</div>
			<div className="relative h-72 w-44 md:h-[28rem] md:w-72">
				<Image
					src={man}
					alt="my Image"
					fill
					style={{ objectFit: "cover" }}
					className="rounded-3xl outline-[6px] outline-sky-800 outline-offset-8"
				/>
			</div>
		</div>
	);
}

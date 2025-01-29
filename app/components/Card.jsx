import Image from "next/image";

export default function Card({ title, description, image, github, demo }) {
	return (
		<article className="shadow transition rounded-lg overflow-hidden">
			<div className="relative h-40 md:h-48 w-full">
				<Image
					alt={`image ${title}`}
					src={image}
					fill
					style={{
						objectFit: "cover",
					}}
					className="rounded-t-lg"
				/>
			</div>

			<div className="bg-white p-4 sm:p-6 h-full">
				<h3 className="mt-0.5 text-lg font-semibold">{title}</h3>
				<p className="line-clamp-3 text-sm text-gray-500">{description}</p>

				<div className="mt-1 space-x-3">
					<a
						href={demo}
						target="_blank"
						className="text-sky-500 hover:text-sky-700 rounded-full"
					>
						Demo {"->"}
					</a>

					<a
						href={process.env.NEXT_PUBLIC_GITHUB_URL + github}
						target="_blank"
						className="hover:text-gray-600"
					>
						<svg
							className="w-6 md:w-8 inline-flex"
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
		</article>
	);
}

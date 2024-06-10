import React from "react";

const Project = () => {
	return (
		<div
			id="project"
			className="min-h-screen pt-24 flex flex-col justify-center items-center"
		>
			<h1 className="text-5xl font-semibold border-b-2 mb-4 border-last inline-block">
				Project
			</h1>
			<div className="w-full flex justify-center">
				<div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 text-center">
					<a
						href="https://github.com/azzurif/portofolio"
						target="_blank"
						rel="noopener noreferrer"
						className="relative rounded-lg shadow transition hover:shadow-lg sm:w-80 md:w-auto h-60 overflow-hidden"
					>
						<img
							alt="Simple React Todolist"
							src="/todolist-demo.png"
							className="absolute inset-0 h-full w-full object-cover"
						/>

						<div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-gray-900/25"></div>

						<div className="relative p-3 sm:p-5 flex flex-col justify-end h-full">
							<h3 className="text-2xl text-white font-semibold">ToDo List</h3>
							<p className="text-sm text-gray-300">react</p>
						</div>
					</a>
					<a
						href="https://github.com/azzurif/Todolist-React"
						target="_blank"
						rel="noopener noreferrer"
						className="relative rounded-lg shadow transition hover:shadow-lg sm:w-80 md:w-auto h-60 overflow-hidden"
					>
						<img
							alt="Portofolio"
							src="/portofolio-demo.png"
							className="absolute inset-0 h-full w-full object-cover"
						/>

						<div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-gray-900/25"></div>

						<div className="relative p-3 sm:p-5 flex flex-col justify-end h-full">
							<h3 className="text-2xl text-white font-semibold">Portofolio</h3>
							<p className="text-sm text-gray-300">react</p>
						</div>
					</a>
					<a
						href="https://github.com/azzurif/ExpressJS-Supabase"
						target="_blank"
						rel="noopener noreferrer"
						className="relative rounded-lg shadow transition hover:shadow-lg sm:w-80 md:w-auto h-60 overflow-hidden"
					>
						<img
							alt="Simple Crud with ExpressJS"
							src="/crudExpress-demo.png"
							className="absolute inset-0 h-full w-full object-cover"
						/>

						<div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-gray-900/25"></div>

						<div className="relative p-3 sm:p-5 flex flex-col justify-end h-full">
							<h3 className="text-2xl text-white font-semibold">
								Simple CRUD Restful
							</h3>
							<p className="text-sm text-gray-300">express</p>
						</div>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Project;

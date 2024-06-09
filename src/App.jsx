import { Flowbite, Navbar } from "flowbite-react";
import React from "react";
import { FaEnvelope, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";

const App = () => {
	return (
		<div className="w-full">
			<Flowbite>
				<Navbar
					fluid
					className="py-6 md:inline-flex md:justify-center backdrop-blur-md text-center bg-transparent border-b-2 border-gray-300 w-screen fixed top-0 z-50"
				>
					<div className="flex md:order-2">
						<Navbar.Toggle />
					</div>
					<Navbar.Collapse>
						<Navbar.Link
							href="#home"
							className="text-base text-last hover:underline hover:underline-offset-8 "
						>
							Home
						</Navbar.Link>
						<Navbar.Link
							href="#about"
							className="text-base text-last hover:underline hover:underline-offset-8"
						>
							About
						</Navbar.Link>
						<Navbar.Link
							href="#project"
							className="text-base text-last hover:underline hover:underline-offset-8"
						>
							Projects
						</Navbar.Link>
						<Navbar.Link
							href="#contact"
							className="text-base text-last hover:underline hover:underline-offset-8"
						>
							Contact
						</Navbar.Link>
					</Navbar.Collapse>
				</Navbar>
				{/* Home */}
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
				{/* About */}
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
							I'm currently a student in 2 Depok High School and a junior
							Fullstack Web Developer with experience in developing fullstack
							web applications using technologies such as HTML, CSS, JavaScript,
							Node.js, React, and Laravel.
						</p>
					</div>
				</div>
				{/* Project */}
				<div
					id="project"
					className="min-h-screen pt-24 flex flex-col items-center"
				>
					<h1 className="text-last font-semibold border-b-2 mb-4 border-last inline-block">
						Project
					</h1>
					<div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 w-full text-center px-20">
						<a
							href="https://github.com/azzurif/portofolio"
							target="_blank"
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
								<p className=" text-sm text-gray-300">react</p>
							</div>
						</a>
						<a
							href="https://github.com/azzurif/Todolist-React"
							target="_blank"
							className="relative rounded-lg shadow transition hover:shadow-lg sm:w-80 md:w-auto h-60 overflow-hidden"
						>
							<img
								alt="Portofolio"
								src="/portofolio-demo.png"
								className="absolute inset-0 h-full w-full object-cover"
							/>

							<div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-gray-900/25"></div>

							<div className="relative p-3 sm:p-5 flex flex-col justify-end h-full">
								<h3 className="text-2xl text-white font-semibold">
									Portofolio
								</h3>
								<p className=" text-sm text-gray-300">react</p>
							</div>
						</a>
						<a
							href="https://github.com/azzurif/ExpressJS-Supabase"
							target="_blank"
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
								<p className=" text-sm text-gray-300">express</p>
							</div>
						</a>
					</div>
				</div>
				{/* Contact */}
				<div
					id="contact"
					className="min-h-screen pt-24 w-full flex flex-col justify-center items-center gap-10"
				>
					<h1 className="text-last font-semibold border-b-2 mb-4 border-last inline-block">
						Contact
					</h1>
					<div className="bg-gray-200 p-8 rounded-md sm:w-96 md:w-2/5 h-56 ">
						<div className="flex flex-col items-center space-y-4 m-auto">
							<a
								href="mailto:fairuzizuan019@gmail.com"
								className="text-lg text-gray-800 hover:text-gray-600 flex items-center space-x-2"
							>
								<FaEnvelope className="text-2xl" />
								<span>fairuzizuan019@gmail.com</span>
							</a>
							<a
								href="https://wa.me/081325667882"
								target="_blank"
								rel="noopener noreferrer"
								className="text-lg text-gray-800 hover:text-gray-600 flex items-center space-x-2"
							>
								<FaWhatsapp className="text-2xl" />
								<span>WhatsApp</span>
							</a>
							<a
								href="https://github.com/azzurif"
								target="_blank"
								rel="noopener noreferrer"
								className="text-lg text-gray-800 hover:text-gray-600 flex items-center space-x-2"
							>
								<FaGithub className="text-2xl" />
								<span>azzurif</span>
							</a>
							<a
								href="https://instagram.com/fairz.me"
								target="_blank"
								rel="noopener noreferrer"
								className="text-lg text-gray-800 hover:text-gray-600 flex items-center space-x-2"
							>
								<FaInstagram className="text-2xl" />
								<span>fairz.me</span>
							</a>
						</div>
					</div>
				</div>
			</Flowbite>
		</div>
	);
};

export default App;

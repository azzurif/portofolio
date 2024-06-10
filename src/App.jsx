import { Flowbite, Navbar } from "flowbite-react";
import React from "react";
import Home from "@/components/Home";
import About from "@/components/About";
import Skill from "@/components/Sklill";
import Project from "@/components/Project";
import Contact from "@/components/Contact";

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
							href="#skill"
							className="text-base text-last hover:underline hover:underline-offset-8"
						>
							Skills
						</Navbar.Link>
						<Navbar.Link
							href="#contact"
							className="text-base text-last hover:underline hover:underline-offset-8"
						>
							Contact
						</Navbar.Link>
					</Navbar.Collapse>
				</Navbar>

				<Home />
				<About />
				<Skill />
				<Project />
				<Contact />
			</Flowbite>
		</div>
	);
};

export default App;

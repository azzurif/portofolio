export default function Button({ className = "", children }) {
	return (
		<button
			type="button"
			className={`text-white bg-sky-800 outline-2 outline-offset-2 outline-sky-800 hover:bg-transparent hover:text-gray-800 md:font-medium rounded-full px-3 md:px-5 py-2.5 transition ease-in-out duration-75 delay-75 ${className}`}
		>
			{children}
		</button>
	);
}

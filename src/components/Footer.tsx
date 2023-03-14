const Footer = () => {
	return (
		<footer className="p-4 text-center text-sm text-gray-400">
			<p>Copyright © 2023 Daniel Thorp. All rights reserved.</p>
			<p>
				Made with{" "}
				<a href="https://astro.build/" className="text-blue-200">
					Astro
				</a>
				,{" "}
				<a href="https://reactjs.org/" className="text-blue-200">
					React
				</a>
				, and{" "}
				<a href="https://tailwindcss.com/" className="text-blue-200">
					Tailwind CSS
				</a>
				.
			</p>
		</footer>
	);
};

export default Footer;

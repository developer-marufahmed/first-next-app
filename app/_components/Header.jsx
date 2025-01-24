"use client";
import Link from "next/link";
import React from "react";

const Header = () => {
	const menuLinks = [
		{
			path: "/about",
			name: "About",
			icon: "",
			subMenu: [],
		},
		{
			path: "/careers",
			name: "Careers",
			icon: "",
			subMenu: [],
		},
		{
			path: "/services",
			name: "Services",
			icon: "",
			subMenu: [],
		},
		{
			path: "/blog",
			name: "Blog",
			icon: "",
			subMenu: [],
		},
	];

	return (
		<header className="bg-white dark:bg-[var(--background)] border-b border-gray-300 dark:border-gray-700 ">
			<div className="custom-container">
				<div className="flex h-16 items-center justify-between">
					{/* Logo */}
					<div className="flex-1 md:flex md:items-center md:gap-12">
						<Link href="/" className="text-gray-600 flex items-center gap-1">
							<span className="sr-only">Home</span>
							<svg
								id="logo-10"
								width="163"
								height="42"
								viewBox="0 0 163 42"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								{" "}
								<path
									d="M30.21 17.719C33.348 17.719 34.054 19.082 34.054 20.782C34.054 22.584 33.2 23.875 30.223 23.875C27.265 23.875 26.41 22.659 26.41 20.782C26.41 18.935 27.342 17.719 30.21 17.719Z"
									className="ccustom"
									fill="#394149"
								></path>{" "}
								<path
									d="M63.004 17.719C66.142 17.719 66.848 19.082 66.848 20.782C66.848 22.584 65.993 23.875 63.017 23.875C60.06 23.875 59.204 22.659 59.204 20.782C59.204 18.935 60.136 17.719 63.004 17.719Z"
									className="ccustom"
									fill="#394149"
								></path>{" "}
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M2.42676 38.5V3.047H161.005V38.5H2.42676ZM78.0048 36.5H159.005V5.047H78.0048V36.5ZM30.225 26.893C35.796 26.893 38.138 24.49 38.138 20.737C38.138 16.923 35.5 14.656 30.225 14.656C25.031 14.656 22.297 17.118 22.297 20.737C22.297 24.821 25.165 26.893 30.225 26.893ZM10.856 14.926V26.713H22.1V23.574H14.924V14.926H10.856ZM50.722 26.713L50.617 25.571C49.2561 26.5422 47.5997 27.0096 45.932 26.893C43.425 26.893 41.337 26.142 40.166 24.626C39.3936 23.5192 39.0036 22.1906 39.055 20.842C39.0111 19.5217 39.4146 18.2253 40.2 17.163C41.385 15.692 43.533 14.716 46.731 14.716C50.41 14.716 52.572 15.842 53.502 17.734C53.7016 18.1796 53.8189 18.6576 53.848 19.145H49.956C49.8579 18.8488 49.6754 18.5878 49.431 18.394C48.6557 17.88 47.7299 17.6423 46.803 17.719C46.2593 17.6531 45.7077 17.7033 45.1849 17.8664C44.6621 18.0295 44.1798 18.3017 43.77 18.665C43.3046 19.302 43.0861 20.0862 43.155 20.872C43.101 21.6217 43.3019 22.3677 43.725 22.989C44.1385 23.3743 44.6301 23.6661 45.1663 23.8449C45.7026 24.0236 46.2709 24.0851 46.833 24.025C47.9493 24.1158 49.0576 23.7715 49.926 23.064C50.1125 22.8308 50.2411 22.5566 50.301 22.264H46.113V19.731H53.95V26.713H50.722ZM63.019 26.893C68.589 26.893 70.932 24.49 70.932 20.737C70.932 16.923 68.2899 14.656 63.019 14.656C57.825 14.656 55.091 17.118 55.091 20.737C55.091 24.821 57.959 26.893 63.019 26.893Z"
									className="ccustom"
									fill="#394149"
								></path>{" "}
								<path
									d="M84.857 26.668V14.881H87.757V26.668H84.857Z"
									className="ccustom"
									fill="#394149"
								></path>{" "}
								<path
									d="M102.649 21.743C101.914 22.704 100.649 23.143 98.866 23.154C98.49 23.154 93.505 23.139 93.505 23.139V26.668H90.667V14.881H98.867C99.5242 14.8115 100.189 14.8812 100.817 15.0855C101.446 15.2899 102.024 15.6243 102.515 16.067C103.163 16.9112 103.478 17.9638 103.401 19.025C103.467 19.9902 103.202 20.9491 102.649 21.743ZM100.322 17.9C100.022 17.45 99.375 17.2 98.28 17.2H93.49V20.788H98.249C99.42 20.788 100.037 20.548 100.322 20.082C100.491 19.7537 100.564 19.384 100.532 19.016C100.557 18.6322 100.485 18.2483 100.322 17.9Z"
									className="ccustom"
									fill="#394149"
								></path>{" "}
								<path
									d="M111.764 26.848C106.418 26.848 104.782 24.848 104.782 22.869H107.815C107.815 23.845 109.151 24.581 111.899 24.581C114.631 24.581 115.352 24.1 115.352 23.319C115.352 22.448 114.812 22.178 112.274 21.893C111.774 21.848 110.413 21.683 109.902 21.608C106.302 21.202 104.916 20.136 104.916 18.229C104.916 16.217 106.944 14.701 111.343 14.701C116.118 14.701 117.95 16.578 117.95 18.53H114.95C114.95 17.539 113.824 16.968 111.166 16.968C108.433 16.968 107.848 17.343 107.848 18.079C107.848 18.845 108.448 19.085 111.348 19.43C112.009 19.521 113.48 19.686 113.885 19.73C116.949 20.045 118.33 21.156 118.33 23.123C118.325 25.466 116.223 26.848 111.764 26.848Z"
									className="ccustom"
									fill="#394149"
								></path>{" "}
								<path
									d="M126.87 26.833C122.952 26.833 120.399 25.286 120.399 22.033V14.881H123.266V22.073C123.266 23.56 124.483 24.55 126.99 24.55C129.257 24.55 130.609 23.62 130.609 22.073V14.881H133.447V22.3C133.447 25.257 131.074 26.833 126.87 26.833Z"
									className="ccustom"
									fill="#394149"
								></path>{" "}
								<path
									d="M148.987 26.668V18.8L145.308 26.668H142.516L138.942 18.8V26.668H136.242V14.881H139.9L143.954 23.86L148.098 14.881H151.698V26.668H148.987Z"
									className="ccustom"
									fill="#394149"
								></path>{" "}
							</svg>
						</Link>
					</div>

					<div className="md:flex md:items-center md:gap-12">
						{/* Menu Links */}
						<nav aria-label="Global" className="hidden md:block">
							<ul className="flex items-center gap-6 text-sm">
								{menuLinks?.map((item, index) => {
									return (
										<li key={index} className="group">
											<Link
												href={item?.path}
												className="text-gray-900 hover:text-gray-600 group-hover:scale-50 dark:text-white font-semibold transition dark:hover:text-white/75"
											>
												{item?.name}
											</Link>
										</li>
									);
								})}
							</ul>
						</nav>

						{/* Profile And Dashboard Menu */}
						<div className="hidden md:relative md:block group">
							<button
								type="button"
								className="overflow-hidden rounded-full border border-gray-300 shadow-inner"
							>
								<span className="sr-only">Toggle dashboard menu</span>

								<img
									src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
									alt=""
									className="size-10 object-cover"
								/>
							</button>

							<div
								className="group-hover:block hidden absolute end-0 z-10 w-56 divide-y divide-gray-100 dark:divide-gray-800 rounded-md border border-gray-100 dark:border-gray-700 bg-white dark:bg-[var(--background)] shadow-lg"
								role="menu"
							>
								<div className="p-2">
									<Link
										href="#"
										className="block rounded-lg px-4 py-2 text-sm text-gray-500 dark:text-white  hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-700"
										role="menuitem"
									>
										My profile
									</Link>

									<Link
										href="#"
										className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
										role="menuitem"
									>
										Billing summary
									</Link>

									<Link
										href="#"
										className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
										role="menuitem"
									>
										Team settings
									</Link>
								</div>

								<div className="p-2">
									<form onSubmit={(e) => e.preventDefault()}>
										<button
											type="submit"
											className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50"
											role="menuitem"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth="1.5"
												stroke="currentColor"
												className="size-4"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
												/>
											</svg>
											Logout
										</button>
									</form>
								</div>
							</div>
						</div>

						{/* Toggle Menu Bar */}
						<div className="block md:hidden">
							<button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="size-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth="2"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;

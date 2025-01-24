import Link from "next/link";

export default function Custom404() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
			<h1 className="text-6xl font-bold mb-4">404</h1>
			<p className="text-2xl">
				Oops! The page you're looking for doesn't exist.
			</p>
			<Link
				href="/"
				className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
			>
				Go Back Home
			</Link>
		</div>
	);
}

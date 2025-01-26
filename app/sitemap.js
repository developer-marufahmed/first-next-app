export default function sitemap() {
	return [
		{
			url: "https://my-first-nextjs-website.vercel.app",
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 1,
		},
		{
			url: "https://my-first-nextjs-website.vercel.app/about",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: "https://my-first-nextjs-website.vercel.app/blog",
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.5,
		},
	];
}

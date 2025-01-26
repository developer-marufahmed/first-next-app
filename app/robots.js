export default function robots() {
	return {
		rules: {
			userAgent: "*",
			allow: ["/"],
			disallow: ["/login/", "/sign-up/"],
		},
		sitemap: "https://my-first-nextjs-website.vercel.app/sitemap.xml",
	};
}

export default function robots() {
	return {
		rules: {
			userAgent: "*",
			allow: ["/"],
			disallow: ["/login/", "/sign-up/"],
		},
		sitemap: "https://acme.com/sitemap.xml",
	};
}

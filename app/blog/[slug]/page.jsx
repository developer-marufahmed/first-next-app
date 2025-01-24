import React from "react";

const Slug = async ({ params }) => {
	const slug = await params.slug;

	return <div>{slug}</div>;
};

export default Slug;

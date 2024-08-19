import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
	experimental: {
		mdxRs: false, // <- disabled
	},
};

const withMDX = createMDX({
	options: {
		remarkPlugins: [remarkGfm],
		rehypePlugins: [rehypePrettyCode],
	},
});

export default withMDX(nextConfig);

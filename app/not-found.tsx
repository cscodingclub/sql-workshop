import Link from "next/link";

export default function NotFound() {
	return (
		<div className="m-4">
			<div className="container mx-auto">
				<div className="max-w-4xl mx-auto bg-white p-4 py-8 shadow rounded-lg">
					<h2>Not Found</h2>
					<p>Could not find requested resource</p>
					<Link href={"/"}>Return Home</Link>
				</div>
			</div>
		</div>
	);
}

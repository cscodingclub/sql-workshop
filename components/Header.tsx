import Link from "next/link";

export const Header = () => {
	return (
		<>
			<div className="border-b-zinc-400 border fixed bg-white w-full top-0">
				<h1 className="lg:text-2xl p-4 font-bold">
					<Link href={"/"} className="text-sky-800 hover:text-sky-950">
						Complete Intro to SQL
					</Link>
				</h1>
			</div>
		</>
	);
};

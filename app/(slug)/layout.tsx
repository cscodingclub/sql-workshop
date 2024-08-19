import "./slug.css";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="p-8 bg-sky-100">
			<div className="container mx-auto">
				<div className="max-w-4xl mx-auto bg-white p-4 py-8 shadow rounded-lg">
					{children}
				</div>
			</div>
		</div>
	);
}

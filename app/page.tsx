import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="bg-sky-700 text-sky-50">
        <div className="container mx-auto">
          <div className="flex flex-col justify-center md:flex-row md:justify-between items-center w-full p-16">
            <div className="w-full">
              <h1 className="text-2xl lg:text-4xl">Complete Intro to SQL</h1>
              <h2 className="text-lg lg:text-xl my-2">and PostgreSQL</h2>
            </div>

            <div className="w-full flex place-content-center md:place-content-end p-4 m-4">
              <img
                className="rounded-full"
                width={180}
                height={180}
                src="/coding-club-logo.jpg"
                alt="logo"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 bg-sky-100">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-sky-950 font-bold text-2xl">Overview</h1>

            <div className="m-4">
              <div className="bg-white shadow-2xl rounded p-4 text-xl">
                <h1 className="text-3xl">Into</h1>
                <ul className="ml-8 p-2 list-disc">
                  <li className="underline text-sky-950 hover:text-sky-800">
                    <Link href={"/intro/overview"}>Welcome</Link>
                  </li>
                  <li className="underline text-sky-950 hover:text-sky-800">
                    <Link href={"/intro/database"}>Database and Sql</Link>
                  </li>
                  <li className="underline text-sky-950 hover:text-sky-800">
                    <Link href={"/intro/table"}>Tables</Link>
                  </li>
                  <li className="underline text-sky-950 hover:text-sky-800">
                    <Link href={"/intro/crud"}>CRUD</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="m-4">
              <div className="bg-white shadow-2xl rounded p-4 text-xl">
                <h1 className="text-3xl">Functions</h1>
                <ul className="ml-8 p-2 list-disc">
                  <li className="underline text-sky-950 hover:text-sky-800">
                    <Link href={"/functions/alter"}>Altering</Link>
                  </li>
                  <li className="underline text-sky-950 hover:text-sky-800">
                    <Link href={"/functions/built"}>Built in Functions</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="m-4">
              <div className="bg-white shadow-2xl rounded p-4 text-xl">
                <h1 className="text-3xl">Node</h1>
                <ul className="ml-8 p-2 list-disc">
                  <li className="underline text-sky-950 hover:text-sky-800">
                    <Link href={"/node"}>Node</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="m-4">
              <div className="bg-white shadow-2xl rounded p-4 text-xl">
                <h1 className="text-3xl">Final Project</h1>
                <ul className="ml-8 p-2 list-disc">
                  <li className="underline text-sky-950 hover:text-sky-800">
                    <Link href={"/project"}>Project</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import Link from "next/link";
import Instagram from "./Instagram";
import Github from "./Github";

export const Fotter = () => {
  return (
    <>
      <div className="bg-sky-700 text-sky-50">
        <div className="container mx-auto">
          <div className="flex place-content-center p-4 gap-4 items-center">
            <Link href={"/"}>
              <Github width={32} height={32} />
            </Link>
            <Link href={"/"}>
              <Instagram width={32} height={32} />
            </Link>

            <p className="font-bold">
              &quot;Rome was not build in one day, Keep Learning...&quot;
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

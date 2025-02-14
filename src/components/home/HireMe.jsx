import Link from "next/link";

function HireMe() {
  return (
    <div className="fixed left-4 bottom-0  flex items-center justify-center overflow-hidden">
      <div className="w-48 h-auto flex items-center justify-center relative">
        <img
          src="erasebg-transformed.png"
          className="animate-[spin_6s_linear_infinite]"
          alt="."
        />
        <Link
          href="mailto:abuahmada3@gmail.com"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white shadow-md border border-solid  border-black w-20 h-20 rounded-full hover:bg-white hover:text-black"
        >
          Hire me
        </Link>
      </div>
    </div>
  );
}
export default HireMe;

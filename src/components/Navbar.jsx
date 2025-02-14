"use client";
import Link from "next/link";
import Logo from "./home/Logo";
import { useRouter } from "next/navigation";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block  bg-black absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

function Navbar() {
  return (
    <nav className="flex items-center justify-between w-full px-32 py-8 font-medium">
      <h2 className="">
        <Link href={"/"}>AhmaduYaradua</Link>
      </h2>

      <nav className="">
        <CustomLink href={"/"} title="Home" className="mr-4" />

        <CustomLink href={"/about"} title="About" className="mx-4" />

        <CustomLink href={"/projects"} title="Projects" className="mx-4" />

        <CustomLink href={"/contact"} title="Contacts" className="ml-4" />
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </nav>
  );
}

export default Navbar;

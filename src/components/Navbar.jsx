"use client";
import Link from "next/link";
import Logo from "./home/Logo";
import { useRouter } from "next/navigation";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import { Sun, Moon } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group `}>
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

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };
  return (
    <button
      href={href}
      className={`${className} relative group text-white dark:text-black my-2`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[1px] inline-block  bg-white dark:bg-black absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </button>
  );
};

function Navbar() {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center border-b border-black dark:border-white dark:text-white bg-white relative dark:bg-black justify-between w-full px-10 py-8 font-medium">
      <h2 className="font-bold text-3xl animate-bounce">
        <Link href={"/"}>Ahmad Yar'adùa</Link>
      </h2>
      <button
        className="hidden lg:flex flex-col justify-center items-center"
        onClick={handleClick}
      >
        <span
          className={`bg-black dark:bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm -translate-y-0.5 ${
            isOpen ? "rotate-45 translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-black dark:bg-white block transition-all duration-300 ease-out my-1 h-0.5 w-6 rounded-sm ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-black dark:bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm translate-y-0.5 ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <div className="lg:hidden">
        <nav className="flex justify-center items-center text-xl">
          <CustomLink href={"/"} title="Home" className="mr-4" />

          <CustomLink href={"/about"} title="About" className="mx-4" />

          <CustomLink href={"/projects"} title="Projects" className="mx-4" />

          <CustomLink href={"/contact"} title="Contacts" className="ml-4" />

          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-10  items-center justify-center rounded-full p-1 ${
              mode === "light" ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            {mode === "dark" ? (
              <Sun className={""} />
            ) : (
              <Moon className={"fill-black"} />
            )}
          </button>
        </nav>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] bg-black/90 dark:bg-white/75 rounded-lg backdrop-blur-md py-32  z-30 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <nav className="flex flex-col justify-center items-center text-xl">
            <CustomMobileLink
              toggle={handleClick}
              href={"/"}
              title="Home"
              className=""
            />

            <CustomMobileLink
              toggle={handleClick}
              href={"/about"}
              title="About"
              className=""
            />

            <CustomMobileLink
              toggle={handleClick}
              href={"/projects"}
              title="Projects"
              className=""
            />

            <CustomMobileLink
              toggle={handleClick}
              href={"/contact"}
              title="Contacts"
              className=""
            />

            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`ml-10  items-center justify-center rounded-full p-1 ${
                mode === "light" ? "bg-black text-white" : "bg-white text-black"
              }`}
            >
              {mode === "dark" ? (
                <Sun className={""} />
              ) : (
                <Moon className={"fill-black"} />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </nav>
  );
}

export default Navbar;

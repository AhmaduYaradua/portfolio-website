"use client";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "./Layout";
import AnimatedText from "../AnimatedText";
import HireMe from "./HireMe";
import TransitionEffect from "../TransitionEffect";

function Hero() {
  const resume = "/Resume.pdf";
  return (
    <>
      <TransitionEffect />
      <main className="flex items-center text-black bg-white dark:bg-black w-full min-h-screen dark:text-white 2xl">
        <Layout className="pt-0 mx-16 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 relative md:w-full sm:mb-3  rounded-2xl border-2 border-solid border-black bg-white p-8 dark:bg-black dark:border-white">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%]  rounded-[2rem] bg-black dark:bg-white" />
              <img
                className="w-[35rem] h-[35rem] sm:h-auto lg:hidden md:inline-block md:w-full"
                src="myPhoto3.png"
                alt="."
              />
            </div>
            <div className="w-1/2 flex flex-col sm:ml-10 items-center self-center ml-10 lg:w-full lg:text-center">
              <AnimatedText
                text="Bringing Ideas to Life with Modern Web Solutions."
                className="!text-6xl !text-left lg:!text-center xl:!text-5xl lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 sm:hidden text-base font-medium md:text-sm sm:text-xs">
                I’m a full stack developer with a passion for building creative
                and efficient web applications. I specialize in React.js and the
                MERN stack, creating responsive and user-friendly designs. Check
                out my latest projects to see how I bring ideas to life with
                modern web technologies.
              </p>
              <div className="">
                <button className="border border-black dark:border-white bg-black text-white sm:w-auto 3 p-3 sm:p-2 rounded-full mr-2">
                  <Link href={resume} download="Resume.pdf" target={"_blank"}>
                    Download CV
                  </Link>
                </button>
                <button className="border sm:mr-4 sm:mt-2 border-black bg-white text-black 3 p-3 sm:p-2 sm:w-auto rounded-full ml-2">
                  <Link href="mailto:abuahmada3@gmail.com" target={"_blank"}>
                    Contact me
                  </Link>
                </button>
              </div>
              <div className="flex gap-2 ml-5 mt-4">
                <motion.a
                  href="https://github.com/AhmaduYaradua"
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github className="border rounded-full" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/ahmad-yaradua-074918142?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B42HyNPmfRiai1lMF7gIU4g%3D%3D"
                  whileHover={{ y: -4 }}
                >
                  <Linkedin className="border rounded-full" />
                </motion.a>
                <motion.a
                  href="https://x.com/Ahmadu_Yaradua"
                  whileHover={{ y: -4 }}
                >
                  <Twitter className="border rounded-full" />
                </motion.a>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-44  md:hidden lg:hidden">
          <img
            src="erasebg-transformed2.png"
            alt="."
            className="w-full h-auto bg-white dark:bg-black"
          />
        </div>
      </main>
    </>
  );
}

export default Hero;

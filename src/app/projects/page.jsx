"use client";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/home/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import { Github } from "lucide-react";
import Head from "next/head";
import Link from "next/link";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center p-12 rounded-br-2xl justify-between relative rounded-3xl border border-solid border-black bg-white shadow-2xl dark:bg-black dark:border-white lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem] bg-black dark:bg-white" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <img
          src={img}
          alt={title}
          className="w-full h-auto border-black dark:border-white"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-16 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-yellow-500 font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link href={link} target="_blank">
          <h2 className="my-2 w-full text-left text-4xl font-bold hover:underline dark:text-white sm:text-sm ">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-black dark:text-white sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link
            href={github}
            target="_blank"
            className="w-10 p-2 border-black bg-black text-white border dark:border-white rounded-full"
          >
            <Github />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-black text-white p-2 px-6 text-lg font-semibold border dark:border-white dark:bg-white dark:text-black sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-black bg-white p-6 relative dark:bg-black dark:border-white xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] rounded-br-3xl bg-black dark:bg-white md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <img src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4 ">
        <span className="text-yellow-500 font-medium text-xl lg:text-lg md:text-base">
          {type}
        </span>
        <Link href={link} target="_blank">
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl hover:underline dark:text-white">
            {title}
          </h2>
        </Link>

        <div className="w-full mt-2 flex items-center justify-between dark:text-white">
          <Link
            href={link}
            target="_blank"
            className=" text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <Link
            href={github}
            target="_blank"
            className="w-8 p-1 border-black bg-black text-white border rounded-full dark:border-white"
          >
            <Github />
          </Link>
        </div>
      </div>
    </article>
  );
};

function Projects() {
  return (
    <>
      <Head>
        <title>AhmaduYaradua | Projects Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination trumps knowledge"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                type="Featured project"
                title="E commerce mockup"
                summary="Koatz is an e commerce website mockup that entails key features of an e commerce project"
                img="koatz2.png"
                link="https://e-commerce-project-kappa-ten.vercel.app/"
                github="https://github.com/AhmaduYaradua/e-commerce-project.git"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Featured project"
                title="Architectural consulting app"
                img="enovaafri.png"
                link="https://enova-africa.vercel.app/"
                github="https://github.com/AhmaduYaradua/enova-africa.git"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Featured project"
                title="Health App"
                img="eat2wealth.png"
                link="https://eattowealth.com/"
                github="https://github.com/AhmaduYaradua/eat-to-wealth-project.git"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Featured project"
                title="Weather App"
                img="weatherApp.png"
                link="https://weather-app-project-two-green.vercel.app/"
                github="https://github.com/AhmaduYaradua/weather-app-project.git"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Featured project"
                title="Movie App"
                img="movieApp.png"
                link="https://react-hooks-checkpoint-sandy.vercel.app/"
                github="https://github.com/AhmaduYaradua/react-hooks-checkpoint.git"
              />
            </div>
            <div className="col-span-12 sm:col-span-12">
              <FeaturedProject
                type="Featured project"
                title="Asos checkout page mockup"
                summary="This is a checkout page mockup of Asos designed with pure Html,CSS and Javascript"
                img="adidas.png"
                link="https://dom-shopping-cart-project.vercel.app/"
                github="https://github.com/AhmaduYaradua/react-hooks-checkpoint.git"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}

export default Projects;

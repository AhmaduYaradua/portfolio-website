"use client";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/home/Layout";
import { Github } from "lucide-react";
import Head from "next/head";
import Link from "next/link";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center p-12 rounded-br-2xl justify-between relative rounded-3xl border border-solid border-black bg-white shadow-2xl dark:bg-black dark:border-white">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] rounded-br-3xl bg-black dark:bg-white" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <img
          src={img}
          alt={title}
          className="w-full h-auto border-black dark:border-white"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-16">
        <span className="text-yellow-500 font-medium text-xl">{type}</span>
        <Link href={link} target="_blank">
          <h2 className="my-2 w-full text-left text-4xl font-bold hover:underline dark:text-white">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-black dark:text-white">{summary}</p>
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
            className="ml-4 rounded-lg bg-black text-white p-2 px-6 text-lg font-semibold border dark:border-white"
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
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-black bg-white p-6 relative dark:bg-black dark:border-white">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] rounded-br-3xl bg-black dark:bg-white" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <img src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4 ">
        <span className="text-yellow-500 font-medium text-xl">{type}</span>
        <Link href={link} target="_blank">
          <h2 className="my-2 w-full text-left text-3xl font-bold hover:underline dark:text-white">
            {title}
          </h2>
        </Link>

        <div className="w-full mt-2 flex items-center justify-between dark:text-white">
          <Link
            href={link}
            target="_blank"
            className=" text-lg font-semibold underline"
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
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Imagination trumps knowledge" className="mb-16" />
          <div className="grid grid-cols-12 gap-24">
            <div className="col-span-12">
              <FeaturedProject
                type="Featured project"
                title="E commerce mockup"
                summary="Koatz is an e commerce website mockup that entails key features of an e commerce project"
                img="e-commerce.png"
                link="https://e-commerce-project-kappa-ten.vercel.app/"
                github="https://github.com/AhmaduYaradua/e-commerce-project.git"
              />
            </div>
            <div className="col-span-6">
              <Project
                type="Featured project"
                title="E commerce mockup"
                img="e-commerce.png"
                link="https://e-commerce-project-kappa-ten.vercel.app/"
                github="https://github.com/AhmaduYaradua/e-commerce-project.git"
              />
            </div>
            <div className="col-span-6">
              <Project
                type="Featured project"
                title="E commerce mockup"
                img="e-commerce.png"
                link="https://e-commerce-project-kappa-ten.vercel.app/"
                github="https://github.com/AhmaduYaradua/e-commerce-project.git"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type="Featured project"
                title="E commerce mockup"
                summary="Koatz is an e commerce website mockup that entails key features of an e commerce project"
                img="e-commerce.png"
                link="https://e-commerce-project-kappa-ten.vercel.app/"
                github="https://github.com/AhmaduYaradua/e-commerce-project.git"
              />
            </div>
            <div className="col-span-6">Project-3</div>
            <div className="col-span-6">Project-4</div>
          </div>
        </Layout>
      </main>
    </>
  );
}

export default Projects;

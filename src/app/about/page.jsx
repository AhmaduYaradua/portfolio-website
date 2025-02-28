"use client";
import Experience from "@/components/about/Experience";
import Skills from "@/components/about/Skills";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/home/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import { useInView, useSpring, useMotionValue } from "framer-motion";
import Head from "next/head";
import React, { useRef, useEffect } from "react";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

function About() {
  return (
    <div>
      <Head>
        <title>AhmaduYaradua | About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-white">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-black underline dark:text-white/75">
                Skillset and Design Knowledge
              </h2>
              <p className="font-medium">
                I am a full stack developer skilled in the MERN stack, with a
                focus on building responsive web applications using React.js and
                Tailwind CSS. I write clean, efficient code using JavaScript and
                TypeScript, and I leverage Next.js for fast, dynamic web
                experiences. My goal is to create intuitive user interfaces that
                are both functional and visually appealing.
              </p>
              <h2 className="mb-4 text-lg font-bold uppercase text-black pt-5 underline dark:text-white/75">
                Passion for Learning and AdaptabilityPassion for Learning and
                Adaptability
              </h2>
              <p className="my-4 font-medium">
                I am passionate about technology and always eager to learn new
                things. I stay updated with the latest tools and best practices
                in web development. I adapt quickly to new challenges and enjoy
                solving problems creatively, whether working in a team or on my
                own.
              </p>
              <h2 className="mb-4 text-lg font-bold uppercase text-black underline dark:text-white/75">
                Hobbies and Personal Interests
              </h2>
              <p className="font-medium">
                When I’m not coding, I enjoy exploring new gadgets and keeping
                up with tech trends. I also have a passion for photography and
                love watching movies and TV shows. These hobbies keep me
                inspired and help me stay creative in my work.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-black bg-white p-8 dark:bg-black dark:border-white xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-black dark:bg-white" />
              <img
                src="erasebg-transformed2.png"
                alt="."
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={2} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-black/75 dark:text-white/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Satisied clients
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={6} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-black/75 dark:text-white/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Projects completed
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={1} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-black/75 dark:text-white/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Years of experience
                </h2>
              </div>
            </div>
          </div>
          <Experience />
          <Skills />
        </Layout>
      </main>
    </div>
  );
}
export default About;

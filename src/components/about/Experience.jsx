import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcons from "./LiIcons";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mt-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcons reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;{" "}
          <a
            href={companyLink}
            target="_blank"
            className="text-yellow-500 capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-black/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2
        className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl
       md:mb-16"
      >
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-black dark:bg-white origin-top md:w-[2px] md:left-[30px] xs:left-[20px] "
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Frontend Developer intern"
            company="Megadel Africa"
            time="2025-present"
            companyLink="www.megadelafrica.com"
            address="Abuja,Nigeria"
            work="Work with a team responsible for developing and maintaining web applications including ..............."
          />
          <Details
            position="Software Engineer"
            company="Gomycode"
            time="2024-2025"
            companyLink="www.gomycode.com"
            address="Abuja,Nigeria"
            work="Work with a team responsible for developing and maintaining web applications including ..............."
          />
          <Details
            position="Junior Architect"
            company="Enova Synergy Limited,"
            time="2023-2024"
            companyLink="/"
            address="Abuja,Nigeria"
            work="Work with a team responsible for developing and maintaining web applications including ..............."
          />
          <Details
            position="Supervisory Roler"
            company="Afdin construction"
            time="2022-2023"
            companyLink="/"
            address="Katsina,Nigeria"
            work="Work with a team responsible for developing and maintaining web applications including ..............."
          />
        </ul>
      </div>
    </div>
  );
}
export default Experience;

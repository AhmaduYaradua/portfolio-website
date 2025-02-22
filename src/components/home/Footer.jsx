"use client";
import Link from "next/link";
import Layout from "./Layout";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";

function Footer() {
  return (
    <footer className="w-full border-t-2 border-solid border-black dark:border-white dark:text-white font-medium text-lg">
      <Layout className="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div className="flex gap-2 mt-2">
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
          <motion.a href="https://x.com/Ahmadu_Yaradua" whileHover={{ y: -4 }}>
            <Twitter className="border rounded-full" />
          </motion.a>
        </div>
        <Link href={"/"}>My Portfolio</Link>
      </Layout>
    </footer>
  );
}

export default Footer;

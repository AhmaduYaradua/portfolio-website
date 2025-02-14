import Link from "next/link";
import Layout from "./Layout";

function Footer() {
  return (
    <footer className="w-full border-t-2 border-solid border-black font-medium text-lg">
      <Layout className="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <Link href={"/"}>CodeBucks</Link>
        <Link href={"/"}>BucksCode</Link>
      </Layout>
    </footer>
  );
}

export default Footer;

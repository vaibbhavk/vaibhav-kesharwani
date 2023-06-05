import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import NextLink from "next/link";
import cn from "classnames";
import MobileMenu from "./MobileMenu";
import Footer from "./Footer";
import Link from "next/link";
import Image from "next/image";

function NavItem({ href, text, target }) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink
      href={href}
      target={target}
      className={cn(
        isActive
          ? "font-semibold text-gray-800 dark:text-gray-200"
          : "font-normal text-gray-600 dark:text-gray-400",
        "hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all"
      )}
    >
      <span className="capsize">{text}</span>
    </NextLink>
  );
}

export default function Container(props) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: "VK – Student, Developer, Data Scientist.",
    description: `Student, Developer, Data Scientist.`,
    ...customMeta,
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col justify-center px-5">
        <nav className="flex items-center justify-between w-full relative max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pt-8 pb-8 sm:pb-16  text-gray-900 bg-gray-50  dark:bg-gray-900 bg-opacity-60 dark:text-gray-100">
          <a href="#skip" className="skip-nav">
            Skip to content
          </a>

          <Link href="/">
            <Image
              src="/vk.png"
              alt="VK"
              width={45}
              height={45}
              style={{ width: "auto", height: "auto" }}
            />
          </Link>

          <p className="flex-1"></p>
          <div className="ml-[-0.60rem]">
            <MobileMenu />
            <NavItem href="/" text="About" />
            <NavItem href="/skills" text="Skills" />
            <NavItem href="/projects" text="Projects" />
            {/* <NavItem href="/services" text="Services" /> */}
            <NavItem
              href="https://drive.google.com/file/d/1tnIbMBPrvJI1TN23x6Gkc_iQzcZ5W89y/view?usp=sharing"
              target="_black"
              text="Resume"
            />

            {/* <NavItem href="/certs" text="Certifications" /> */}
            {/* <NavItem href="/honors" text="Honors & Awards" /> */}
            {/* <NavItem href="/contact" text="Hire Me" /> */}
          </div>
        </nav>
      </div>
      <main
        id="skip"
        className="flex flex-col justify-center px-5 bg-gray-50 dark:bg-gray-900"
      >
        {children}
        <Footer />
      </main>
    </div>
  );
}

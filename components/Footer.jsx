import Link from "next/link";

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link
            href="/"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            About
          </Link>
          <Link
            href="/skills"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            Skills
          </Link>
          <Link
            href="/projects"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            Projects
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://www.linkedin.com/in/vaibhav-kesharwani-5b8137111/">
            Linkedin
          </ExternalLink>
          <ExternalLink href="https://github.com/vaibbhavk">
            GitHub
          </ExternalLink>
          <ExternalLink href="https://drive.google.com/file/d/1tnIbMBPrvJI1TN23x6Gkc_iQzcZ5W89y/view?usp=sharing">
            Resume
          </ExternalLink>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://www.fiverr.com/vaibbhavvk?public_mode=true">
            Fiverr
          </ExternalLink>
          <ExternalLink href="https://www.upwork.com/freelancers/~01e98ab6fa7c516372">
            Upwork
          </ExternalLink>
          <ExternalLink href="https://www.freelancer.in/u/vaibbhavvk">
            Freelancer
          </ExternalLink>
        </div>
        {/* <div className="flex flex-col space-y-4">
          <Link
            href="/uses"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            Uses
          </Link>
          <Link
            href="/guestbook"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            Guestbook
          </Link>
          <Link
            href="/snippets"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            Snippets
          </Link>
          <Link
            href="/tweets"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            Tweets
          </Link>
        </div> */}
      </div>
    </footer>
  );
}

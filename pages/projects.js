import Container from "../components/Container";
import ProjectCard from "../components/ProjectCard";
import { allProjectsQuery } from "../lib/queries";
import { urlForImage } from "../lib/sanity";
import { sanityClient } from "../lib/sanity-server";

const gradients = [
  "from-[#D8B4FE] to-[#818CF8]",
  "from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]",
  "from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]",
];

export default function Projects({ projects = [] }) {
  return (
    <Container
      title="Projects - Vaibhav Kesharwani"
      description="A collection of my projects."
    >
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
          Projects
        </h1>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          Here are some of the projects that I enjoyed building from scratch.
          Web, Android, Machine Learning, Business Analytics and Business Data Management.
        </p>

        <div className="grid mt-4 gap-4 w-full">
          {projects.map((p, index) => (
            <ProjectCard
              key={index}
              name={p.name}
              desc={p.desc}
              logo={urlForImage(p.logo).url()}
              url={p.url ? p.url : null}
              github={p.github ? p.github : null}
              tech={p.tech}
              gradient={gradients[index % gradients.length]}
            />
          ))}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/vaibbhavk?tab=repositories"
            className="flex items-center mt-4 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6"
          >
            View all projects
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-6 w-6 ml-1"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
              />
            </svg>
          </a>
        </div>
      </div>
      <span className="h-16" />
    </Container>
  );
}

export async function getStaticProps() {
  try {
    const projects = await sanityClient.fetch(allProjectsQuery);

    return { props: { projects } };
  } catch (error) {
    console.log(error.message);

    return { props: {} };
  }
}

import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "../components/Container";
import {
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import { SiFreelancer, SiFiverr, SiUpwork, SiGmail } from "react-icons/si";
import { MdLocationPin, MdOutlinePictureAsPdf, MdEmail } from "react-icons/md";
import EducationCard from "../components/EducationCard";
import ExperienceCard from "../components/ExperienceCard";
import { sanityClient } from "../lib/sanity-server";
import { allEducationsQuery, allExperiencesQuery } from "../lib/queries";

const Home = ({ educations = [], experiences = [] }) => {
  return (
    <Suspense fallback={null}>
      <Container>
        <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
          <div className="flex flex-col-reverse sm:flex-row items-start">
            <div className="flex flex-col pr-8">
              <h1 className="font-bold text-2xl md:text-4xl tracking-tight mb-1 text-black dark:text-white">
                Vaibhav Kesharwani
              </h1>

              <div className="flex items-center mb-1">
                <MdEmail size="1em" />

                <p className="ml-1 text-gray-600 dark:text-gray-400 text-sm">
                  vaibhav.vk2128@gmail.com
                </p>
              </div>
              <div className="flex items-center mb-1">
                <MdLocationPin size="1em" />
                <p className="ml-1 text-gray-600 dark:text-gray-400 text-sm">
                  Gwalior, Madhya Pradesh, India
                </p>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-16">
                Computer Science Student | Web Developer | Android Developer |
                Freelancer | Data Scientist
              </p>
            </div>
            <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
              <Image
                alt="Vaibhav Kesharwani"
                height={176}
                width={176}
                src="/dp.jpg"
                sizes="30vw"
                priority
                className="rounded-full filter"
              />
            </div>
          </div>

          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
            Links
          </h3>
          <div className="flex">
            <a href="mailto:vaibhav.vk2128@gmail.com">
              <SiGmail
                className="transition ease-in-out hover:-translate-y-1 hover:scale-110"
                size="2em"
                color="#FD2606"
              />
            </a>
          </div>
          <div className="flex mt-3">
            <a
              href="https://www.linkedin.com/in/vaibhav-kesharwani/"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-6"
            >
              <FaLinkedinIn
                className="transition ease-in-out hover:-translate-y-1 hover:scale-110"
                size="2em"
                color="#0A66C2"
              />
            </a>
            <a
              href="https://github.com/vaibbhavk"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-6"
            >
              <FaGithub
                className="transition ease-in-out hover:-translate-y-1 hover:scale-110"
                size="2em"
                color="#181717"
              />
            </a>
            <a
              href="https://wa.me/8770911462"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-6"
            >
              <FaWhatsapp
                className="transition ease-in-out hover:-translate-y-1 hover:scale-110"
                size="2em"
                color="#25D366"
              />
            </a>{" "}
            <a
              href="https://www.instagram.com/vk_2128/"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-6"
            >
              <FaInstagram
                className="transition ease-in-out hover:-translate-y-1 hover:scale-110"
                size="2em"
                color="#E4405F"
              />
            </a>
            <a
              href="https://www.facebook.com/vaibhav.vk28/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook
                className="transition ease-in-out hover:-translate-y-1 hover:scale-110"
                size="2em"
                color="#1877F2"
              />
            </a>
          </div>

          <div className="flex mt-3">
            <a
              href="https://www.fiverr.com/vaibbhavvk?public_mode=true"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-6"
            >
              <SiFiverr
                className="transition ease-in-out hover:-translate-y-1 hover:scale-110"
                size="2em"
                color="#1DBF73"
              />
            </a>
            <a
              href="https://www.upwork.com/freelancers/~01e98ab6fa7c516372"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-6"
            >
              <SiUpwork
                className="transition ease-in-out hover:-translate-y-1 hover:scale-110"
                size="2em"
                color="#6FDA44"
              />
            </a>
            <a
              href="https://www.freelancer.in/u/vaibbhavvk"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-6"
            >
              <SiFreelancer
                className="transition ease-in-out hover:-translate-y-1 hover:scale-110"
                size="2em"
                color="#29B2FE"
              />
            </a>{" "}
          </div>

          <div className="flex items-center justify-center mt-3 mb-16 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6">
            <p className="text-sm">Resume</p>
            <Link
              href="https://drive.google.com/file/d/1tnIbMBPrvJI1TN23x6Gkc_iQzcZ5W89y/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdOutlinePictureAsPdf
                size="2em"
                className="ml-1 transition ease-in-out hover:-translate-y-1 hover:scale-110"
              />
            </Link>
          </div>

          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
            Education
          </h3>
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 items-start mb-16">
            {educations.map((e, index) => (
              <EducationCard
                key={index}
                name={e.name}
                college={e.college}
                location={e.location}
                date={e.date}
              />
            ))}
          </div>

          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
            Experience
          </h3>
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-1 items-start">
            {experiences.map((e, index) => (
              <ExperienceCard
                key={index}
                name={e.name}
                company={e.company}
                type={e.type}
                location={e.location}
                done={e.done}
                date={e.date}
                tech={e.tech}
              />
            ))}
          </div>
        </div>
        <span className="h-16" />
      </Container>
    </Suspense>
  );
};

export default Home;

export async function getStaticProps() {
  try {
    const educations = await sanityClient.fetch(allEducationsQuery);
    const experiences = await sanityClient.fetch(allExperiencesQuery);

    return { props: { educations, experiences } };
  } catch (error) {
    console.log(error.message);

    return { props: {} };
  }
}

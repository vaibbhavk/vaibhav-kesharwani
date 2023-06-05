import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import fetcher from "../lib/fetcher";
import useSWR from "swr";
import DownArrowIcon from "./DownArrowIcon";
import UpArrowIcon from "./UpArrowIcon";
import GithubValue from "./GithubValue";

const GithubStats = ({ question, answer }) => {
  const { data, error } = useSWR("/api/github", fetcher);
  const followers = data?.numFollowers ?? null;
  const profile = data?.githubProfile ?? null;
  const repos = data?.numRepos ?? null;
  const forks = data?.forksCount ?? null;
  const privateRepos = data?.privateCount ?? null;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {profile ? (
        <motion.div>
          <AnimatePresence>
            <motion.div
              key="question"
              className="rounded-tl-md relative z-20 shadow-sm p-1 bg-blue-900 cursor-pointer border-l-2 border-yellow-500 text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              <motion.div className="flex items-center justify-start font-bold ml-1 p-1">
                <div className="flex-1 md:flex-none">
                  <Image src="/github.png" alt="" height={25} width={25} />
                </div>

                <p className="mx-3 flex-1 hidden md:block">{profile.login}</p>
                <div className="ml-1 md:ml-0">
                  {isOpen ? <UpArrowIcon /> : <DownArrowIcon />}
                </div>
              </motion.div>
            </motion.div>

            {isOpen && (
              <motion.div
                key="answer"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                  },
                }}
                exit={{ opacity: 0 }}
                className="text-lg text-gray border-l-2 border-b-2 border-yellow-500"
              >
                <div className="flex items-center text-lg shadow bg-white p-3 justify-start">
                  <Image
                    src={profile.avatar_url}
                    alt=""
                    height={50}
                    width={50}
                  />
                  <div className="mx-3 flex flex-col items-start justify-center">
                    <p className="font-bold">{profile.name}</p>
                    <a
                      className="hover:underline text-blue-600"
                      href={profile.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {profile.login}
                    </a>
                  </div>
                </div>
                <div className="flex items-center justify-start text-lg shadow bg-white">
                  <GithubValue
                    head="Public Repos"
                    value={profile.public_repos}
                  />
                  <GithubValue head="Followers" value={profile.followers} />
                  <GithubValue head="Following" value={profile.following} />
                </div>
                <div className="flex items-center justify-start text-lg shadow bg-white">
                  <GithubValue head="Private Repos" value={privateRepos} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default GithubStats;

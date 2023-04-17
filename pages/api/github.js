const github = async (req, res) => {
  const headers = {
    Authorization: "Token " + process.env.GITHUB_KEY,
  };

  // github profile
  const url1 = "https://api.github.com/user";
  const response1 = await fetch(url1, { headers: headers });
  const json1 = await response1.json();
  const githubProfile = json1;

  // followers
  const url2 = "https://api.github.com/users/vaibbhavk/followers";
  const response2 = await fetch(url2, { headers: headers });
  const json2 = await response2.json();
  const numFollowers = Object.keys(json2).length;

  // repos
  const url3 = "https://api.github.com/user/repos";
  const response3 = await fetch(url3, { headers: headers });
  const json3 = await response3.json();
  const numRepos = Object.keys(json3).length;

  // forks and private repos
  let forksCount = 0;
  let privateCount = 0;
  json3.forEach((r) => {
    r.private && privateCount++;
    r.fork && forksCount++;
  });

  return res.status(200).json({
    githubProfile,
    numFollowers,
    numRepos,
    forksCount,
    privateCount,
  });
};

export default github;

const GithubValue = ({ head, value }) => {
  return (
    <div className="flex flex-col justify-center items-center p-3">
      <p className="text-blue-900">{head}</p>
      <p className="font-bold">{value}</p>
    </div>
  );
};

export default GithubValue;

import Container from "../components/Container";

export default function NotFound() {
  return (
    <Container
      title="404: This page could not be found"
      description="This page could not be found."
    >
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          404
        </h1>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          This page could not be found. Maybe you have typed a wrong address.
          Try navigating somewhere else.
        </p>
      </div>
      <span className="h-16" />
    </Container>
  );
}

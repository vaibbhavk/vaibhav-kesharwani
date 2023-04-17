import Container from "../components/Container";

export default function Services() {
  return (
    <Container
      title="Services - Vaibhav Kesharwani"
      description="A list of my services."
    >
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          Services
        </h1>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          These are the services that I offer as a Freelancer. Web Development,
          Mobile App Development, Business Analytics and more...
        </p>

        <div className="grid mt-4 gap-4 w-full">
          <p>Yet to be designed.</p>
        </div>
      </div>
      <span className="h-16" />
    </Container>
  );
}

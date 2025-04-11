import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export default function IndiePro() {
  const projects = [
    {
      title: "Pexelper",
      description:
        "A powerful image search and manipulation tool that helps developers and designers find and process high-quality images seamlessly.",
      link: "https://pexelper.vercel.app",
      image: "/projects/pexelper-cover.jpg",
    },
    {
      title: "Code Timer",
      description:
        "An intelligent coding productivity tool that helps developers track and optimize their coding sessions with detailed analytics and insights.",
      link: "https://codetimer.vercel.app",
      image: "/projects/codetimer-cover.jpg",
    },
    {
      title: "Mentor",
      description:
        "A platform connecting aspiring developers with experienced mentors, facilitating knowledge sharing and career growth in the tech industry.",
      link: "https://mentor-platform.vercel.app",
      image: "/projects/mentor-cover.jpg",
    },
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Featured Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card
            key={project.title}
            className="overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative h-48 w-full">
              <Image
                src={project.image}
                alt={`${project.title} preview`}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-3">{project.title}</h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <Link
                href={project.link}
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

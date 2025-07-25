import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export default function IndiePro() {
  const projects = [
    {
      title: "Lystica",
      description:
      "A database platform where you can run your email marketing campaigns, manage your contacts, and track your performance metrics.",
      link: "https://lystica.cloud",
      image: "/projects/lys.png",
    },
    {
      title: "DevCircle Africa",
      description:
        "A community-driven platform that connects African developers, providing resources, networking opportunities, and collaborative projects to foster growth and innovation.",
      link: "https://devcircleafrica.com",
      image: "/projects/devc.png",
    },
    {
      title: "LinkSnap",
      description:
      "A simple way to create and share your ebusiness card with a single link. It allows you to showcase your business, products, and services in a visually appealing way.",
      link: "https://preview--link-in-a-snap.lovable.app/",
      image: "/projects/link.png",
    },
     {
      title: "PixelPer",
      description:
        "A platform that allows you to create and share your own pixel art, with a focus on community engagement and collaboration.",
      link: "https://pixelper.lupleg.org/",
      image: "/projects/pix.png",
    },
    {
      title: "Code Timer",
      description:
        "An intelligent coding productivity tool that helps developers track and optimize their coding sessions with detailed analytics and insights.",
      link: "https://timer.lupleg.org/",
      image: "/projects/code.png",
    },
    {
      title: "Mentor",
      description:
        "A platform connecting aspiring developers with experienced mentors, facilitating knowledge sharing and career growth in the tech industry.",
      link: "https://mentor.lupleg.org/auth",
      image: "/projects/mentor.png",
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
                className="inline-block bg-black text-white px-4 py-2 rounded-md hover:bg-black transition-colors"
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

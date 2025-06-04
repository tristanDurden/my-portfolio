import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const portfolioItems = [
  { 
    title: "NewGen - Marketing Agency", 
    url: "https://www.newgen-usa.com/",
    thumbnail: "/newgen_thumbnail.png",
    description: "A modern marketing agency website built with Wix"
  },
  { 
    title: "Project Two", 
    url: "#",
    thumbnail: "/window.svg",
    description: "Description of project two"
  },
  { 
    title: "Project Three", 
    url: "#",
    thumbnail: "/file.svg",
    description: "Description of project three"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10 text-center">My Work</h2>
        <div className="grid md:grid-cols-3 gap-15">
          {portfolioItems.map((item, index) => (
            <a 
              key={index} 
              href={item.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block transition-transform hover:scale-105"
            >
              <Card className="h-full hover:shadow-xl transition-shadow cursor-pointer overflow-hidden">
                <div className="relative w-full h-48">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
} 
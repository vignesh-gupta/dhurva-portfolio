import ProjectCard, { ProjectCardProps } from "../project-card";
import { Card, CardContent, CardHeader } from "../ui/card";
import { ScrollArea } from "../ui/scroll-area";

const PROJECTS: ProjectCardProps[] = [
  {
    title: "Project 1",
    description: "Description for project 1",
    codeLink: "https://github.com",
    liveLink: "https://example.com",
    imageUrl: "/project.png",
  },
  {
    title: "Project 1",
    description: "Description for project 1",
    codeLink: "https://github.com",
    liveLink: "https://example.com",
    imageUrl: "/project.png",
  },
  {
    title: "Project 1",
    description: "Description for project 1",
    codeLink: "https://github.com",
    liveLink: "https://example.com",
    imageUrl: "/project.png",
  },
  {
    title: "Project 1",
    description: "Description for project 1",
    codeLink: "https://github.com",
    liveLink: "https://example.com",
    imageUrl: "/project.png",
  },
  {
    title: "Project 1",
    description: "Description for project 1",
    codeLink: "https://github.com",
    liveLink: "https://example.com",
    imageUrl: "/project.png",
  },
];

const Projects = () => {
  return (
    <Card className="size-full border-none overflow-y-auto">
      <CardHeader>
        <h3 className="tracking-tight font-medium text-lg">Works</h3>
      </CardHeader>
      <ScrollArea className="h-11/12">
        <CardContent className="grid md:grid-cols-2 gap-4 p-4">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={`project-${project.title}-${i}`} {...project} />
          ))}
        </CardContent>
      </ScrollArea>
    </Card>
  );
};

export default Projects;

import React from "react";
import { Card } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { BsGithub } from "react-icons/bs";
import { GlobeIcon } from "lucide-react";
import Link from "next/link";

export type ProjectCardProps = {
  title: string;
  description: string;
  codeLink: string;
  liveLink: string;
  imageUrl: string;
};

const ProjectCard = ({
  title,
  description,
  imageUrl,
  liveLink,
  codeLink,
}: ProjectCardProps) => {
  return (
    <Card className="aspect-video size-full p-0 relative overflow-hidden group/project">
      <Image src={imageUrl} alt="Project" fill className="object-cover" />

      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/project:opacity-100 transition-all duration-300 flex flex-col items-center justify-center text-white text-lg font-semibold">
        {title}
        <p className="text-sm ">{description}</p>
        <div className="mt-2 space-x-2">
          <Button size="sm" asChild>
            <Link href={codeLink} target="_blank" rel="noopener noreferrer">
              <BsGithub className="size-4 mr-1" /> Code
            </Link>
          </Button>
          <Button size="sm" asChild>
            <Link href={liveLink} target="_blank" rel="noopener noreferrer">
              <GlobeIcon className="size-4 mr-1" /> Live
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;

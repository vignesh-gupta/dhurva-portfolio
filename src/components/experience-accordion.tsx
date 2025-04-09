import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";
import { Avatar, AvatarImage } from "./ui/avatar";
import Link from "next/link";
import { SquareArrowOutUpRightIcon } from "lucide-react";

export type ExperienceAccordionProps = {
  iconUrl: string;
  title: string;
  company: string;
  website: string;
  period: string;
  description: string;
};

const ExperienceAccordion = ({
  title,
  company,
  description,
  iconUrl,
  period,
  website,
}: ExperienceAccordionProps) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="items-center">
          <div className="flex flex-col gap-4 w-full">
            <div className="flex items-center gap-2">
              <Avatar className="size-6">
                <AvatarImage src={iconUrl} alt="shadcn" />
              </Avatar>
              {title}
            </div>
            <div className="text-muted-foreground">
              {period} •{" "}
              <Link href={website} target="_blank" rel="noopener noreferrer" className="text-[#0070f3] hover:underline inline-flex items-center gap-1">
                {company} <SquareArrowOutUpRightIcon className="size-3" />
              </Link>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground">
          {description}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ExperienceAccordion;

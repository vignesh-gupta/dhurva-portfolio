import React from "react";
import { Card } from "../ui/card";
import ExperienceAccordion, {
  ExperienceAccordionProps,
} from "../experience-accordion";

const WORK_EXPERIENCE: ExperienceAccordionProps[] = [
  {
    iconUrl: "/image.png",
    title: "Product Designer",
    website: "https://www.example.com",
    company: "Example Inc.",
    period: "2021 - now",
    description:
      "Worked on various projects, focusing on user experience and interface design.",
  },
  {
    iconUrl: "/image.png",
    title: "Product Designer Intern",
    website: "https://www.example.com",
    company: "Example Inc.",
    period: "2021 - now",
    description:
      "Worked on various projects, focusing on user experience and interface design.",
  },
];

const WorkExperience = () => {
  return (
    <Card className="p-[20px] gap-4 flex-1 overscroll-y-auto">
      <h3 className="tracking-tight font-medium text-content-primary">
        Work history
      </h3>

      {WORK_EXPERIENCE.map((experience, i) => (
        <ExperienceAccordion
          key={`experience-${experience.website}-${experience.title}-${i}`}
          {...experience}
        />
      ))}
    </Card>
  );
};

export default WorkExperience;

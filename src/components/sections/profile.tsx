import React from "react";
import { Card } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Separator } from "../ui/separator";
import { BsLinkedin, BsTwitterX } from "react-icons/bs";
import Link from "next/link";
import { CloudDownload } from "lucide-react";

const SOCIAL_LINKS = [
  {
    icon: BsTwitterX,
    href: "https://x.com/",
  },
  {
    icon: BsLinkedin,
    href: "https://linkedin.com/",
  },
];

const Profile = () => {
  return (
    <Card className="p-[20px] gap-4">
      <div className="flex items-center flex-row gap-4">
        <Avatar className="size-10">
          <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <span className="tracking-tight text-16 text-content-primary">
          Dhruva Raval
        </span>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-15 text-muted-foreground">
          Product designer with six years in the field and a strong foundation
          in software engineering, spanning industries such as incorporation,
          insurance, banking, and education
        </span>
      </div>
      <Separator />

      <div className="flex justify-between items-center ">
        <div className="flex gap-2.5">
          {SOCIAL_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <link.icon className="size-4 text-muted-foreground hover:text-primary transition" />
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-center bg-secondary rounded-full p-2 text-muted-foreground hover:text-primary transition">
          <CloudDownload className="size-4" />
        </div>
      </div>
    </Card>
  );
};

export default Profile;

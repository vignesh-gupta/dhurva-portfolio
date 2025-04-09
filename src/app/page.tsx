import Profile from "@/components/sections/profile";
import WorkExperience from "@/components/sections/work-experience";
import { ModeToggle } from "@/components/theme-switch";

export default function Home() {
  return (
    <main className="group size-full grid grid-cols-12 gap-1.5 p-[10px]">
      <div className="col-span-6 lg:col-span-3 space-y-1 flex flex-col gap-2">
        <Profile />

        <WorkExperience />
      </div>
      <div className="col-span-6 lg:grid-cols-9">
        Main Content
        <ModeToggle />
      </div>
    </main>
  );
}

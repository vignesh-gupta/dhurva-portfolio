import Profile from "@/components/sections/profile";
import Projects from "@/components/sections/projects";
import WorkExperience from "@/components/sections/work-experience";

export default function Home() {
  return (
    <main className="group size-full grid md:grid-cols-12 gap-1.5 p-[10px]">
      <div className="md:col-span-4 lg:col-span-3 space-y-1 flex flex-col gap-2">
        <Profile />
        <WorkExperience />
      </div>
      <div className="md:col-span-8 lg:col-span-9">
        <Projects />
      </div>
    </main>
  );
}

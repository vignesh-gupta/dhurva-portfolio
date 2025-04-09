import Profile from "@/components/profile";
import { ModeToggle } from "@/components/theme-switch";

export default function Home() {
  return (
    <main className="group size-full grid grid-cols-12 gap-[5px] p-[10px]">
      <div className="col-span-6 lg:col-span-3">
        <Profile />
      </div>
      <div className="col-span-6 lg:grid-cols-9">Main Content
        <ModeToggle />
      </div>
    </main>
  );
}

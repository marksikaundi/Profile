import { techStack } from "@/lib/profile-data";
import type { IconType } from "react-icons";

function TechIcon({ icon: Icon, label }: { icon: IconType; label: string }) {
  return (
    <div
      title={label}
      className="flex h-11 w-11 items-center justify-center rounded-lg border border-border/60 bg-background text-orange-600 transition-all hover:border-orange-300 hover:bg-orange-50 hover:shadow-sm dark:hover:border-orange-800 dark:hover:bg-orange-950/30"
    >
      <Icon className="size-5" />
    </div>
  );
}

export function TechStack() {
  return (
    <div className="grid grid-cols-6 gap-2 sm:grid-cols-8 md:grid-cols-6 lg:grid-cols-8">
      {techStack.map((tech) => (
        <TechIcon key={tech.label} icon={tech.icon} label={tech.label} />
      ))}
    </div>
  );
}

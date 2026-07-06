import { socialLinks } from "@/lib/profile-data";
import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";

export function SocialLinks() {
  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
      {socialLinks.map((social) => (
        <Link
          key={social.href}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 rounded-xl border border-border/60 bg-background px-4 py-3 transition-all hover:border-orange-300 hover:bg-orange-50 dark:hover:border-orange-800 dark:hover:bg-orange-950/30"
        >
          <social.icon className="size-4 shrink-0 text-orange-600" />
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium">{social.label}</p>
            <p className="truncate text-xs text-muted-foreground">
              {social.handle}
            </p>
          </div>
          <HiArrowUpRight className="size-3.5 shrink-0 text-muted-foreground opacity-0 transition-all group-hover:text-orange-600 group-hover:opacity-100" />
        </Link>
      ))}
    </div>
  );
}

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  label?: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({
  label,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("space-y-1", className)}>
      {label && (
        <p className="text-xs font-medium uppercase tracking-widest text-orange-600">
          {label}
        </p>
      )}
      <h2 className="text-lg font-semibold tracking-tight md:text-xl">
        {title}
      </h2>
      {description && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}
    </div>
  );
}

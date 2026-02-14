import { Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { EMAIL } from "@/constants";

const MobileActionBar = () => {
  const mailHref = `mailto:${EMAIL}`;

  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-50">
      <div className="mx-4 mb-4 rounded-md border-2 border-border bg-background/90 backdrop-blur portfolio-glow">
        <div className="flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-4">
            <a
              href={mailHref}
              aria-label="Email"
              className={cn(
                "text-foreground/80 hover:text-primary",
                "transition-all duration-200 p-2 ring-1 ring-border rounded-md"
              )}
            >
              <Mail size={20} />
            </a>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileActionBar;

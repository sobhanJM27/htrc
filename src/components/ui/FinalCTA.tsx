import Button from "@/components/ui/Button";
import {
  bgGradient2,
  shadows,
  textBody3,
  textTitle2,
} from "@/constants/styles";
import { cn } from "@/lib/utils";
import { Reveal } from "@/utils/reveal";

const FinalCTA = () => {
  return (
    <section className="relative py-12 px-6">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden rounded-full">
        <div className="h-75 w-75 rounded-full bg-primary/10 blur-[100px]" />
      </div>

      <Reveal delay={200} side="bottom">
        <div
          className={cn(
            "relative max-w-3xl mx-auto overflow-hidden rounded-4xl border border-border/40 bg-card/70 backdrop-blur-xl p-8 md:p-12 text-center",
            shadows.softCard,
            shadows.hoverPop,
          )}
        >
          <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-primary/25 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center gap-6">
            <div className="flex flex-col gap-4">
              <h2 className={cn("text-foreground", textTitle2)}>
                Ready to Retrofit?
              </h2>
              <p className={cn("text-muted-foreground", textBody3)}>
                Start your calculation now and discover how much energy your
                building could save with the right insulation upgrades.
              </p>
            </div>
            <Button intent="primary" size="lg">
              <a>Start Free Calculation</a>
            </Button>
          </div>
          <div
            className={cn(
              "absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px",
              bgGradient2,
            )}
          />
        </div>
      </Reveal>
    </section>
  );
};

export default FinalCTA;

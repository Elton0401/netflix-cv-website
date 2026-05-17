"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center bg-slate-950 text-slate-50 transition-bg",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={cn(
            `[--bg:#020617]
            [--aurora:repeating-linear-gradient(100deg,#7c3aed_10%,#4f46e5_15%,#2563eb_20%,#7c3aed_25%,#6d28d9_30%)]
            [--mask:repeating-linear-gradient(100deg,var(--bg)_0%,var(--bg)_7%,transparent_10%,transparent_12%,var(--bg)_16%)]
            [background-image:var(--mask),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter blur-[10px]
            after:content-[""] after:absolute after:inset-0
            after:[background-image:var(--mask),var(--aurora)]
            after:[background-size:200%,_100%]
            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
            pointer-events-none
            absolute -inset-[10px] opacity-70 will-change-transform`,
            showRadialGradient &&
              `[mask-image:radial-gradient(ellipse_at_60%_0%,black_35%,transparent_80%)]`
          )}
        />
      </div>
      {children}
    </div>
  );
};

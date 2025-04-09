"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

function Separator() {
  return (
    <div
      data-slot="separator-root"
      className={cn("bg-primary shrink-0 h-px bg-gradient-to-r from-background via-foreground/50 to-background")}
    />
  );
}

export { Separator };

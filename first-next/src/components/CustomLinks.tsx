"use client";

import Link from "next/link";
import React from "react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { cva } from "class-variance-authority";
import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const linkStyles = cva(["transition duration-300 ease-in-out"], {
  variants: {
    intent: {
      danger: ["bg-red-500", "text-white", "hover:bg-red-300"],
      sky: ["bg-blue-500", "text-white", "hover:bg-gray-300"],
      primary: ["text-white"],
      orange: ["bg-orange-500", "text-white", "hover:bg-gray-300"],
    },

    size: {
      default: ["px-3", "py-2", "rounded-sm"],
      sm: ["px-2", "rounded-sm"],
      md: ["px-3", "py-2", "rounded-sm"],
      mf: ["px-3", "py-2", "rounded-2xl"],
      lg: ["px-4", "py-3", "rounded-sm"],
    },
  },
  defaultVariants: { intent: "primary", size: "default" },
});

type LinkProps = VariantProps<typeof linkStyles> &
  ComponentProps<"a"> & {
    href: string;
  };

function CustomLinks({
  href,
  children,
  intent,
  size,
  className,
  ...props
}: LinkProps) {
  const combinedClassees = twMerge(linkStyles({ intent, size }), className);
  return (
    <Link href={href} className={combinedClassees} {...props}>
      {children}
    </Link>
  );
}

export default CustomLinks;

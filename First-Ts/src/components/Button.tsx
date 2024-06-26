import { cva } from "class-variance-authority";
import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const ButtonStyles = cva(["transition-colors"], {
  variants: {
    variant: {
      default: ["bg-secondary", "hover:bg-secondary-hover"],
      ghost: ["hover:bg-gray-100"],
      dark: ["bg-black", "text-white", "hover:bg-gray-800"],
      error: ["bg-red-500", "hover:bg-red-600"],
    },
    size: {
      default: ["rounded", "p-2"],
      icon: [
        "rounded-full",
        "w-10",
        "h-10",
        "flex",
        "items-center",
        "justify-center",
        "p-2.5",
      ],
    },
  },
  defaultVariants: { variant: "default", size: "default" },
});

type ButtonProps = VariantProps<typeof ButtonStyles> & ComponentProps<"button">;

function Button({ variant, size, className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={twMerge(ButtonStyles({ variant, size }), className)}
    ></button>
  );
}

export default Button;

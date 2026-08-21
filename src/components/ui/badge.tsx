import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md px-2 py-0.5 text-xs font-semibold",
  {
    variants: {
      variant: {
        default: "border border-blue-100 bg-blue-50 text-blue-600",
        orange: "bg-tag text-white",
        red: "border border-red-100 bg-red-50 text-red-500",
        outline: "border border-gray-200 bg-white text-gray-500",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

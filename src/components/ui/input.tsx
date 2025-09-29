
import * as React from "react"
import { cn } from "@/lib/utils"

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "prefix"> {
  prefix?: React.ReactNode
}

function Input({ className, type, prefix, ...props }: InputProps) {
  return (
    <div
      className={cn(
        "flex h-[48px] w-full items-center border-b border-black bg-transparent focus-within:border-ring focus-within:ring-[3px] focus-within:rounded-md",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
    >
      {prefix && (
        <span className="ml-2 mr-2 text-muted-foreground flex items-center">
          {prefix}
        </span>
      )}
      <input
        type={type}
        data-slot="input"
        className={cn(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 flex h-full w-full min-w-0 bg-transparent px-3 py-1 text-base transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium md:text-sm"
        )}
        {...props}
      />
    </div>
  )
}

export { Input }


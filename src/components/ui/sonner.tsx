import * as React from "react"
import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      icons={{
        success: (
          <span className="material-symbols-outlined text-sm">check_circle</span>
        ),
        info: (
          <span className="material-symbols-outlined text-sm">info</span>
        ),
        warning: (
          <span className="material-symbols-outlined text-sm">warning</span>
        ),
        error: (
          <span className="material-symbols-outlined text-sm">error</span>
        ),
        loading: (
          <span className="material-symbols-outlined text-sm animate-spin">progress_activity</span>
        ),
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--border-radius": "var(--radius)",
        } as React.CSSProperties
      }
      toastOptions={{
        classNames: {
          toast: "cn-toast",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }

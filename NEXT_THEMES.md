# next-themes Implementation

## Overview

This project uses [`next-themes`](https://github.com/pacocoursey/next-themes) (v0.4.6) for dark mode with Tailwind CSS v4 class-based theming.

## Setup Steps

### 1. Install

```bash
npm install next-themes
```

### 2. Theme Provider (`src/app/components/theme-provider.tsx`)

A thin client wrapper around `next-themes` `<ThemeProvider />`:

```tsx
"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
```

### 3. Wrap in Root Layout (`src/app/layout.tsx`)

The `<ThemeProvider>` wraps `<body>` with `attribute="class"`, `defaultTheme="system"`, and `enableSystem`:

```tsx
<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
  <body suppressHydrationWarning className="min-h-full flex flex-col">
    {children}
  </body>
</ThemeProvider>
```

- `attribute="class"` — toggles the `.dark` class on `<html>` (required for Tailwind class-based dark mode)
- `defaultTheme="system"` — defaults to OS preference
- `enableSystem` — allows following the system color scheme
- `suppressHydrationWarning` on `<body>` — prevents hydration mismatch from the theme class

### 4. Tailwind CSS v4 Dark Mode Variant (`src/app/globals.css`)

Tailwind CSS v4 does not enable class-based `dark:` variants by default. Add:

```css
@custom-variant dark (&:where(.dark, .dark *));
```

This tells Tailwind to apply `dark:` utility classes when the ancestor has the `.dark` class.

### 5. Using `useTheme` in Components

```tsx
"use client"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null // prevent hydration mismatch

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      Toggle
    </button>
  )
}
```

Key points:
- `useTheme` can only be used in **client components** (`"use client"`)
- Always guard with a `mounted` state to avoid hydration mismatch (the server can't know the theme)
- `theme` returns the resolved theme (`"light"` or `"dark"`); `setTheme` accepts `"light"`, `"dark"`, or `"system"`

## Theming with CSS Variables

The project also defines CSS custom properties for background and foreground colors in `globals.css`, which update based on `prefers-color-scheme`. These are used directly on `<body>` for a smooth initial render before JavaScript loads.

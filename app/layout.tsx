import type { ReactNode } from "react"

export const metadata = { title: "maroon-flows-601174.framer.app" }

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'WebhookTest — Test & Debug Webhook Endpoints',
  description: 'Temporary webhook URLs, real-time payload capture, signature validation, and scenario simulation for backend developers and DevOps engineers.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="9c6a1624-49b6-44ac-be19-a8ffcc02e8c9"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}

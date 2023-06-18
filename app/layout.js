import './globals.css'

export const metadata = {
  title: 'Multi-Category Trivia Quiz',
  description: 'Created by Trae Zeeofor',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

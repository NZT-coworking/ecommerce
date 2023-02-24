import './globals.css'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <head>
        <title>Ecommerce</title>
      </head>
      <body>
          <header>
            header
          </header>
          {children}
          <footer>
            footer
          </footer>
      </body>
    </html>
  )
}

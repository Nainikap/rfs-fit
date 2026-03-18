import '../index.css';
import '../App.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
        <head>
    <meta charSet="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/logo.jpeg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Redefined Fitness Solution</title>
  </head>
      <body>{children}</body>
    </html>
  );
}
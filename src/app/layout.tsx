// app/layout.tsx
import '../app/globals.css';

export const metadata = {
  title: 'Your Page Title',
  description: 'Your page description',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
      </head>
      <body>
        {children} {/* This will render the content from page.tsx or other pages */}
      </body>
    </html>
  );
}
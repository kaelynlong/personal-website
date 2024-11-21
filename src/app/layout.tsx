import '../app/globals.css';
import FloatingActions from '../components/fab';

export const metadata = {
  title: 'Personal Website Portfolio',
  description: 'Kaelyn Long Lin',
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
        {children}
        <FloatingActions />
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Inter, Fira_Code } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://srikanth2733003.github.io'),
  title: 'Srikanth Kapugorlla | Java Full Stack Developer Portfolio',
  description:
    'Passionate Java Full Stack Developer specializing in Java, Spring, Servlets, JSP, JDBC, SQL, MySQL, HTML, CSS, JavaScript, and modern web applications.',
  keywords: [
    'Srikanth Kapugorlla',
    'Java Full Stack Developer',
    'Java Developer',
    'Servlets',
    'JSP',
    'JDBC',
    'MySQL',
    'Spring Boot',
    'Web Developer Portfolio',
    'Nellore Andhra Pradesh',
    'BIHER ECE',
    'Bosch Intern',
  ],
  authors: [{ name: 'Srikanth Kapugorlla' }],
  creator: 'Srikanth Kapugorlla',
  openGraph: {
    title: 'Srikanth Kapugorlla | Java Full Stack Developer',
    description:
      'Passionate Java Full Stack Developer specializing in Java, Spring, Servlets, JSP, JDBC, SQL, MySQL, HTML, CSS, JavaScript.',
    url: 'https://srikanth2733003.github.io',
    siteName: 'Srikanth Kapugorlla Portfolio',
    images: [
      {
        url: '/srikanth-profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Srikanth Kapugorlla - Java Full Stack Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Srikanth Kapugorlla | Java Full Stack Developer',
    description:
      'Passionate Java Full Stack Developer specializing in Java, Servlets, JSP, JDBC, SQL, MySQL.',
    images: ['/srikanth-profile.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${firaCode.variable} font-sans antialiased bg-slate-950 text-slate-100 min-h-screen selection:bg-cyan-500 selection:text-slate-950`}
      >
        {children}
      </body>
    </html>
  );
}

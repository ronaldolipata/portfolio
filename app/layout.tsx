import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Ronaldo Lipata',
  description:
    'Showcasing my work experience, projects, and skills, this portfolio highlights my journey as a developer. Explore my past work, expertise, and what I bring to the table."',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className='2xl:w-[100rem] min-h-screen flex flex-col mx-auto'>
          <div className='w-full pt-[6.25rem] px-8'>{children}</div>
        </div>
      </body>
    </html>
  );
}

import { ReactNode } from 'react';
import Link from 'next/link';

type CustomLinkProps = {
  href: string;
  children?: ReactNode; // Allows any valid JSX inside
};

export default function CustomLink({ href, children }: CustomLinkProps) {
  return (
    <Link
      href={href}
      target='_blank'
      rel='noreferrer'
      className='inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2 has-[>svg]:px-3 bg-primary text-primary-foreground shadow-xs hover:bg-primary/90'
    >
      {children}
    </Link>
  );
}

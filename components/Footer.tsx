import React from 'react';
import Link from 'next/link';
import LinkedInIcon from '@/components/icons/LinkedInIcon';
import GitHubIcon from './icons/GitHubIcon';
import { getCurrentYear } from '@/utils/getCurrentYear';

export default function Footer() {
  return (
    <footer className='max-w-[37rem] py-12 lg:py-24 md:mx-auto md:text-center'>
      <div className='flex flex-col md:items-center gap-4'>
        <p>
          Thank you for stopping by. Whether you have a business inquiry, collaboration proposal, or
          just want to say hello, I would love to hear from you.
        </p>
        <p>
          You can reach me through:
          <span> ronaldo.lipata@serratechsolutions.com</span>
        </p>
        <div className='flex gap-2'>
          <Link href='https://github.com/ronaldolipata' target='_blank' rel='noreferrer'>
            <GitHubIcon />
          </Link>
          <Link href='https://www.linkedin.com/in/ronaldolipata/' target='_blank' rel='noreferrer'>
            <LinkedInIcon />
          </Link>
        </div>
        <p>
          I am also available in{' '}
          <Link
            href={'https://www.upwork.com/freelancers/~0198bbbb2a2f09177a'}
            target='_blank'
            className='text-blue-900 font-semibold'
          >
            Upwork
          </Link>
          .
        </p>
        <p>
          <span>Ronaldo Lipata &copy; {getCurrentYear()}</span>
        </p>
      </div>
    </footer>
  );
}

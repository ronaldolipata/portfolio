import Link from 'next/link';
import Section from '@/components/Section';
import { Card } from '@/components/ui/card';

export default function WorkExperiences() {
  return (
    <Section heading='Work Experience'>
      <div className='flex flex-col gap-4'>
        <div>
          <p>
            Owner at <span className='font-semibold'>Serra Tech Solutions</span>
          </p>
          <p className='text-slate-400'>June 2024 - Present</p>
        </div>
        <div>
          <p>
            IT Support & Web Developer at{' '}
            <Link
              href={'https://www.facebook.com/KOOLWELDENGINEERINGCONTRACTOR/'}
              target='_blank'
              rel='noreferrer'
              className='font-semibold text-blue-900'
            >
              Koolweld Engineering Contractor
            </Link>
          </p>
          <p className='text-slate-400'>October 2024 - Present</p>
        </div>
        <div>
          <p>
            Full Stack Developer (Volunteer) at{' '}
            <Link
              href={'https://www.payatasorionefoundation.com/'}
              target='_blank'
              rel='noreferrer'
              className='font-semibold text-blue-900'
            >
              Payatas Orione Foundation Inc
            </Link>
          </p>
          <p className='text-slate-400'>January 2024 - March 2024</p>
        </div>
        <div>
          <p>
            Alumni Mentor at{' '}
            <Link
              href={'https://www.upliftcodecamp.com/'}
              target='_blank'
              rel='noreferrer'
              className='font-semibold text-blue-900'
            >
              Uplift Code Camp
            </Link>
          </p>
          <p className='text-slate-400'>October 2023 - March 2024</p>
        </div>
        <div>
          <p>
            Web Developer at{' '}
            <Link
              href={'https://seo-hacker.com/'}
              target='_blank'
              rel='noreferrer'
              className='font-semibold text-blue-900'
            >
              SEO Hacker
            </Link>
          </p>
          <p className='text-slate-400'>August 2023 - January 2024</p>
        </div>
      </div>
    </Section>
  );
}

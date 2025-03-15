import { ReactNode } from 'react';

type SectionProps = {
  heading: string;
  backgroundColor?: string;
  children?: ReactNode; // Allows any valid JSX inside
};

export default function Section({ heading, backgroundColor, children }: SectionProps) {
  return (
    <div
      className={`py-12 flex flex-col gap-5 ${
        backgroundColor ? `${backgroundColor} px-8 -mx-8` : ''
      }`}
    >
      <h2 className='text-xl font-semibold uppercase'>{heading}</h2>
      {children}
    </div>
  );
}

import { ReactNode, HTMLAttributes } from 'react';

type SectionProps = {
  heading: string;
  backgroundColor?: string;
  children?: ReactNode;
  textAlign?: string;
} & HTMLAttributes<HTMLDivElement>; // Extends div props

export default function Section({
  heading,
  backgroundColor,
  textAlign,
  children,
  ...props
}: SectionProps) {
  return (
    <div
      className={`py-12 lg:py-24 flex flex-col gap-5 ${
        backgroundColor ? `${backgroundColor} px-8 -mx-8` : ''
      } ${textAlign}`}
      {...props} // Spreads remaining props onto the div
    >
      <h2 className='text-xl font-semibold uppercase'>{heading}</h2>
      {children}
    </div>
  );
}

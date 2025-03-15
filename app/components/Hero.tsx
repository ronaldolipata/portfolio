import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <div className='min-h-[calc(100vh-3.5rem)] flex flex-col justify-center lg:flex-row lg:justify-between gap-4 -mt-[3rem]'>
      <div className='flex flex-col gap-4'>
        <Image
          className='rounded-full -ml-5'
          src={'/images/ronaldo-lipata.png'}
          width={200}
          height={200}
          alt='Ronaldo Lipata'
        />
        <h1 className='text-3xl'>
          <span className='text-slate-600'>Hello, </span>
          <span className='text-blue-600'>I&apos;m Ronaldo Lipata.</span>
        </h1>
      </div>
      <div className='flex flex-col gap-4 text-slate-600'>
        <h2 className='text-xl'>Software Developer based in the Philippines</h2>
        <p>
          I help business owners and individuals focus on what they do best—running their business.
          I take care of the development, ensuring seamless, efficient solutions to scale your
          business.
        </p>
        <div className='flex gap-2'>
          <Button className='w-[10rem]'>Schedule a call</Button>
          <Button className='w-[10rem]' variant={'outline'}>
            See my work
          </Button>
        </div>
      </div>
    </div>
  );
}

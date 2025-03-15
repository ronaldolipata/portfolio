import Section from '@/components/Section';

const skills = [
  {
    scope: 'Application and Data',
    skills: [
      {
        tech: 'HTML',
      },
      {
        tech: 'CSS',
      },
      {
        tech: 'Tailwind',
      },
      {
        tech: 'Bootstrap',
      },
      {
        tech: 'Sass',
      },
      {
        tech: 'JavaScript',
      },
      {
        tech: 'TypeScript',
      },
      {
        tech: 'React.js',
      },
      {
        tech: 'Next.js',
      },
      {
        tech: 'Redux Toolkit',
      },
      {
        tech: 'Node.js',
      },
      {
        tech: 'Express.js',
      },
      {
        tech: 'REST API',
      },
      {
        tech: 'MongoDB',
      },
      {
        tech: 'Mongoose',
      },
      {
        tech: 'WordPress',
      },
      {
        tech: 'PHP',
      },
      {
        tech: 'Filament v3',
      },
      {
        tech: 'MySQL',
      },
      {
        tech: 'PostgreSQL',
      },
    ],
  },
  {
    scope: 'DevOps',
    skills: [
      {
        tech: 'Git',
      },
      {
        tech: 'GitHub',
      },
      {
        tech: 'Jest',
      },
      {
        tech: 'Vitest',
      },
    ],
  },
  {
    scope: 'Business Tools',
    skills: [
      {
        tech: 'Scrum',
      },
      {
        tech: 'Figma',
      },
      {
        tech: 'Jira',
      },
      {
        tech: 'Trello',
      },
    ],
  },
  {
    scope: 'Utilities',
    skills: [
      {
        tech: 'Insomia',
      },
      {
        tech: 'Google Analytics',
      },
      {
        tech: 'Framer Motion',
      },
      {
        tech: 'Framer',
      },
    ],
  },
];

export default function Skills() {
  return (
    <Section heading='Skills' backgroundColor='bg-slate-50'>
      <div className='flex flex-col gap-4'>
        {skills.map(({ scope, skills }, index) => (
          <div key={index} className='flex flex-col gap-2'>
            <h3 className='text-lg'>{scope}</h3>
            <div className='flex flex-wrap gap-1'>
              {skills.map(({ tech }, index) => (
                <span
                  key={index}
                  className='py-[2px] px-3 text-sm font-medium bg-blue-200 rounded-full'
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

import CustomLink from '@/components/CustomLink';
import { Button } from '@/components/ui/button';

const featuredProjects = [
  {
    name: 'Big Ben Group',
    description:
      'Built website from scratch using WordPress custom theme. Used advanced Custom Field Groups, Custom Post Types, Contact Form 7 for lead generations, and carousel.',
    src: {
      iphone:
        'https://res.cloudinary.com/dkpg4tdoq/image/upload/v1703001604/bigben-iphone_rhezxf.png',
      mackbook:
        'https://res.cloudinary.com/dkpg4tdoq/image/upload/v1703001605/bigben-macbook_uxvajh.png',
    },
    techUsed: [
      {
        tech: 'HTML',
      },
      {
        tech: 'CSS',
      },
      {
        tech: 'WordPress',
      },
      {
        tech: 'Bootstrap',
      },
      {
        tech: 'PHP',
      },
      {
        tech: 'MySQL',
      },
      {
        tech: 'JavaScript',
      },
    ],
    projectType: 'employment',
    github: null,
    demoLink: 'https://bigbengroup.ph/',
    completed: true,
    availability: true,
  },
  {
    name: 'Sustainability Aboitiz',
    description:
      'Re-code the website using WordPress custom theme. Used advanced Custom Field Groups, Custom Post Types, Contact Form 7 for lead generations, and carousel.',
    src: {
      iphone:
        'https://res.cloudinary.com/dkpg4tdoq/image/upload/v1703691590/Web%20Dev%20Portfolio/featured-projects/sustainability-aboitiz-iphone_botgeg.png',
      mackbook:
        'https://res.cloudinary.com/dkpg4tdoq/image/upload/v1703691589/Web%20Dev%20Portfolio/featured-projects/sustainability-aboitiz-macbook_ouioc9.png',
    },
    techUsed: [
      {
        tech: 'HTML',
      },
      {
        tech: 'CSS',
      },
      {
        tech: 'WordPress',
      },
      {
        tech: 'Bootstrap',
      },
      {
        tech: 'PHP',
      },
      {
        tech: 'MySQL',
      },
      {
        tech: 'JavaScript',
      },
    ],
    projectType: 'employment',
    github: null,
    demoLink: 'https://innovnational.com/aboitizsustainability/',
    completed: true,
    availability: true,
  },
  {
    name: 'XCR Collections Management',
    description:
      'A web app that streamlines account management for collection agency. Banks endorse accounts, MIS users upload data via Excel, Tele and Field users update records, and the data is extracted back to Excel for reporting.',
    src: {
      iphone:
        'https://res.cloudinary.com/dkpg4tdoq/image/upload/v1722364152/Web%20Dev%20Portfolio/featured-projects/xcr-iphone_m0gwdl.png',
      mackbook:
        'https://res.cloudinary.com/dkpg4tdoq/image/upload/v1722364152/Web%20Dev%20Portfolio/featured-projects/xcr-macbook_gizoca.png',
    },
    techUsed: [
      {
        tech: 'Filament v3',
      },
      {
        tech: 'Laravel',
      },
      {
        tech: 'PHP',
      },
      {
        tech: 'PostgreSQL',
      },
      {
        tech: 'Tailwind',
      },
      {
        tech: 'Docker',
      },
      {
        tech: 'DigitalOcean',
      },
    ],
    projectType: 'freelance',
    github: null,
    demoLink: null,
    completed: true,
    availability: false,
  },
  {
    name: 'Intersect Professional Services',
    description:
      'Revamped the website to improve overall designs, add sections and pages. Additionally, enable users to reach out to the client through messaging via the contact form.',
    src: {
      iphone:
        'https://res.cloudinary.com/dkpg4tdoq/image/upload/v1707990988/Web%20Dev%20Portfolio/featured-projects/ips-iphone_kaycxx.png',
      mackbook:
        'https://res.cloudinary.com/dkpg4tdoq/image/upload/v1722364152/Web%20Dev%20Portfolio/featured-projects/ips-macbook_kfk385.png',
    },
    techUsed: [
      {
        tech: 'WordPress',
      },
      {
        tech: 'Tailwind',
      },
      {
        tech: 'JavaScript',
      },
      {
        tech: 'PHP',
      },
      {
        tech: 'MySQL',
      },
      {
        tech: 'Linode',
      },
      {
        tech: 'Cloudflare',
      },
    ],
    projectType: 'freelance',
    github: null,
    demoLink: 'https://intersectprofessionalservices.com/',
    completed: true,
    availability: true,
  },
  {
    name: 'Koolweld Engineering Contractor',
    description:
      'Revamped the website to improve overall designs, implement upload feature for files and pictures, allowing the company to showcase their work and engage potential clients.',
    src: {
      iphone:
        'https://res.cloudinary.com/dkpg4tdoq/image/upload/v1686751427/Web%20Dev%20Portfolio/featured-projects/koolweld-iphone_jycwpd.png',
      mackbook:
        'https://res.cloudinary.com/dkpg4tdoq/image/upload/v1686751427/Web%20Dev%20Portfolio/featured-projects/koolweld-macbook_l87gnf.png',
    },
    techUsed: [
      {
        tech: 'Next.js 13',
      },
      {
        tech: 'TypeScript',
      },
      {
        tech: 'Tailwind',
      },
      {
        tech: 'Node',
      },
      {
        tech: 'Express',
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
    ],
    projectType: 'freelance',
    github: null,
    demoLink: 'https://koolweld.com/',
    completed: true,
    availability: true,
  },
];

export default function FeaturedProjects() {
  return (
    <div className='flex flex-col' id='featured-projects'>
      {featuredProjects.map(
        ({ name, description, src, techUsed, demoLink, projectType, completed }, index) => (
          <div
            key={index}
            className={`lg:min-h-[calc(100vh-3.5rem)] flex flex-col lg:flex-row md:items-center lg:justify-between gap-[4rem] py-12 lg:p-24 md:text-center lg:text-left ${
              index % 2 === 0 ? 'bg-slate-50 px-8 -mx-8 lg:rounded-4xl' : 'lg:flex-row-reverse'
            }`}
          >
            <div className='max-w-[37rem] flex flex-col md:items-center lg:items-start gap-4'>
              {index === 0 && (
                <h2 className='mb-[1.25rem] text-xl font-semibold uppercase'>Featured Projects</h2>
              )}
              <h3 className='text-lg font-medium'>{name}</h3>
              <div className='flex gap-1 -mt-3'>
                <span
                  className={`py-[2px] px-3 text-sm font-medium rounded-full ${
                    completed ? 'text-green-900 bg-green-200' : 'text-blue-900 bg-blue-200'
                  }`}
                >
                  {completed ? 'completed' : 'on-going'}
                </span>
                <span className='py-[2px] px-3 text-sm font-medium text-blue-900 border border-blue-200 rounded-full'>
                  {projectType} project
                </span>
              </div>
              <p className='text-slate-600'>{description}</p>
              <div className='flex flex-wrap md:justify-center lg:justify-start gap-1'>
                {techUsed.map(({ tech }, index) => (
                  <span
                    key={index}
                    className='py-[2px] px-3 text-sm font-medium text-blue-900 bg-blue-200 rounded-full'
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div>
                {demoLink ? (
                  <CustomLink href={demoLink}>View project</CustomLink>
                ) : (
                  <Button className='cursor-not-allowed' variant={'outline'} disabled>
                    Not available, for private use only
                  </Button>
                )}
              </div>
            </div>
            <div className='flex flex-col lg:flex-row items-center gap-4'>
              <div className='shadow-sm rounded-full'>
                <img src={src.iphone} width={300} height={100} alt={name} />
              </div>
              <div className='hidden lg:block'>
                <img src={src.mackbook} width={400} height={100} alt={name} />
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}

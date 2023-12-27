import style from '@/components/FeaturedProjects/style.module.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaWordpress,
  FaBootstrap,
} from 'react-icons/fa';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import {
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiPhp,
} from 'react-icons/si';
import { TbBrandMysql } from 'react-icons/tb';
import { ReactComponent as RestIcon } from '@/assets/svg/rest-api-icon.svg';
import { ReactComponent as MongooseIcon } from '@/assets/svg/mongoose-icon.svg';

export default function FeaturedProjects() {
  const featuredProjectsData = [
    {
      name: 'Koolweld Engineering Contractor',
      desc: 'Improve overall designs, implemented upload feature for files and pictures, allowing the company to showcase their work and engage potential clients.',
      src: {
        iphone:
          'https://res.cloudinary.com/dkpg4tdoq/image/upload/v1686751427/Web%20Dev%20Portfolio/featured-projects/koolweld-iphone_jycwpd.png',
        mackbook:
          'https://res.cloudinary.com/dkpg4tdoq/image/upload/v1686751427/Web%20Dev%20Portfolio/featured-projects/koolweld-macbook_l87gnf.png',
      },
      techUsed: [
        {
          tech: 'Next.js 13',
          img: <SiNextdotjs />,
        },
        {
          tech: 'TypeScript',
          img: <SiTypescript />,
        },
        {
          tech: 'Tailwind',
          img: <SiTailwindcss />,
        },
        {
          tech: 'Node',
          img: <FaNodeJs />,
        },
        {
          tech: 'Express',
          img: <SiExpress />,
        },
        {
          tech: 'REST API',
          img: <RestIcon className={style.restIcon} />,
        },
        {
          tech: 'MongoDB',
          img: <SiMongodb />,
        },
        {
          tech: 'Mongoose',
          img: <MongooseIcon className={style.mongooseIcon} />,
        },
      ],
      projectType: 'freelance',
      github: '',
      demo: 'https://koolweld.com/',
      completed: true,
      availability: true,
    },
    {
      name: 'Big Ben Group',
      desc: 'Built website from scratch using WordPress custom theme. Used advanced Custom Field Groups, Custom Post Types, Contact Form 7 for lead generations, and carousel.',
      src: {
        iphone:
          'https://res.cloudinary.com/dkpg4tdoq/image/upload/v1703001604/bigben-iphone_rhezxf.png',
        mackbook:
          'https://res.cloudinary.com/dkpg4tdoq/image/upload/v1703001605/bigben-macbook_uxvajh.png',
      },
      techUsed: [
        {
          tech: 'HTML',
          img: <FaHtml5 />,
        },
        {
          tech: 'CSS',
          img: <FaCss3Alt />,
        },
        {
          tech: 'WordPress',
          img: <FaWordpress />,
        },
        {
          tech: 'Bootstrap',
          img: <FaBootstrap />,
        },
        {
          tech: 'PHP',
          img: <SiPhp />,
        },
        {
          tech: 'MySQL',
          img: <TbBrandMysql />,
        },
        {
          tech: 'JavaScript',
          img: <SiJavascript />,
        },
      ],
      projectType: 'employment',
      github: '',
      demo: 'https://bigbengroup.ph/',
      completed: false,
      availability: true,
    },
    {
      name: 'Sustainability Aboitiz',
      desc: 'Re-code the website using WordPress custom theme. Used advanced Custom Field Groups, Custom Post Types, Contact Form 7 for lead generations, and carousel.',
      src: {
        iphone:
          'https://res.cloudinary.com/dkpg4tdoq/image/upload/v1703691590/Web%20Dev%20Portfolio/featured-projects/sustainability-aboitiz-iphone_botgeg.png',
        mackbook:
          'https://res.cloudinary.com/dkpg4tdoq/image/upload/v1703691589/Web%20Dev%20Portfolio/featured-projects/sustainability-aboitiz-macbook_ouioc9.png',
      },
      techUsed: [
        {
          tech: 'HTML',
          img: <FaHtml5 />,
        },
        {
          tech: 'CSS',
          img: <FaCss3Alt />,
        },
        {
          tech: 'WordPress',
          img: <FaWordpress />,
        },
        {
          tech: 'Bootstrap',
          img: <FaBootstrap />,
        },
        {
          tech: 'PHP',
          img: <SiPhp />,
        },
        {
          tech: 'MySQL',
          img: <TbBrandMysql />,
        },
        {
          tech: 'JavaScript',
          img: <SiJavascript />,
        },
      ],
      projectType: 'employment',
      github: '',
      demo: 'https://innovnational.com/aboitizsustainability/',
      completed: false,
      availability: true,
    },
    {
      name: 'Card Matching Game - Space Theme',
      desc: 'The mechanic is to match the cards by flipping each cards within 100 seconds to win. The Players can also see their flip count to record their best scores.',
      src: {
        iphone:
          'https://res.cloudinary.com/dkpg4tdoq/image/upload/v1677150055/Web%20Dev%20Portfolio/featured-projects/mixmatch-iphone_q44ydp.png',
        mackbook:
          'https://res.cloudinary.com/dkpg4tdoq/image/upload/v1677149869/Web%20Dev%20Portfolio/featured-projects/mixmatch-macbook_twuojg.png',
      },
      techUsed: [
        {
          tech: 'HTML',
          img: <FaHtml5 />,
        },
        {
          tech: 'CSS',
          img: <FaCss3Alt />,
        },
        {
          tech: 'JavaScript',
          img: <SiJavascript />,
        },
      ],
      projectType: 'personal',
      github: 'https://github.com/ronaldolipata/Card-Matching-Game-Space-Theme',
      demo: 'https://ronaldolipata.github.io/card-matching-game-space-theme/',
      completed: true,
      availability: true,
    },
  ];

  return (
    <section id="projects">
      {featuredProjectsData.map(
        (
          {
            name,
            desc,
            src,
            techUsed,
            demo,
            projectType,
            github,
            completed,
            availability,
          },
          index
        ) => (
          <div key={name} className={style.container}>
            {index !== 0 ? (
              false
            ) : (
              <h2 className={style.sectionTitle}>Featured Projects</h2>
            )}
            <div
              className={
                index % 2 === 0
                  ? style.subContainer
                  : `${style.subContainer} ${style.subContainerReverse}`
              }
            >
              <div className={style.projectDescription}>
                <div className={style.projectTitleContainer}>
                  <h3 className={`${style.primaryColor} ${style.projectTitle}`}>
                    {name}
                  </h3>
                  <div className={style.projectTagContainer}>
                    <span className={style.projectTag}>
                      {completed ? 'completed' : 'on-going'}
                    </span>
                    <span className={style.projectTag}>
                      {projectType} project
                    </span>
                  </div>
                </div>
                <p>{desc}</p>
                <div className={style.techUsed}>
                  {techUsed.map(({ tech, img }) => (
                    <span key={tech} className={style.iconFlex}>
                      {tech} {img}
                    </span>
                  ))}
                </div>
                <div className={style.ctaContainer}>
                  <a
                    href={demo}
                    target="_blank"
                    onClick={
                      availability ? null : (event) => event.preventDefault()
                    }
                    className={style.ctaButton}
                    rel="noreferrer"
                  >
                    {availability ? 'View Demo' : 'Not available'}
                  </a>
                  {github !== '' ? (
                    <>
                      <span className={style.horizatalSeparation}>|</span>
                      <a
                        href={github}
                        target="_blank"
                        className={style.repository}
                      >
                        Repository{' '}
                        <BsBoxArrowUpRight className={style.externalLinkIcon} />
                      </a>
                    </>
                  ) : (
                    false
                  )}
                </div>
              </div>
              <div className={style.projectImageContainer}>
                <LazyLoadImage
                  className={style.projectImageIphone}
                  src={src.iphone}
                  alt="featured project image in iphone"
                />
                <LazyLoadImage
                  className={style.projectImageMacbook}
                  src={src.mackbook}
                  alt="featured project image in macbook"
                />
              </div>
            </div>
          </div>
        )
      )}
    </section>
  );
}

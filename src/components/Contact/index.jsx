import { FaLinkedin, FaGithubSquare, FaDribbbleSquare } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';
import style from '@/components/Contact/style.module.css';
import getCurrentYear from '../../utils/getCurrentYear';

export default function Contact() {
  return (
    <section id="contact" className={style.container}>
      <h2 className={style.sectionTitle}>Get in touch</h2>
      <div className={style.textContainer}>
        <p className={style.text}>
          Thank you for stopping by! Whether you have a business inquiry,
          collaboration proposal, or just want to say hello, I'd love to hear
          from you.
        </p>
        <p className={style.text}>
          You can reach me through:{' '}
          <span className={style.primaryColor}> lipata.ronaldo@gmail.com</span>
        </p>
        <p>I am also available on below:</p>
        <div className={style.socialIconsContainer}>
          <a
            href="https://www.linkedin.com/in/ronaldolipata/"
            aria-label="Know more about Ronaldo Lipata in LinkedIn"
            target="_blank"
            className={style.socialIcon}
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/ronaldolipata"
            aria-label="Know more about Ronaldo Lipata in GitHub"
            target="_blank"
            className={style.socialIcon}
            rel="noreferrer"
          >
            <FaGithubSquare />
          </a>
          <a
            href="https://dribbble.com/ronaldolipata"
            aria-label="Know more about Ronaldo Lipata in Dribbble"
            target="_blank"
            className={`${style.socialIcon} ${style.dribbleIcon}`}
            rel="noreferrer"
          >
            <FaDribbbleSquare />
          </a>
        </div>
        <div className={style.upworkContainer}>
          <a
            className={`${style.text} ${style.hire}`}
            aria-label="Hire Ronaldo Lipata in Upwork"
            href="https://www.upwork.com/freelancers/~0198bbbb2a2f09177a"
            target="_blank"
            rel="noreferrer"
          >
            <span className={style.primaryColor}>Hire me on Upwork</span>
            <SiUpwork className={style.upwork} />
          </a>
        </div>
        <p className={style.copyright}>
          <span>Ronaldo Lipata &copy; {getCurrentYear()}</span>
        </p>
      </div>
    </section>
  );
}

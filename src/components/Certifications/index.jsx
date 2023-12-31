import { LazyLoadImage } from 'react-lazy-load-image-component';
import style from '@/components/Certifications/style.module.css';

export default function Certifications() {
  return (
    <section id='certifications' className={style.container}>
      <h2 className={style.sectionTitle}>Certifications</h2>
      <div className={style.cardContainer}>
        <div className={style.card}>
          <div className={style.subContainer}>
            <LazyLoadImage
              className={style.cardImage}
              src='https://res.cloudinary.com/dkpg4tdoq/image/upload/v1676132059/Web%20Dev%20Portfolio/certifications/ronaldo-lipata-uplift-certificate_iewwmp.svg'
              alt='certificate image'
            />
            <div className={style.cardDescription}>
              <p className={`${style.cardTitle} ${style.primaryColor}`}>
                Full Stack Web Development
              </p>
              <p>Uplift Code Camp</p>
            </div>
          </div>
          <a
            href='https://drive.google.com/file/d/1Bt8v-lysQKv90u3Y91T6ttUqzU9MWVIR/view?usp=share_link'
            target='_blank'
            className={style.ctaButton}
            rel='noreferrer'
          >
            View Certificate
          </a>
        </div>
        <div className={style.card}>
          <div className={style.subContainer}>
            <LazyLoadImage
              className={style.cardImage}
              src='https://res.cloudinary.com/dkpg4tdoq/image/upload/v1676132059/Web%20Dev%20Portfolio/certifications/ronaldo-lipata-figma-for-beginners-pwa-pilipinas-certificate_khjchj.svg'
              alt='certificate image'
            />
            <div className={style.cardDescription}>
              <p className={`${style.cardTitle} ${style.primaryColor}`}>
                Figma for Beginners
              </p>
              <p>PWA Pilipinas</p>
            </div>
          </div>
          <a
            href='https://drive.google.com/file/d/17mdHZSdgHU_8fsHppKPpmk88x6aCZoMf/view?usp=share_link'
            target='_blank'
            className={style.ctaButton}
            rel='noreferrer'
          >
            View Certificate
          </a>
        </div>
        <div className={style.card}>
          <div className={style.subContainer}>
            <LazyLoadImage
              className={style.cardImage}
              src='https://res.cloudinary.com/dkpg4tdoq/image/upload/v1676132059/Web%20Dev%20Portfolio/certifications/ronaldolipata-conquering-responsive-layouts-certificate_rgfcsz.svg'
              alt='certificate image'
            />
            <div className={style.cardDescription}>
              <p className={`${style.cardTitle} ${style.primaryColor}`}>
                Conquering Responsive Layouts
              </p>
              <p>Kevin Powell</p>
            </div>
          </div>
          <a
            href='https://drive.google.com/file/d/1RbC5BJVMERjp-b_eMJS-jIIys8kaqFYz/view?usp=share_link'
            target='_blank'
            className={style.ctaButton}
            rel='noreferrer'
          >
            View Certificate
          </a>
        </div>
      </div>
    </section>
  );
}

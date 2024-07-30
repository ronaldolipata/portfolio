import style from '@/components/About/style.module.css';

export default function About() {
  return (
    <section id='about' className={style.container}>
      <h2 className={style.sectionTitle}>About me</h2>
      <div className={style.subContainer}>
        <p className={style.text}>
          Hey there! I'm passionate about creating seamless web applications, diving deep into both
          frontend and backend development. My interests span across Software Development,
          Investing, Entrepreneurship, and Agriculture.
        </p>
        <p className={style.text}>
          You can peek into my projects and contributions on GitHub:{' '}
          <a className={style.primaryColor} href='https://github.com/ronaldolipata' target='_blank'>
            https://github.com/ronaldolipata
          </a>
        </p>
        <p className={style.text}>
          Let's{' '}
          <a
            class={style.primaryColor}
            href='https://www.linkedin.com/in/ronaldolipata/'
            target='_blank'
          >
            connect
          </a>{' '}
          and team up on some exciting projects!
        </p>
      </div>
    </section>
  );
}

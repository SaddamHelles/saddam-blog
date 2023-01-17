import Image from 'next/image';
import React from 'react';
import classes from './hero.module.css';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src={'/images/site/saddam.jpeg'}
          alt="Image showing Seraj"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Saddam</h1>
      <p>
        I blog about web developer - especially frontend frameworks like
        ReactJS.
      </p>
    </section>
  );
};

export default Hero;

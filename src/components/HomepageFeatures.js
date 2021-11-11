import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const peopleTitle = "👍 What people had to say about hoard"
const featuresTitleList = [
  "one",
  "two",
  "three"
] 
const FeatureList = [
  {
    title: "\"Why wouldn't you just create an alias in your .bashrc for your commands?\"",
    png: require('../../static/img/person_1.png').default,
    description: (
      <>
      - a former colleague
      </>
    ),
  },
  {
    title: "\"I don't really get it.\"",
    png: require('../../static/img/person_3.png').default,
    description: (
      <>
      - a friend
      </>
    ),
  },
  {
    title: '\"[..] at least the dragon is quite cute!\"',
    png: require('../../static/img/person_2.png').default,
    description: (
      <>
      - someone on the internet
      </>
    ),
  },
];

function Feature({png, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img style={{marginTop:"32px"}} src={png} alt={title} width="64px"/>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="text--center">
          <h3>{peopleTitle}</h3>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

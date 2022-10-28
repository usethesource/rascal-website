import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
    {
        title: 'Design and Implementation of Domain Specific Languages',
        link: '/docs/WhyRascal/UseCases/DomainSpecificLanguages',
        Svg: require('@site/static/images/DSLs.svg').default,
        description: (
            <ul>
                <li>Context Free Grammars</li>
                <li>Concrete Syntax Fragments</li>
                <li>Static Analysis</li>
                <li>Eclipse Plugins</li>
                <li>VScode extensions</li>
                <li>Language Server Protocol</li>
            </ul>
        ),
    },
    {
        title: 'Source Code = Data',
        link: '/docs/WhyRascal/UseCases/CodeAsData',
        Svg: require('@site/static/images/analysis.svg').default,
        description: (
            <ul>
                <li>Java, C++, Python, Ada, ...</li>
                <li>Metrics</li>
                <li>Static Analysis</li>
                <li>Debugging</li>
                <li>Reverse Engineering</li>
            </ul>
        ),
    },
    {
        title: 'Source-to-Source',
        link: '/docs/WhyRascal/UseCases/SourceToSource',
        Svg: require('@site/static/images/transformation.svg').default,
        description: (
            <ul>
                <li>Pattern Matching</li>
                <li>Concrete Syntax Fragments</li>
                <li>Generic Type-safe Traversal</li>
                <li>Transpilers</li>
                <li>Compilers</li>
            </ul>
        ),
    },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <div>
          {description}
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

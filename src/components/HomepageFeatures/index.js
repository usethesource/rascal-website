import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Domain Specific Languages, Parsers & Compilers',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <ul>
        <li>Context Free Grammars</li>
        <li>Concrete Syntax Fragments</li>
        <li>Algebraic Data Types</li>
        <li>(DSL) IDE support in Eclipse and VS Code</li>
        <li>Lexically Scoped Backtracking</li>
        <li>Disambiguation Actions</li>
      </ul>
    ),
  },
  {
    title: 'Source Code Analysis',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <ul>
        <li>Formal Concept Analysis</li>
        <li>Graphs</li>
        <li>M3 Language meta model</li>
        <li>Statistic tests</li>
      </ul>
    ),
  },
  {
    title: 'Source Code Transformation',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <ul>
        <li>Pattern Matching</li>
        <li>Generic Type-safe Traversal</li>
      </ul>
    ),
  },
  {
    title: 'Source code Generation',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <ul>
        <li>String Templates</li>
      </ul>
    ),
  },
  {
    title: 'Java Interop',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <ul>
        <li>Runs on the JVM (8+)</li>
        <li>Java methods callable</li>
        <li>Maven plugin</li>
      </ul>
    ),
  },
  {
    title: 'Visualization',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <ul>
        <li>Draws figures :-)</li>
        <li>Salix web components</li>
        <li>Reverse Engineering</li>
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

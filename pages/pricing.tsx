// pages/pricing.tsx

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Pricing.module.css';

const pricingPlans = [
  {
    name: 'Creator',
    price: '$12',
    description: 'For hobbyists and creators getting started in the Verse.',
    features: [
      'Claim up to 10 Sovereign Colors',
      'Basic Market Access (Buy/Sell)',
      'Create and exhibit 5 creations',
      'Community Forum Access'
    ],
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$25',
    description: 'For professional artists, designers, and active traders.',
    features: [
      'Claim up to 50 Sovereign Colors',
      'Full Market Access (Auctions, Bounties)',
      'Unlimited creation exhibitions',
      'Create and lead a Faction',
      'Access to Print-on-Demand Studio'
    ],
    highlighted: true,
  },
  {
    name: 'Corporation',
    price: 'Contact Us',
    description: 'For brands, agencies, and large-scale enterprises.',
    features: [
      'Unlimited Sovereign Colors',
      'Brandlock™ a corporate color',
      'Dedicated API access',
      'Team management tools',
      'Priority support'
    ],
    highlighted: false,
  },
];

const PricingPage = () => {
  return (
    <>
      <Head>
        <title>Pricing - The Chamber of Contributions</title>
        <meta name="description" content="Choose your subscription plan and become a Guardian of ColorVerse." />
      </Head>
      <div className={styles.pageContainer}>
        <header className={styles.header}>
          <h1 className={styles.title}>The Chamber of Contributions</h1>
          <p className={styles.subtitle}>
            Every great nation is built by its citizens. Choose the plan that best fits your ambitions and begin your journey as a Guardian.
          </p>
        </header>
        
        <div className={styles.pricingGrid}>
          {pricingPlans.map((plan) => (
            <div key={plan.name} className={`${styles.planCard} ${plan.highlighted ? styles.highlighted : ''}`}>
              {plan.highlighted && <div className={styles.highlightBadge}>Most Popular</div>}
              <h2 className={styles.planName}>{plan.name}</h2>
              <div className={styles.planPrice}>
                {plan.price}
                {plan.price.startsWith('$') && <span> / month</span>}
              </div>
              <p className={styles.planDescription}>{plan.description}</p>
              <ul className={styles.featureList}>
                {plan.features.map((feature, index) => (
                  <li key={index} className={styles.featureItem}>{feature}</li>
                ))}
              </ul>
              <Link href={plan.name === 'Corporation' ? '/contact' : '/register'} legacyBehavior>
                <a className={`${styles.ctaButton} ${plan.highlighted ? styles.primaryCta : styles.secondaryCta}`}>
                  {plan.name === 'Corporation' ? 'Contact Sales' : 'Choose Plan'}
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PricingPage;